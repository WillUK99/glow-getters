export type Article = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  content: {
    html: string;
    text: string;
  };
  imageOne: {
    imageAlt: string;
    image: {
      url: string;
    };
  };
  imageTwo: {
    imageAlt: string;
    image: {
      url: string;
    };
  };
}