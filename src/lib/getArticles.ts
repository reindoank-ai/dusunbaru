import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  coverImage: string;
  tags: string[];
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string): Article {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      slug: realSlug,
      coverImage: data.coverImage,
      tags: data.tags || [],
    },
    content,
  };
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => (new Date(a.meta.date) > new Date(b.meta.date) ? -1 : 1));
  return articles;
}

export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(
    (article) => article.meta.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set(articles.map((article) => article.meta.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = new Set<string>();
  articles.forEach(article => {
    article.meta.tags.forEach(tag => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags);
}

export function getArticlesByTag(tag: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(
    (article) => article.meta.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}
