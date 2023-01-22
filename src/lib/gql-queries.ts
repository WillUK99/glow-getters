import { gql } from 'graphql-request';

export const allArticles = gql`
  query {
    articlePages {
      id
      slug
      title
      createdAt
      metaDescription
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
      metaDescription
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

export const homepageQuery = gql`
  query {
    homePages {
      title
      metaDescription
      carousel {
        carouselItem {
          image {
            url
          }
          imageAlt
        }
      }
    }
  }
`
