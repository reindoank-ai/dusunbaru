import { Metadata } from 'next';
import Container from '@/src/components/Container';
import ArticleList from '@/src/components/ArticleList';
import { getAllCategories, getArticlesByCategory } from '@/src/lib/getArticles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `Kategori: ${categoryName}`,
    description: `Kumpulan artikel tentang ${categoryName} di Dusunbaru.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const articles = getArticlesByCategory(slug);

  return (
    <Container className="py-12">
      <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Kategori: {categoryName}</h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Menampilkan {articles.length} artikel dalam kategori {categoryName}.
        </p>
      </div>
      
      <ArticleList articles={articles.map(a => a.meta)} />
    </Container>
  );
}
