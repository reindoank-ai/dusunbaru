import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import { ThemeProvider } from '@/src/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Dusunbaru',
    default: 'Dusunbaru - Ide Bisnis Desa & Pertanian',
  },
  description: 'Dusunbaru.com adalah situs otoritas tentang ide bisnis desa, budidaya ikan, peternakan unggas, profitabilitas pertanian, dan simulasi bisnis.',
  openGraph: {
    title: 'Dusunbaru - Ide Bisnis Desa & Pertanian',
    description: 'Dusunbaru.com adalah situs otoritas tentang ide bisnis desa, budidaya ikan, peternakan unggas, profitabilitas pertanian, dan simulasi bisnis.',
    url: 'https://dusunbaru.com',
    siteName: 'Dusunbaru',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
