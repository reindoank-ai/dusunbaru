import { Metadata } from 'next';
import Container from '@/src/components/Container';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal lebih dekat Dusunbaru.com dan visi kami untuk memajukan ekonomi desa.',
};

export default function TentangKamiPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 sm:p-12 transition-colors duration-200">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">Tentang Kami</h1>
        
        <div className="prose prose-emerald prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Selamat datang di <strong>Dusunbaru.com</strong>, platform digital yang didedikasikan untuk memberdayakan masyarakat desa melalui informasi, panduan, dan simulasi bisnis yang aplikatif.
          </p>
          
          <h2>Visi Kami</h2>
          <p>
            Menjadi sumber inspirasi dan rujukan utama bagi masyarakat pedesaan dalam membangun kemandirian ekonomi melalui sektor perikanan, peternakan, dan pertanian modern.
          </p>

          <h2>Misi Kami</h2>
          <ul>
            <li>Menyediakan artikel panduan praktis yang mudah dipahami oleh pemula.</li>
            <li>Menghadirkan alat bantu simulasi bisnis (kalkulator profit) untuk meminimalisir risiko kerugian.</li>
            <li>Mendorong penerapan teknologi tepat guna dalam praktik budidaya sehari-hari.</li>
            <li>Membangun komunitas peternak dan petani yang saling mendukung.</li>
          </ul>

          <h2>Mengapa Dusunbaru?</h2>
          <p>
            Kami percaya bahwa potensi desa sangatlah besar. Dengan pengetahuan yang tepat dan manajemen yang baik, usaha skala rumahan di desa dapat berkembang menjadi bisnis yang sangat menguntungkan. Dusunbaru hadir untuk menjembatani kesenjangan informasi tersebut dengan menyajikan data yang realistis dan aplikatif.
          </p>
        </div>
      </div>
    </Container>
  );
}
