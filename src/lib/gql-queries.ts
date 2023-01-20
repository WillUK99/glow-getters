import { gql } from 'graphql-request';

export const allArticles = gql`
  query {
    articlePages {
      id
      slug
      title
      createdAt
      content {
        text
      }
      imageOne {
        image {
          url
        }
        imageAlt
      }
    }
  }
`

export const articleBySlugQuery = gql`
  query GetArticleFromSlug($slug: String!) {
    articlePage(where: {slug: $slug}) {
      title 
      slug
      createdAt
      content {
        html
      }
      imageOne {
        imageAlt
        image {
          url
        }
      }
      imageTwo {
        imageAlt
        image {
          url
        }
      }
    }
  }
`
