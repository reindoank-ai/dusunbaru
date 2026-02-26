import Link from 'next/link';
import Container from '@/src/components/Container';
import ArticleList from '@/src/components/ArticleList';
import { getAllArticles } from '@/src/lib/getArticles';

export default function Home() {
  const articles = getAllArticles();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-emerald-700 dark:bg-emerald-900 text-white py-20 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Membangun Ekonomi Desa yang Mandiri
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-2xl">
              Temukan panduan lengkap, ide bisnis, dan simulasi keuntungan untuk usaha perikanan, peternakan, dan pertanian di Dusunbaru.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/kalkulator"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 dark:bg-gray-100 dark:hover:bg-white transition-colors"
              >
                Coba Kalkulator Profit
              </Link>
              <Link
                href="#artikel-terbaru"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-600 dark:hover:bg-emerald-800 transition-colors"
              >
                Baca Artikel
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Featured Categories */}
      <div className="py-12 bg-white dark:bg-gray-950 transition-colors duration-200">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Kategori Pilihan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['Perikanan', 'Peternakan', 'Pertanian'].map((cat) => (
              <Link
                key={cat}
                href={`/kategori/${cat.toLowerCase()}`}
                className="relative rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-emerald-400 dark:hover:border-emerald-500 hover:ring-1 hover:ring-emerald-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{cat}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Panduan & Analisa Usaha {cat}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Latest Articles */}
      <div id="artikel-terbaru" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Artikel Terbaru</h2>
          </div>
          <ArticleList articles={articles.map(a => a.meta)} />
        </Container>
      </div>
    </div>
  );
}
