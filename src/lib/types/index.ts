export type Article = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  content?: {
    html?: string;
  };
}