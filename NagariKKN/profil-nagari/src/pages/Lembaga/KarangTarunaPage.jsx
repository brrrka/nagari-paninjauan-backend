// src/pages/KarangTarunaPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const kegiatanKarangTaruna = [
  "Mengadakan turnamen olahraga antar jorong (voli, sepak bola).",
  "Menyelenggarakan kegiatan peringatan hari besar nasional seperti 17 Agustus.",
  "Aktif dalam kegiatan sosial seperti penggalangan dana dan bakti sosial.",
  "Mengembangkan program kewirausahaan pemuda dan pelatihan keterampilan.",
  "Menjadi pelopor dalam menjaga kebersihan dan kelestarian lingkungan nagari.",
];

const anggotaKarangTaruna = [
    { nama: 'Rizki Pratama (Contoh)', jabatan: 'Ketua', fotoUrl: '/images/pemuda-1.jpg' },
    { nama: 'Anisa Putri (Contoh)', jabatan: 'Wakil Ketua', fotoUrl: '/images/pemudi-1.jpg' },
    { nama: 'Fajar Nugroho (Contoh)', jabatan: 'Sekretaris', fotoUrl: '/images/pemuda-2.jpg' },
    { nama: 'Melati (Contoh)', jabatan: 'Bendahara', fotoUrl: '/images/pemudi-2.jpg' },
    { nama: 'Bayu Saputra (Contoh)', jabatan: 'Koordinator Olahraga', fotoUrl: '/images/pemuda-3.jpg' },
    { nama: 'Citra Kirana (Contoh)', jabatan: 'Koordinator Kesenian', fotoUrl: '/images/pemudi-3.jpg' },
];

function KarangTarunaPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/kt.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-blue-800/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Karang Taruna</h1>
            <p className="text-xl text-gray-200 mt-2">Tunas Mekar Nagari Paninjauan</p>
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
                    Karang Taruna Tunas Mekar adalah organisasi sosial kepemudaan di Nagari Paninjauan yang menjadi wadah bagi generasi muda untuk mengembangkan diri, menumbuhkan kreativitas, dan berkontribusi secara nyata bagi masyarakat. Organisasi ini berperan sebagai garda terdepan dalam kegiatan sosial, olahraga, kesenian, dan kewirausahaan pemuda.
                  </p>
                  <p className="text-justify mt-4">
                    Dengan semangat kebersamaan dan inovasi, Karang Taruna bertujuan untuk membina generasi muda yang tangguh, terampil, dan berakhlak mulia, serta mampu menjawab tantangan zaman demi kemajuan Nagari Paninjauan.
                  </p>
                </div>

                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-nagari-brown mb-6">Contoh Kegiatan Utama</h2>
                    <ul className="space-y-4">
                        {kegiatanKarangTaruna.map((kegiatan, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-lg text-gray-700">{kegiatan}</span>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </motion.div>

            {/* Kolom Kanan: Daftar Pengurus */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="bg-gray-50 rounded-xl shadow-lg p-6 border sticky top-24">
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Pengurus Karang Taruna</h2>
                    <div className="space-y-6">
                        {anggotaKarangTaruna.map((anggota, index) => (
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

export default KarangTarunaPage;