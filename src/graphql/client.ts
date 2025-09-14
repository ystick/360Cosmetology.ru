import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/graphql'

const client = new GraphQLClient(`${process.env.STRAPI_API_URL_GRAPHQL}`, {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
  }
})
export const gql = getSdk(client)
export * from './generated/graphql'
