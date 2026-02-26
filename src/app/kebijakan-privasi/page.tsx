import { Metadata } from 'next';
import Container from '@/src/components/Container';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi dan perlindungan data pengguna di Dusunbaru.com.',
};

export default function KebijakanPrivasiPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 sm:p-12 transition-colors duration-200">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">Kebijakan Privasi</h1>
        
        <div className="prose prose-emerald prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
          
          <p>
            Dusunbaru.com (&quot;kami&quot;, &quot;kita&quot;, atau &quot;milik kami&quot;) mengoperasikan situs web https://dusunbaru.com (selanjutnya disebut &quot;Layanan&quot;). Halaman ini memberi tahu Anda tentang kebijakan kami mengenai pengumpulan, penggunaan, dan pengungkapan data pribadi saat Anda menggunakan Layanan kami dan pilihan yang telah Anda kaitkan dengan data tersebut.
          </p>

          <h2>1. Pengumpulan dan Penggunaan Informasi</h2>
          <p>
            Kami mengumpulkan beberapa jenis informasi yang berbeda untuk berbagai tujuan guna menyediakan dan meningkatkan Layanan kami kepada Anda.
          </p>
          
          <h3>Data Penggunaan</h3>
          <p>
            Kami juga dapat mengumpulkan informasi tentang bagaimana Layanan diakses dan digunakan (&quot;Data Penggunaan&quot;). Data Penggunaan ini dapat mencakup informasi seperti alamat Protokol Internet komputer Anda (mis. Alamat IP), jenis browser, versi browser, halaman Layanan kami yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan di halaman tersebut, pengidentifikasi perangkat unik dan data diagnostik lainnya.
          </p>

          <h2>2. Penggunaan Data</h2>
          <p>Dusunbaru.com menggunakan data yang dikumpulkan untuk berbagai tujuan:</p>
          <ul>
            <li>Untuk menyediakan dan memelihara Layanan</li>
            <li>Untuk memberi tahu Anda tentang perubahan pada Layanan kami</li>
            <li>Untuk memungkinkan Anda berpartisipasi dalam fitur interaktif Layanan kami saat Anda memilih untuk melakukannya</li>
            <li>Untuk memberikan layanan dan dukungan pelanggan</li>
            <li>Untuk memberikan analisis atau informasi berharga sehingga kami dapat meningkatkan Layanan</li>
            <li>Untuk memantau penggunaan Layanan</li>
            <li>Untuk mendeteksi, mencegah dan mengatasi masalah teknis</li>
          </ul>

          <h2>3. Kalkulator Bisnis</h2>
          <p>
            Data angka yang Anda masukkan ke dalam fitur Kalkulator (seperti Kalkulator Lele atau Ayam Petelur) diproses secara lokal di browser Anda (Client-side). Kami tidak menyimpan, mengumpulkan, atau mengirimkan data finansial simulasi Anda ke server kami.
          </p>

          <h2>4. Tautan ke Situs Lain</h2>
          <p>
            Layanan kami mungkin berisi tautan ke situs lain yang tidak dioperasikan oleh kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi dari setiap situs yang Anda kunjungi.
          </p>

          <h2>5. Perubahan pada Kebijakan Privasi Ini</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini.
          </p>

          <h2>6. Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui halaman Kontak.
          </p>
        </div>
      </div>
    </Container>
  );
}
