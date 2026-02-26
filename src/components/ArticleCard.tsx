import Link from 'next/link';
import Image from 'next/image';
import { ArticleMeta } from '@/src/lib/getArticles';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <div className="flex flex-col rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 relative h-48 w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-500">
            <Link href={`/kategori/${article.category.toLowerCase()}`} className="hover:underline">
              {article.category}
            </Link>
          </p>
          <Link href={`/artikel/${article.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">{article.title}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">{article.description}</p>
          </Link>
          {article.tags && article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors">
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
