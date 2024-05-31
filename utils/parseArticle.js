export default function (articles) {
  return {
    path: articles._path,
    title: articles.title || "no-title available",
    description: articles.description || "no-description available",
    image: articles.image || "/not-found.jpg",
    alt: articles.alt || "no alter data available",
    ogImage: articles.ogImage || "/not-found.jpg",
    date:
      articles.date ||
      articles.gitUpdatedAt ||
      articles.gitCreatedAt ||
      "not-date-available",
    tags: articles.tags || [],
    author: articles.author || "eweOS Developers",
    published: articles.published || false,
  };
}
