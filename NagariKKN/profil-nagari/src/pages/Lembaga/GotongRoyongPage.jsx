// src/pages/GotongRoyongPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const kegiatanGotongRoyong = [
  "Membersihkan lingkungan jorong secara berkala.",
  "Memperbaiki dan merawat fasilitas umum seperti mushalla, jalan, dan jembatan.",
  "Membantu warga dalam acara 'baralek' (pesta pernikahan) atau saat ada kemalangan.",
  "Bekerja sama saat musim tanam atau panen di sawah.",
  "Mendirikan atau merenovasi rumah warga yang kurang mampu.",
];

const koordinatorJorong = [
    { nama: 'Bapak Budi (Contoh)', jabatan: 'Koordinator Jorong Paninjauan', fotoUrl: '/images/tokoh-pria-1.jpg' },
    { nama: 'Bapak Chandra (Contoh)', jabatan: 'Koordinator Jorong Pauah', fotoUrl: '/images/tokoh-pria-2.jpg' },
    { nama: 'Bapak Doni (Contoh)', jabatan: 'Koordinator Jorong Cicawan', fotoUrl: '/images/tokoh-pria-3.jpg' },
    { nama: 'Bapak Eka (Contoh)', jabatan: 'Koordinator Jorong Data Sp. Dingin', fotoUrl: '/images/tokoh-pria-4.jpg' },
];

function GotongRoyongPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gotong.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-nagari-green/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Gotong Royong Nagari</h1>
            <p className="text-xl text-gray-200 mt-2">Mambangun Nagari, Basamo-samo</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Deskripsi dan Kegiatan */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
            >
                <div className="prose lg:prose-xl max-w-none">
                  <p className="lead text-justify">
                    Gotong royong adalah salah satu pilar utama dalam kehidupan bermasyarakat di Nagari Paninjauan. Ini adalah wujud nyata dari kebersamaan dan kepedulian sosial yang diwariskan secara turun-temurun, di mana setiap individu merasa memiliki tanggung jawab bersama untuk kemajuan nagari.
                  </p>
                  <p className="text-justify mt-4">
                    Semangat "berat sama dipikul, ringan sama dijinjing" ini tidak hanya diterapkan dalam kegiatan fisik seperti membangun fasilitas umum, tetapi juga dalam aspek sosial dan keagamaan. Gotong royong memperkuat tali silaturahmi dan menjaga keharmonisan antar warga.
                  </p>
                </div>

                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-nagari-brown mb-6">Contoh Kegiatan Gotong Royong</h2>
                    <ul className="space-y-4">
                        {kegiatanGotongRoyong.map((kegiatan, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-nagari-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-lg text-gray-700">{kegiatan}</span>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </motion.div>

            {/* Kolom Kanan: Koordinator Jorong */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="bg-gray-50 rounded-xl shadow-lg p-6 border sticky top-24">
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Koordinator Jorong</h2>
                    <div className="space-y-6">
                        {koordinatorJorong.map((koordinator, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={koordinator.fotoUrl} alt={`Foto ${koordinator.nama}`} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"/>
                                <div>
                                    <p className="font-bold text-gray-800 leading-tight">{koordinator.nama}</p>
                                    <p className="text-sm text-gray-500 font-semibold leading-tight">{koordinator.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </main>
  );
}

export default GotongRoyongPage;