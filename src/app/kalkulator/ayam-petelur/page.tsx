'use client';

import { useState } from 'react';
import Container from '@/src/components/Container';

export default function KalkulatorAyamPetelur() {
  const [chickenCount, setChickenCount] = useState<number>(100);
  const [pulletCost, setPulletCost] = useState<number>(75000);
  const [feedPerDayGram, setFeedPerDayGram] = useState<number>(115);
  const [feedCostPerKg, setFeedCostPerKg] = useState<number>(7500);
  const [eggPricePerKg, setEggPricePerKg] = useState<number>(25000);
  const [henDayPercent, setHenDayPercent] = useState<number>(85);
  const [otherCostsPerMonth, setOtherCostsPerMonth] = useState<number>(150000);

  // Calculations
  const totalPulletCost = chickenCount * pulletCost;
  
  // Feed cost per month (30 days)
  const totalFeedKgPerDay = (chickenCount * feedPerDayGram) / 1000;
  const totalFeedCostPerMonth = totalFeedKgPerDay * 30 * feedCostPerKg;
  
  const totalOperationalCostPerMonth = totalFeedCostPerMonth + otherCostsPerMonth;
  
  // Revenue per month
  // 1 kg eggs = approx 16 eggs
  const eggsPerDay = Math.floor(chickenCount * (henDayPercent / 100));
  const eggKgPerDay = eggsPerDay / 16;
  const revenuePerMonth = eggKgPerDay * 30 * eggPricePerKg;
  
  const profitPerMonth = revenuePerMonth - totalOperationalCostPerMonth;
  const roi = totalPulletCost > 0 ? (profitPerMonth / totalPulletCost) * 100 : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Kalkulator Profit Ayam Petelur</h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Simulasikan biaya operasional dan pendapatan bulanan usaha ayam petelur Anda.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Input Section */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Parameter Input</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jumlah Ayam (ekor)</label>
                  <input
                    type="number"
                    value={chickenCount}
                    onChange={(e) => setChickenCount(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga Pullet per Ekor (Rp)</label>
                  <input
                    type="number"
                    value={pulletCost}
                    onChange={(e) => setPulletCost(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kebutuhan Pakan/Ekor/Hari (gram)</label>
                  <input
                    type="number"
                    value={feedPerDayGram}
                    onChange={(e) => setFeedPerDayGram(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga Pakan per Kg (Rp)</label>
                  <input
                    type="number"
                    value={feedCostPerKg}
                    onChange={(e) => setFeedCostPerKg(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Biaya Lain-lain/Bulan (Vitamin, Listrik) (Rp)</label>
                  <input
                    type="number"
                    value={otherCostsPerMonth}
                    onChange={(e) => setOtherCostsPerMonth(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Produksi Harian (Hen Day %)</label>
                    <input
                      type="number"
                      value={henDayPercent}
                      onChange={(e) => setHenDayPercent(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga Telur per Kg (Rp)</label>
                    <input
                      type="number"
                      value={eggPricePerKg}
                      onChange={(e) => setEggPricePerKg(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hasil Analisa Bulanan</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Modal Awal (Pembelian Pullet)</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(totalPulletCost)}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Biaya Operasional per Bulan</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(totalOperationalCostPerMonth)}</p>
                  <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Pakan: {formatCurrency(totalFeedCostPerMonth)}</li>
                    <li>• Lainnya: {formatCurrency(otherCostsPerMonth)}</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimasi Pendapatan per Bulan</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(revenuePerMonth)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    (± {eggKgPerDay.toFixed(1)} kg / hari)
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Keuntungan Bersih per Bulan</p>
                  <p className={`text-3xl font-bold ${profitPerMonth >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {formatCurrency(profitPerMonth)}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Return on Investment (ROI) Bulanan</p>
                  <div className="flex items-baseline space-x-2">
                    <p className={`text-2xl font-bold ${roi >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {roi.toFixed(2)}%
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">dari modal pullet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
