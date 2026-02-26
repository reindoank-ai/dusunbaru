import Link from 'next/link';
import Container from './Container';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
              Dusunbaru
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link href="/" className="text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 text-sm font-medium">
              Beranda
            </Link>
            <Link href="/kategori/perikanan" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 text-sm font-medium">
              Perikanan
            </Link>
            <Link href="/kategori/peternakan" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 text-sm font-medium">
              Peternakan
            </Link>
            <Link href="/kategori/pertanian" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 text-sm font-medium">
              Pertanian
            </Link>
            <Link href="/kalkulator" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 text-sm font-medium">
              Kalkulator
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
