import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client } from '$lib/gql-client';
import { allArticles, carouselQuery } from '$lib/gql-queries';

export const load: PageLoad = async () => {
  const data = await client.request(allArticles);
  const images = await client.request(carouselQuery);

  if (data.articlePages && images.homePages) {
    return {
      // Messed hygraph up, so I'm hacking this for now
      articles: data.articlePages.slice(Math.max(data.articlePages.length - 8, 0)).reverse(),
      images: images.homePages[0].carousel.carouselItem
    };
  }

  throw error(500, 'An error has occured')
};
