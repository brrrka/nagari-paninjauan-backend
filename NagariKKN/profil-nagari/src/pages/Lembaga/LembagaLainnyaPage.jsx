// src/pages/LembagaLainnyaPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA UNTUK HALAMAN (diekstrak dari gambar Anda) ---
const lembagaData = [
  { name: 'Kelompok Tani', description: 'Wadah bagi para petani untuk berbagi pengetahuan dan meningkatkan hasil pertanian.' },
  { name: 'Karang Taruna', description: 'Organisasi kepemudaan yang aktif dalam kegiatan sosial, olahraga, dan kreativitas.' },
  { name: 'Kelompok Tani Harapan', description: 'Kelompok tani spesifik dengan fokus pada komoditas dan inovasi tertentu.' },
  { name: 'Kelompok Dasa Wisma', description: 'Kelompok ibu-ibu berbasis lingkungan RT/RW untuk pemberdayaan keluarga.' },
  { name: 'Kelompok P3A (Petani Pemakai Air)', description: 'Organisasi yang mengelola dan memelihara sistem irigasi untuk persawahan.' },
  { name: 'Kelompok UP2K-PKK', description: 'Unit usaha peningkatan pendapatan keluarga yang bernaung di bawah PKK.' },
  { name: 'Rukun Kematian', description: 'Lembaga sosial yang mengurus dan membantu warga saat ada kemalangan atau duka.' },
  { name: 'Kelompok Sinuman', description: 'Kelompok sosial masyarakat untuk kegiatan adat dan kebersamaan.' },
  { name: 'Kelompok Remaja Islam Masjid', description: 'Organisasi pemuda berbasis masjid untuk kegiatan keagamaan dan sosial.' },
  { name: 'Kelompok UP2KA-KB', description: 'Unit usaha akseptor Keluarga Berencana untuk peningkatan ekonomi keluarga.' },
];

function LembagaLainnyaPage() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ms.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-nagari-brown/70 backdrop-blur-sm"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Lembaga Kemasyarakatan</h1>
            <p className="text-xl text-gray-200 mt-2">Pilar Pembangunan Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
            Berikut adalah berbagai lembaga kemasyarakatan yang aktif berperan dalam pembangunan, sosial, dan keagamaan di Nagari Paninjauan.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lembagaData.map((lembaga, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="flex-shrink-0 mb-4">
                        <h2 className="text-2xl font-bold text-nagari-brown">{lembaga.name}</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600">{lembaga.description}</p>
                    </div>
                    <div className="mt-4 text-right">
                        <span className="font-semibold text-nagari-green">Aktif</span>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </main>
  );
}

export default LembagaLainnyaPage;