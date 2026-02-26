import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from '@/src/components/Container';
import { getAllArticles, getArticleBySlug } from '@/src/lib/getArticles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.meta.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = getArticleBySlug(slug);
    return {
      title: article.meta.title,
      description: article.meta.description,
      openGraph: {
        title: article.meta.title,
        description: article.meta.description,
        type: 'article',
        publishedTime: article.meta.date,
        images: [
          {
            url: article.meta.coverImage,
          },
        ],
      },
    };
  } catch (e) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  let article;
  try {
    article = getArticleBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="relative h-64 sm:h-80 w-full">
          <Image
            src={article.meta.coverImage}
            alt={article.meta.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="p-8 sm:p-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-emerald-600 dark:text-emerald-500 font-medium text-sm uppercase tracking-wider">
              <Link href={`/kategori/${article.meta.category.toLowerCase()}`} className="hover:underline">
                {article.meta.category}
              </Link>
            </span>
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              {new Date(article.meta.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            {article.meta.title}
          </h1>
          
          {article.meta.tags && article.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.meta.tags.map(tag => (
                <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors">
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          <div className="prose prose-emerald prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Container>
  );
}
