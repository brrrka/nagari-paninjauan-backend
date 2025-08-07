// src/pages/ProfilWaliNagariPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const walinagariData = {
  nama: 'RUSDI, S.Pd, MM.Pd, Kons',
  jabatan: 'Walinagari Paninjauan',
  periode: '2024 - Sekarang',
  fotoUrl: '/images/caleg.png',
  quote: 'Mengabdi dengan tulus, membangun nagari dengan sepenuh hati.',
  dataPribadi: {
    'Tempat / TGL Lahir': 'Paninjauan, 15 Mei 1978',
    'Alamat': 'Jorong Paninjauan, Nagari Paninjauan, Kec. Tanjung Raya',
    'Jenis Kelamin': 'Laki-Laki',
    'Status': 'Menikah',
  },
  pendidikan: [
    { jenjang: 'SD', nama: 'SDN 05 Paninjauan' },
    { jenjang: 'SMP', nama: 'SMPN 1 Tanjung Raya' },
    { jenjang: 'SMA', nama: 'SMAN 1 Maninjau' },
    { jenjang: 'S1', nama: 'IKIP Padang (Sekarang UNP)' },
    { jenjang: 'S2', nama: 'Universitas Negeri Padang' },
  ],
  pengalamanKerja: [
    { tahun: '2005 - 2018', jabatan: 'Guru dan Tenaga Pendidik', instansi: 'Dinas Pendidikan Kab. Agam' },
    { tahun: '2018 - 2024', jabatan: 'Anggota Bamus Nagari Paninjauan', instansi: 'Pemerintahan Nagari Paninjauan' },
    { tahun: '2024 - Sekarang', jabatan: 'Walinagari Paninjauan', instansi: 'Pemerintahan Nagari Paninjauan' },
  ]
};

function ProfilWaliNagariPage() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-nagari-brown py-24 text-white text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/danau.jpg')" }} // Ganti dengan gambar latar yang relevan
        ></div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <img 
              src={walinagariData.fotoUrl} 
              alt={`Foto ${walinagariData.nama}`}
              className="w-48 h-48 rounded-full mx-auto object-cover border-8 border-white shadow-2xl mb-4"
            />
            <h1 className="text-4xl font-bold">{walinagariData.nama}</h1>
            <p className="text-xl text-gray-300">{walinagariData.jabatan}</p>
            <p className="text-lg font-semibold text-nagari-gold">{walinagariData.periode}</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl py-16 -mt-16 relative z-10">
        <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
        >
            {/* Quote Section */}
            <blockquote className="bg-white p-8 rounded-xl shadow-xl text-center text-xl italic text-gray-700 mb-12">
              "{walinagariData.quote}"
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data Pribadi & Pendidikan */}
                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-nagari-green border-b pb-2 mb-6">Data Pribadi</h3>
                        <div className="space-y-4">
                            {Object.entries(walinagariData.dataPribadi).map(([label, value]) => (
                            <div key={label} className="flex justify-between text-md">
                                <dt className="font-semibold text-gray-500">{label}</dt>
                                <dd className="text-gray-800 text-right">{value}</dd>
                            </div>
                            ))}
                        </div>
                    </section>
                    <section className="bg-white p-8 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-nagari-green border-b pb-2 mb-6">Riwayat Pendidikan</h3>
                        <div className="space-y-4">
                            {walinagariData.pendidikan.map((edu, index) => (
                            <div key={index} className="flex justify-between text-md">
                                <dt className="font-semibold text-gray-500">{edu.jenjang}</dt>
                                <dd className="text-gray-800 text-right">{edu.nama}</dd>
                            </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Pengalaman Kerja (Timeline) */}
                <section className="bg-white p-8 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-bold text-nagari-green border-b pb-2 mb-6">Pengalaman Kerja</h3>
                    <div className="relative border-l-2 border-gray-200 ml-3">
                        {walinagariData.pengalamanKerja.map((job, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-10 ml-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-nagari-gold rounded-full -left-3 ring-8 ring-white">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{job.jabatan}</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.tahun}</time>
                            <p className="text-base font-normal text-gray-600">{job.instansi}</p>
                        </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
      </div>
    </main>
  );
}

export default ProfilWaliNagariPage;