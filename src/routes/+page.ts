import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client } from '$lib/gql-client';
import { allArticles, homepageQuery } from '$lib/gql-queries';

export const load: PageLoad = async () => {
  const homepage = await client.request(homepageQuery);
  const articles = await client.request(allArticles);
  // get meta data for homepage
  if (articles.articlePages && homepage.homePages) {
    return {
      homepage: homepage.homePages[0],
      articles: articles.articlePages.slice(Math.max(articles.articlePages.length - 8, 0)).reverse(),
      images: homepage.homePages[0].carousel.carouselItem,
    };
  }

  throw error(500, 'An error has occured')
};
