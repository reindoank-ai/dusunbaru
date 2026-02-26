import Container from './Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-12 transition-colors duration-200">
      <Container>
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6 md:order-2">
            <Link href="/tentang-kami" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
              Kontak
            </Link>
            <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
              Kebijakan Privasi
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400 dark:text-gray-500">
              &copy; {new Date().getFullYear()} Dusunbaru.com. Hak cipta dilindungi.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
