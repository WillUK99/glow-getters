import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client } from '$lib/gql-client';
import { allArticles } from '$lib/gql-queries';

export const load: PageServerLoad = async () => {
  const data = await client.request(allArticles);

  if (data.articlePages) {
    return {
      articles: data.articlePages,
    };
  }

  throw error(500, 'An error has occured')
};
