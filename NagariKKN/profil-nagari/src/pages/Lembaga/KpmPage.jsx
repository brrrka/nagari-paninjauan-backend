// src/pages/KpmPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const tugasDanFungsiKpm = [
  "Mendata potensi dan masalah di tingkat jorong dan nagari.",
  "Menyusun rencana kegiatan dan membantu fasilitasi musyawarah.",
  "Menggerakkan partisipasi masyarakat dalam kegiatan pembangunan.",
  "Melakukan pemantauan dan evaluasi terhadap program pemberdayaan.",
  "Menjadi jembatan informasi antara pemerintah nagari dan masyarakat.",
];

const anggotaKpm = [
    { nama: 'Andi Saputra (Contoh)', jabatan: 'Ketua', fotoUrl: '/images/tokoh-pria-1.jpg' },
    { nama: 'Bunga Lestari (Contoh)', jabatan: 'Sekretaris', fotoUrl: '/images/tokoh-wanita-1.jpg' },
    { nama: 'Candra Wijaya (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-pria-2.jpg' },
    { nama: 'Dian Permata (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-wanita-2.jpg' },
    { nama: 'Eko Prasetyo (Contoh)', jabatan: 'Anggota', fotoUrl: '/images/tokoh-pria-3.jpg' },
];

function KpmPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/kpm.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-nagari-green/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Kader Pemberdayaan Masyarakat</h1>
            <p className="text-xl text-gray-200 mt-2">(KPM) Nagari Paninjauan</p>
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
                    Kader Pemberdayaan Masyarakat (KPM) adalah warga nagari yang dipilih melalui musyawarah untuk bekerja secara sukarela membantu pemerintah nagari dalam memfasilitasi dan menggerakkan program-program pemberdayaan masyarakat. KPM berperan sebagai motor penggerak partisipasi warga dalam setiap tahapan pembangunan, mulai dari perencanaan hingga pelaksanaan.
                  </p>
                  <p className="text-justify mt-4">
                    Keberadaan KPM sangat vital untuk memastikan program pembangunan tepat sasaran dan sesuai dengan kebutuhan riil masyarakat, serta meningkatkan rasa memiliki warga terhadap hasil-hasil pembangunan di Nagari Paninjauan.
                  </p>
                </div>

                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-nagari-brown mb-8">Tugas dan Peran Utama</h2>
                    <ul className="space-y-4">
                        {tugasDanFungsiKpm.map((tugas, index) => (
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
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Anggota KPM</h2>
                    <div className="space-y-6">
                        {anggotaKpm.map((anggota, index) => (
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

export default KpmPage;