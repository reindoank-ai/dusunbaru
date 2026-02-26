import { Metadata } from 'next';
import Container from '@/src/components/Container';
import ArticleList from '@/src/components/ArticleList';
import { getAllTags, getArticlesByTag } from '@/src/lib/getArticles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    slug: tag.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tagName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `Tag: #${tagName}`,
    description: `Kumpulan artikel dengan tag #${tagName} di Dusunbaru.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tagName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const articles = getArticlesByTag(slug);

  return (
    <Container className="py-12">
      <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Tag: #{tagName}</h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Menampilkan {articles.length} artikel dengan tag #{tagName}.
        </p>
      </div>
      
      <ArticleList articles={articles.map(a => a.meta)} />
    </Container>
  );
}
