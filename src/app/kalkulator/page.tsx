import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/src/components/Container';
import { Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator Bisnis',
  description: 'Kumpulan kalkulator profitabilitas untuk usaha pertanian, peternakan, dan perikanan.',
};

export default function KalkulatorIndex() {
  const calculators = [
    {
      title: 'Kalkulator Ternak Lele',
      description: 'Hitung estimasi modal, biaya pakan, dan keuntungan budidaya ikan lele.',
      href: '/kalkulator/lele',
      category: 'Perikanan',
    },
    {
      title: 'Kalkulator Ayam Petelur',
      description: 'Simulasikan biaya operasional dan pendapatan harian dari usaha ayam petelur.',
      href: '/kalkulator/ayam-petelur',
      category: 'Peternakan',
    },
  ];

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Kalkulator Bisnis Desa</h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Pilih kalkulator untuk mensimulasikan usaha Anda sebelum memulai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Calculator size={24} />
                </div>
                <div>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-500">{calc.category}</span>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{calc.title}</h2>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 flex-grow">
                {calc.description}
              </p>
              <div className="mt-6 text-emerald-600 dark:text-emerald-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                Gunakan Kalkulator →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
