// src/pages/PkkPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN ---
const programPokokPkk = [
  "Penghayatan & Pengamalan Pancasila",
  "Gotong Royong",
  "Pangan",
  "Sandang",
  "Perumahan & Tata Laksana Rumah Tangga",
  "Pendidikan & Keterampilan",
  "Kesehatan",
  "Pengembangan Kehidupan Berkoperasi",
  "Kelestarian Lingkungan Hidup",
  "Perencanaan Sehat",
];

const pengurusPkk = [
    { nama: 'Ny. NURBAITI', jabatan: 'Ketua Tim Penggerak PKK', fotoUrl: '/images/tokoh-wanita-1.jpg' },
    { nama: 'Dewi Sartika (Contoh)', jabatan: 'Wakil Ketua', fotoUrl: '/images/tokoh-wanita-2.jpg' },
    { nama: 'Siti Rahma (Contoh)', jabatan: 'Sekretaris', fotoUrl: '/images/tokoh-wanita-3.jpg' },
    { nama: 'Aisyah (Contoh)', jabatan: 'Bendahara', fotoUrl: '/images/tokoh-wanita-4.jpg' },
];

function PkkPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pkk.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-pink-800/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">PKK Nagari Paninjauan</h1>
            <p className="text-xl text-gray-200 mt-2">Pemberdayaan dan Kesejahteraan Keluarga</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Deskripsi dan Program */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
            >
                <div className="prose lg:prose-xl max-w-none text-justify mb-8">
                  <p className="lead text-base">
                    Gerakan Pemberdayaan dan Kesejahteraan Keluarga (PKK) adalah gerakan nasional dalam pembangunan masyarakat yang tumbuh dari bawah, yang pengelolaannya dari, oleh, dan untuk masyarakat. Tujuannya adalah untuk memberdayakan keluarga dalam mencapai kesejahteraan lahir dan batin.
                  </p>
                </div>

                <section>
                    <h2 className="text-3xl font-bold text-nagari-brown mb-6">10 Program Pokok PKK</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {programPokokPkk.map((program, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex items-center space-x-3 bg-gray-50/70 p-3 rounded-lg border"
                            >
                                <span className="flex-shrink-0 bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </span>
                                <p className="font-semibold text-gray-700">{program}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>

            {/* Kolom Kanan: Daftar Pengurus (Sticky) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="bg-gray-50 rounded-xl shadow-lg p-6 border sticky top-24">
                    <h2 className="text-2xl font-bold text-nagari-brown text-center mb-6">Tim Penggerak PKK</h2>
                    <div className="space-y-6">
                        {pengurusPkk.map((pengurus, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={pengurus.fotoUrl} alt={`Foto ${pengurus.nama}`} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"/>
                                <div>
                                    <p className="font-bold text-gray-800 leading-tight">{pengurus.nama}</p>
                                    <p className="text-sm text-gray-500 font-semibold leading-tight">{pengurus.jabatan}</p>
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

export default PkkPage;