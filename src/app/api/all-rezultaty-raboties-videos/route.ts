export async function GET(request: Request) {
  const STRAPI_URL = process.env.STRAPI_API_URL_GRAPHQL as string
  const TOKEN = process.env.STRAPI_API_TOKEN

  if (!STRAPI_URL) throw new Error('Не задан STRAPI_API_URL_GRAPHQL')
  if (!TOKEN) throw new Error('Не задан STRAPI_API_TOKEN')

  const url = new URL(request.url)
  const wantAll = url.searchParams.get('all') === '1'

  const baseBody = {
    query: `
      query RezultatyRabotiesVideos($page: Int, $pageSize: Int) {
        rezultatyRaboties_connection(
          pagination: { page: $page, pageSize: $pageSize }
          sort: "order:asc"
          filters: { isVideo: { eq: true } }
        ) {
          nodes {
            documentId
            contentVideo: content {
              __typename
              ... on ComponentResultsOfWorkSsylkaNaVideo {
                preview {
                  url
                  alternativeText
                }
                link
              }
            }
          }
          pageInfo {
            pageCount
            total
            pageSize
            page
          }
        }
      }
    `,
    variables: {
      page: 1,
      pageSize: 12
    }
  }

  const doFetch = async (body: any) => {
    const res = await fetch(STRAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`GraphQL error: ${res.status} ${text}`)
    }
    return res.json()
  }

  // всегда сначала берем первые 12, чтобы узнать total
  const initialJson = await doFetch(baseBody)
  const initialConnection = initialJson?.data?.rezultatyRaboties_connection
  if (!initialConnection) {
    throw new Error('Нет данных в ответе (initialConnection)')
  }

  if (!wantAll) {
    return new Response(JSON.stringify(initialConnection), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // если хотят все — подгружаем по total
  const total = initialConnection.pageInfo?.total ?? 0
  if (total <= 12) {
    return new Response(JSON.stringify(initialConnection), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const allBody = {
    ...baseBody,
    variables: {
      page: 1,
      pageSize: total
    }
  }

  try {
    const allJson = await doFetch(allBody)
    const allConnection = allJson?.data?.rezultatyRaboties_connection
    if (allConnection) {
      return new Response(JSON.stringify(allConnection), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
  } catch (e) {
    console.warn('Не удалось загрузить все — возвращаем первые 12.', e)
  }

  return new Response(JSON.stringify(initialConnection), {
    headers: { 'Content-Type': 'application/json' }
  })
}
