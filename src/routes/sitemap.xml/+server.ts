import type { Article } from './../../lib/types/index';
import { client } from '$lib/gql-client';
import { allArticles, homepageQuery } from '$lib/gql-queries';

export async function GET() {
  const website = 'https://moralio.co.uk';

  const { homePages } = await client.request(homepageQuery);
  const { articlePages } = await client.request(allArticles);



  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${website}</loc>
        <lastmod>${new Date(homePages[0].updatedAt).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${website}/articles</loc>
        <lastmod>${new Date(homePages[0].updatedAt).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${articlePages
        .map((article: Article) => `<url>
          <loc>${website}/articles/${article.slug}</loc>
          <lastmod>${new Date(article.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          </url>`)
        .join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600',
      }
    }
  );
}