import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client } from '$lib/gql-client';
import { articleBySlugQuery } from '$lib/gql-queries';
import type { Article } from '$lib/types';

export const load: PageLoad = (async ({ params }) => {
  const { slug } = params;

  const data = await client.request(articleBySlugQuery, { slug });

  if (data.articlePage) {
    return {
      article: data.articlePage,
    };
  }

  console.log(data)
});
