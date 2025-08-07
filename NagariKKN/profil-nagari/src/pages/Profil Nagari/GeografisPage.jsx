// src/pages/GeografisPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const jorongData = [
  { no: 1, nama: 'Jorong Paninjauan', luas: 495 },
  { no: 2, nama: 'Jorong Pauah', luas: 361 },
  { no: 3, nama: 'Jorong Cicawan', luas: 316 },
  { no: 4, nama: 'Jorong Data Simpang Dingin', luas: 213 },
];
const totalLuas = jorongData.reduce((sum, jorong) => sum + jorong.luas, 0);

function GeografisPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/peta.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-green-900/60 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Geografis Nagari</h1>
          <p className="text-xl text-gray-200 mt-2">Wilayah dan Topografi Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl py-16 -mt-20 relative z-10">
        <motion.article 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border"
        >
          
          {/* --- BAGIAN PETA BARU DITAMBAHKAN DI SINI --- */}
          <section className="mb-16 text-center">
            <h2 className="text-2xl font-bold text-nagari-brown mb-8">Peta Wilayah Nagari</h2>
            <img 
              src="/images/peta.jpg" 
              alt="Peta Nagari Paninjauan"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border"
            />
          </section>
          {/* --- AKHIR DARI BAGIAN PETA --- */}

          {/* Kondisi Geografis & Batas Wilayah */}
          {/* KONDISI GEOGRAFIS & BATAS WILAYAH (DIPERBARUI DENGAN IKON) */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-nagari-brown text-center mb-8">Kondisi Geografis</h2>
            <p className="prose lg:prose-lg max-w-none text-justify text-gray-700 leading-relaxed mb-10">
              Secara geografis, Nagari Paninjauan terletak pada posisi yang memiliki ketinggian rata-rata sekitar 750 meter dari permukaan laut. Wilayahnya yang berada tidak jauh dari Danau Maninjau membuatnya memiliki udara yang nyaman dan pemandangan alam yang indah.
            </p>
            <h3 className="text-2xl font-semibold text-nagari-brown mb-6 text-center">Batas-Batas Wilayah</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              {/* Batas Utara */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-nagari-green flex items-center space-x-4">
                <svg className="w-8 h-8 text-nagari-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                <div><strong className="block">Sebelah Utara</strong> berbatas dengan Nagari Palembayan (Hutan)</div>
              </div>
              {/* Batas Selatan */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-nagari-green flex items-center space-x-4">
                <svg className="w-8 h-8 text-nagari-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                <div><strong className="block">Sebelah Selatan</strong> berbatas dengan Nagari Koto Kaciak (Jalan)</div>
              </div>
              {/* Batas Barat */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-nagari-green flex items-center space-x-4">
                <svg className="w-8 h-8 text-nagari-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <div><strong className="block">Sebelah Barat</strong> berbatas dengan Nagari Koto Kaciak (Tali Banda)</div>
              </div>
              {/* Batas Timur */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-nagari-green flex items-center space-x-4">
                <svg className="w-8 h-8 text-nagari-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <div><strong className="block">Sebelah Timur</strong> berbatas dengan Nagari II Koto (Tali Banda)</div>
              </div>
            </div>
          </section>

          {/* Luas Wilayah & Jorong */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-nagari-brown text-center mb-8">Luas Wilayah dan Jorong</h2>
            <p className="prose lg:prose-lg max-w-none text-justify text-gray-700 leading-relaxed mb-8">
              Nagari Paninjauan terdiri dari 4 (Empat) Jorong dengan total luas wilayah sekitar <strong className="text-nagari-brown">{totalLuas.toLocaleString('id-ID')} Ha</strong>. Berikut rinciannya:
            </p>
            <div className="not-prose overflow-x-auto relative shadow-md sm:rounded-lg border">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-white uppercase bg-nagari-brown">
                  <tr>
                    <th scope="col" className="py-3 px-6">No</th>
                    <th scope="col" className="py-3 px-6">Jorong</th>
                    <th scope="col" className="py-3 px-6 text-right">Luas (Ha)</th>
                  </tr>
                </thead>
                <tbody>
                  {jorongData.map((jorong) => (
                    <tr key={jorong.no} className="bg-white border-b hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{jorong.no}</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">{jorong.nama}</td>
                      <td className="py-4 px-6 text-right">{jorong.luas.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="font-bold bg-gray-100">
                  <tr>
                    <td colSpan="2" className="py-3 px-6 text-center">Jumlah</td>
                    <td className="py-3 px-6 text-right">{totalLuas.toLocaleString('id-ID')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          {/* Topografi & Klimatologi */}
          <section>
            <h2 className="text-3xl font-bold text-nagari-brown text-center mb-8">Topografi dan Klimatologi</h2>
            <div className="prose lg:prose-lg max-w-none text-justify">
              <p>
                  Nagari Paninjauan memiliki topografi wilayah yang relatif bergelombang dan berbukit. Iklimnya tergolong unik, dengan suhu udara yang terasa hangat pada siang hari berkisar antara 27°C - 30°C, dan berubah menjadi sejuk pada malam hari dengan suhu sekitar 21°C. Jenis tanah di Nagari Paninjauan merupakan jenis tanah Andosol yang subur dan sangat cocok untuk pertanian.
              </p>
              <p className='mt-4'>
                  Tata air di nagari ini terdiri dari air permukaan dan air tanah yang melimpah, didukung oleh banyaknya sumber mata air dan aliran sungai-sungai kecil yang bermuara ke Danau Maninjau. Kondisi ini mendominasi penggunaan lahan untuk areal pertanian, perumahan, perkebunan, serta pembudidayaan ikan air tawar di Danau Maninjau, khususnya untuk Ikan Nila dan Ikan Mas.
              </p>
            </div>
          </section>
        </motion.article>
      </div>
    </main>
  );
}

export default GeografisPage;