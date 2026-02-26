import { MetadataRoute } from 'next';
import { getAllArticles, getAllCategories } from '@/src/lib/getArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dusunbaru.com';
  
  const articles = getAllArticles();
  const categories = getAllCategories();

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/artikel/${article.meta.slug}`,
    lastModified: new Date(article.meta.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/kategori/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/kalkulator/lele`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
