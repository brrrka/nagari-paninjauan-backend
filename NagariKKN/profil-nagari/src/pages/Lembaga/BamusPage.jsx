// src/pages/BamusPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const tugasDanFungsi = [
  "Bersama Walinagari, membahas dan menyepakati Rancangan Peraturan Nagari.",
  "Melaksanakan pengawasan terhadap kinerja Walinagari dalam menjalankan pemerintahan.",
  "Menampung dan menyalurkan aspirasi masyarakat untuk kebijakan nagari.",
  "Memberikan persetujuan terhadap kerjasama yang dilakukan oleh pemerintah nagari.",
  "Melakukan evaluasi laporan keterangan penyelenggaraan pemerintahan nagari.",
];

const anggotaBamus = [
    { nama: 'RINALDI, DT.BANDARO MUDO', jabatan: 'Ketua', fotoUrl: '/images/tokoh-1.jpg' },
    { nama: 'Ahmad Syarif (Contoh)', jabatan: 'Wakil Ketua', fotoUrl: '/images/tokoh-2.jpg' },
    { nama: 'Siti Aminah (Contoh)', jabatan: 'Sekretaris', fotoUrl: '/images/tokoh-3.jpg' },
    { nama: 'Budi Hartono (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-4.jpg' },
    { nama: 'Fitriani (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-5.jpg' },
    { nama: 'Muhammad Yusuf (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-6.jpg' },
];

function BamusPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bamus.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-nagari-brown/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Badan Permusyawaratan Nagari</h1>
            <p className="text-xl text-gray-200 mt-2">(BAMUS) Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Deskripsi dan Fungsi */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
            >
                <div className="prose lg:prose-xl max-w-none">
                    <p className="lead text-justify">
                        Badan Permusyawaratan Nagari (BAMUS) merupakan lembaga legislatif di tingkat nagari yang berfungsi sebagai perwujudan demokrasi dalam penyelenggaraan Pemerintahan Nagari. BAMUS memiliki peran strategis dalam merumuskan kebijakan dan mengawasi jalannya pemerintahan.
                    </p>
                    <p className="text-justify mt-4">
                        Dasar hukum pembentukannya mengacu pada Undang-Undang Nomor 6 Tahun 2014 tentang Desa serta peraturan daerah yang berlaku di Provinsi Sumatera Barat dan Kabupaten Agam.
                    </p>
                </div>

                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-nagari-brown">Tugas dan Fungsi Utama</h2>
                    <ul className="space-y-4">
                        {tugasDanFungsi.map((tugas, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-nagari-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-lg text-gray-700">{tugas}</span>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </motion.div>

            {/* Kolom Kanan: Daftar Anggota */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="bg-gray-50 rounded-xl shadow-lg p-6 border sticky top-24">
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Keanggotaan BAMUS</h2>
                    <div className="space-y-6">
                        {anggotaBamus.map((anggota, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={anggota.fotoUrl} alt={`Foto ${anggota.nama}`} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"/>
                                <div>
                                    <p className="font-bold text-gray-800 leading-tight">{anggota.nama}</p>
                                    <p className="text-sm text-gray-500 font-semibold leading-tight">{anggota.jabatan}</p>
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

export default BamusPage;