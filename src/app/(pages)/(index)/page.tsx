import type { Blog, Oborudovanie, Otzyvy, RezultatyRabotiesImagesQuery, Sotrudnik, Usluga } from '@/graphql/client'

import { cache } from 'react'

import { HomePage } from './HomePage'
import { gql, PublicationStatus } from '@/graphql/client'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300


const fetchOborudovanies = cache(async () => {
  try {
    const { oborudovanies } = await gql.getOborudovanies()
    return oborudovanies as Oborudovanie[]
  } catch (error) {
    console.error('Ошибка при загрузке oborudovanies:', error)
    return []
  }
})

const fetchSotrudniks = cache(async () => {
  try {
    const { sotrudniks_connection } = await gql.getSotrudniks()
    return sotrudniks_connection.nodes as Sotrudnik[]
  } catch (error) {
    console.error('Ошибка при загрузке sotrudniks:', error)
    return []
  }
})

const fetchOtzyvies = cache(async () => {
  try {
    const { otzyvies } = await gql.Otzyvies()
    return otzyvies as Otzyvy[]
  } catch (error) {
    console.error('Ошибка при загрузке otzyvies:', error)
    return []
  }
})

const fetchBlogs = cache(async () => {
  try {
    const { blogs_connection } = await gql.getBlogsWithPagination({ page: 0, pageSize: 4, status: PublicationStatus.Published })
    return blogs_connection.nodes as Blog[]
  } catch (error) {
    console.error('Ошибка при загрузке blogs:', error)
    return []
  }
})

const fetchRezultatyRabotiesImages = cache(async () => {
  try {
    const { rezultatyRaboties_connection } = await gql.RezultatyRabotiesImages({ page: 1, pageSize: 12 })
    return rezultatyRaboties_connection.nodes as RezultatyRabotiesImagesQuery['rezultatyRaboties_connection']['nodes']
  } catch (error) {
    console.error('Ошибка при загрузке blogs:', error)
    return []
  }
})

const fetchAkcziis = cache(async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/akczii/active`

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  })

  if (!res.ok) {
    console.error('Ошибка при загрузке акций:', await res.text())
    return []
  }

  const json = await res.json()
  return json.data
})

const fetchUslugasPopular = cache(async () => {
  try {
    const { uslugas } = await gql.getUslugasPopular()
    return uslugas as Usluga[]
  } catch (error) {
    console.error('Ошибка при загрузке uslugas:', error)
    return []
  }
})

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: '/', slug: 'index' })

export default async function Home() {
  const [oborudovanies, sotrudniks, otzyvies, blogs, rezultatyRaboties, uslugas, akcziis, pageData] = await Promise.all([fetchOborudovanies(), fetchSotrudniks(), fetchOtzyvies(), fetchBlogs(), fetchRezultatyRabotiesImages(), fetchUslugasPopular(), fetchAkcziis(), fetchPageBySlug('index')])

  return (
    <>
      <HomePage oborudovanies={oborudovanies} sotrudniks={sotrudniks} otzyvies={otzyvies} blogs={blogs} rezultatyRaboties={rezultatyRaboties} uslugas={uslugas} akcziis={akcziis} />
      {pageData?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${pageData.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
