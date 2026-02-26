'use client';

import { useState } from 'react';
import Container from '@/src/components/Container';

export default function KalkulatorLele() {
  const [fishCount, setFishCount] = useState<number>(1000);
  const [seedCost, setSeedCost] = useState<number>(250);
  const [feedCostPerKg, setFeedCostPerKg] = useState<number>(12000);
  const [totalFeedKg, setTotalFeedKg] = useState<number>(100);
  const [sellingPricePerKg, setSellingPricePerKg] = useState<number>(20000);
  const [estimatedHarvestKg, setEstimatedHarvestKg] = useState<number>(90);
  const [otherCosts, setOtherCosts] = useState<number>(150000);

  // Calculations
  const totalSeedCost = fishCount * seedCost;
  const totalFeedCost = totalFeedKg * feedCostPerKg;
  const totalCapital = totalSeedCost + totalFeedCost + otherCosts;
  
  const revenue = estimatedHarvestKg * sellingPricePerKg;
  const profit = revenue - totalCapital;
  const roi = totalCapital > 0 ? (profit / totalCapital) * 100 : 0;

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
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Kalkulator Profit Ternak Lele</h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Simulasikan biaya dan estimasi keuntungan budidaya ikan lele Anda.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Input Section */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Parameter Input</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jumlah Bibit (ekor)</label>
                  <input
                    type="number"
                    value={fishCount}
                    onChange={(e) => setFishCount(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga Bibit per Ekor (Rp)</label>
                  <input
                    type="number"
                    value={seedCost}
                    onChange={(e) => setSeedCost(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Total Kebutuhan Pakan (Kg)</label>
                  <input
                    type="number"
                    value={totalFeedKg}
                    onChange={(e) => setTotalFeedKg(Number(e.target.value))}
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Biaya Lain-lain (Obat, Listrik, dll) (Rp)</label>
                  <input
                    type="number"
                    value={otherCosts}
                    onChange={(e) => setOtherCosts(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estimasi Panen (Kg)</label>
                    <input
                      type="number"
                      value={estimatedHarvestKg}
                      onChange={(e) => setEstimatedHarvestKg(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga Jual per Kg (Rp)</label>
                    <input
                      type="number"
                      value={sellingPricePerKg}
                      onChange={(e) => setSellingPricePerKg(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hasil Analisa</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Modal (Capital)</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(totalCapital)}</p>
                  <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Bibit: {formatCurrency(totalSeedCost)}</li>
                    <li>• Pakan: {formatCurrency(totalFeedCost)}</li>
                    <li>• Lainnya: {formatCurrency(otherCosts)}</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimasi Pendapatan (Revenue)</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(revenue)}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Keuntungan Bersih (Profit)</p>
                  <p className={`text-3xl font-bold ${profit >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {formatCurrency(profit)}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Return on Investment (ROI)</p>
                  <div className="flex items-baseline space-x-2">
                    <p className={`text-2xl font-bold ${roi >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {roi.toFixed(2)}%
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">per siklus</span>
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
