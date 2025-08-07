// src/pages/PosyanduPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const layananPosyandu = [
  "Penimbangan berat badan dan pengukuran tinggi badan balita secara rutin.",
  "Pemberian imunisasi dasar lengkap untuk bayi dan balita.",
  "Penyuluhan gizi seimbang dan pemberian makanan tambahan (PMT).",
  "Pelayanan kesehatan dasar untuk ibu hamil dan ibu menyusui.",
  "Pemantauan tumbuh kembang anak dan deteksi dini gangguan pertumbuhan.",
];

const kaderPosyandu = [
    { nama: 'Ibu Fatimah (Contoh)', jabatan: 'Ketua Kader', fotoUrl: '/images/kader-1.jpg' },
    { nama: 'Ibu Wati (Contoh)', jabatan: 'Sekretaris', fotoUrl: '/images/kader-2.jpg' },
    { nama: 'Ibu Yanti (Contoh)', jabatan: 'Bendahara', fotoUrl: '/images/kader-3.jpg' },
    { nama: 'Ibu Rina (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/kader-4.jpg' },
    { nama: 'Ibu Sari (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/kader-5.jpg' },
];

function PosyanduPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/posyandu.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Posyandu Nagari</h1>
            <p className="text-xl text-gray-200 mt-2">Menjaga Kesehatan Ibu dan Anak di Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Deskripsi dan Layanan */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
            >
                <div className="prose lg:prose-xl max-w-none">
                  <p className="lead text-justify">
                    Pos Pelayanan Terpadu (Posyandu) adalah salah satu bentuk Upaya Kesehatan Berbasis Masyarakat (UKBM) yang dikelola dan diselenggarakan dari, oleh, untuk, dan bersama masyarakat dalam penyelenggaraan pembangunan kesehatan guna memberdayakan masyarakat dan memberikan kemudahan kepada masyarakat dalam memperoleh pelayanan kesehatan dasar.
                  </p>
                  <p className="text-justify mt-4">
                    Di Nagari Paninjauan, Posyandu menjadi garda terdepan dalam memantau kesehatan ibu hamil, ibu menyusui, bayi, dan balita. Kegiatan rutin yang dilakukan oleh para kader sukarelawan sangat membantu dalam upaya pencegahan stunting dan peningkatan kualitas gizi keluarga.
                  </p>
                </div>

                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-nagari-brown mb-6">Layanan Utama Posyandu</h2>
                    <ul className="space-y-4">
                        {layananPosyandu.map((layanan, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-lg text-gray-700">{layanan}</span>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </motion.div>

            {/* Kolom Kanan: Daftar Kader */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="bg-gray-50 rounded-xl shadow-lg p-6 border sticky top-24">
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Kader Posyandu</h2>
                    <div className="space-y-6">
                        {kaderPosyandu.map((kader, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={kader.fotoUrl} alt={`Foto ${kader.nama}`} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"/>
                                <div>
                                    <p className="font-bold text-gray-800 leading-tight">{kader.nama}</p>
                                    <p className="text-sm text-gray-500 font-semibold leading-tight">{kader.jabatan}</p>
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

export default PosyanduPage;