// src/pages/SejarahPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const daftarWalinagari = [
  { no: 1, nama: 'Dasril, S.Sos', masaJabatan: '2006 - 2007 (Pj.)', deskripsi: 'Menjabat sebagai Pejabat (Pj.) Walinagari pada masa awal pembentukan Nagari Paninjauan.' },
  { no: 2, nama: 'Zainal Arifin', masaJabatan: '2007 - 2012', deskripsi: 'Walinagari definitif pertama yang terpilih, meletakkan dasar-dasar pemerintahan nagari.' },
  { no: 3, nama: 'Fauzi Ahmad, A.Md', masaJabatan: '2012 - 2018', deskripsi: 'Melanjutkan pembangunan infrastruktur dan program pemberdayaan masyarakat.' },
  { no: 4, nama: 'Irzal Ependi, S.Pd', masaJabatan: '2018 - 2024', deskripsi: 'Berfokus pada pengembangan potensi wisata dan peningkatan kualitas pelayanan publik.' },
  { no: 5, nama: 'RUSDI, S.Pd, MM.Pd, Kons', masaJabatan: '2024 - Sekarang', deskripsi: 'Walinagari saat ini yang mengemban amanah untuk memajukan nagari di berbagai sektor.' },
];

const jorongList = ['Jorong Paninjauan', 'Jorong Pauah', 'Jorong Cicawan', 'Jorong Data Simpang Dingin'];

function SejarahPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/pemandangan1.jpeg')`}}
        ></div>
        <div className="absolute inset-0 bg-nagari-brown/70 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Sejarah Nagari</h1>
          <p className="text-xl text-gray-200 mt-2">Akar Budaya dan Pemerintahan Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      {/* Konten Utama */}
      <div className="container mx-auto px-6 max-w-5xl py-16">
        <motion.article 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="prose lg:prose-xl max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-justify">
                  Nagari Paninjauan adalah salah satu nagari yang berada di Kecamatan Tanjung Raya, Kabupaten Agam. Nama "Paninjauan" sendiri berasal dari kata "tinjau", yang berarti melihat dari tempat yang tinggi. Hal ini sangat sesuai dengan letak geografis nagari yang berada di dataran tinggi di pinggiran Danau Maninjau, menyuguhkan pemandangan alam yang luar biasa.
                </p>
                <p className="text-justify mt-4">
                  Sejarahnya tidak terlepas dari tatanan masyarakat Minangkabau. Sebelum menjadi nagari definitif, wilayah ini merupakan kumpulan taratak dan dusun yang tergabung dalam satu ke-larasan, berkembang seiring zaman dan kebijakan pemerintah.
                </p>
              </div>
              <div className="not-prose">
                <figure>
                  <img 
                    src='/images/pakwali.jpg'
                    alt="RUSDI, S.Pd, MM.Pd, Kons - Walinagari Paninjauan"
                    className="rounded-xl shadow-xl w-full h-auto object-cover mb-2"
                  />
                  <figcaption className="text-center text-nagari-brown font-semibold text-xs mt-2">
                    RUSDI, S.Pd, MM.Pd, Kons - Walinagari Paninjauan Agam 2024
                  </figcaption>
                </figure>
              </div>
            </div>
            
            <h2 className="text-center text-3xl font-bold text-nagari-brown mt-16 mb-4">Wilayah Administratif</h2>
            <p className="text-left">
              Saat ini, Nagari Paninjauan terdiri dari empat jorong utama : 
            </p>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              {jorongList.map((jorong, index) => (
                <motion.div 
                  key={jorong} 
                  className="bg-green-50/50 border-l-4 border-nagari-green p-5 rounded-lg shadow-sm flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-2xl font-bold text-nagari-brown">{index + 1}</span>
                  <span className="font-semibold text-gray-700">{jorong}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-center text-3xl font-bold text-nagari-brown mt-16 mb-6">Walinagari dari Masa ke Masa</h2>
            <p className="text-justify mb-8">
              Selama masa pemerintahan, Nagari Paninjauan telah dipimpin oleh beberapa Walinagari yang berperan penting dalam pembangunan dan pengembangan nagari. Berikut adalah daftar Walinagari beserta masa jabatannya : 
            </p>
            <div className="not-prose relative border-l-4 border-nagari-brown ml-4">
              <div className="absolute w-3 h-3 bg-nagari-brown rounded-full -left-[7.5px] -top-1"></div>
              {daftarWalinagari.map((wali) => (
                <motion.div 
                  key={wali.no} 
                  className="mb-10 ml-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute w-4 h-4 bg-nagari-green rounded-full -left-[9px] mt-1.5 border-4 border-white"></div>
                  <time className="mb-1 text-sm font-semibold leading-none text-nagari-green">{wali.masaJabatan}</time>
                  <h3 className="text-xl font-bold text-gray-900 my-1">{wali.nama}</h3>
                  <p className="text-base font-normal text-gray-600">{wali.deskripsi}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}

export default SejarahPage;