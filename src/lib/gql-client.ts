import { GraphQLClient } from 'graphql-request'
import { PUBLIC_API_ENDPOINT } from '$env/static/public'
export const client = new GraphQLClient(PUBLIC_API_ENDPOINT)