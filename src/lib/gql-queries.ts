import { gql } from 'graphql-request';

export const articleBySlugQuery = gql`
  query GetArticleFromSlug($slug: String!) {
    articlePage(where: {slug: $slug}) {
      id
      title
      slug
      publishedAt
      content {
        html
      }
    }
  }
`
