// src/pages/TokohMasyarakatPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tokohData = [
    { id: 1, nama: 'A. ST LEMBAK TUAH', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Paninjauan', fotoUrl: '/images/tokoh-1.jpg', deskripsi: 'Sebagai salah satu tokoh yang dihormati di Jorong Paninjauan, beliau aktif dalam musyawarah nagari dan sering memberikan pandangan terkait pelestarian adat serta penyelesaian masalah sosial di tengah masyarakat.', },
    { id: 2, nama: 'A. IMAM BATUAH NAN SATI', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Pauh', fotoUrl: '/images/tokoh-2.jpg', deskripsi: 'Dikenal dengan kearifannya, beliau merupakan panutan di Jorong Pauh. Perannya sangat penting dalam menjaga keharmonisan antar warga serta menjadi penasihat dalam berbagai kegiatan kemasyarakatan dan keagamaan.', },
    { id: 3, nama: 'A. ST JAMARIH', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Cicawan', fotoUrl: '/images/tokoh-3.jpg', deskripsi: 'Beliau adalah figur penggerak di Jorong Cicawan, terutama dalam bidang pemberdayaan pemuda dan kegiatan ekonomi kreatif. Kontribusinya membantu menumbuhkan semangat kemandirian di kalangan generasi muda.', },
    { id: 4, nama: 'S. KALI INDO MARAJO', jabatan: 'Niniak Mamak', alamat: 'Jorong Data Sp. Dingin', fotoUrl: '/images/tokoh-4.jpg', deskripsi: 'Sebagai Niniak Mamak di Jorong Data Simpang Dingin, beliau memegang peranan kunci dalam urusan adat, sako, dan pusako. Beliau bertanggung jawab menjaga dan melestarikan tatanan adat Minangkabau di wilayahnya.', },
    { id: 5, nama: 'T. ST MAKMUR', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Pauh', fotoUrl: '/images/tokoh-5.jpg', deskripsi: 'Berperan aktif dalam pengembangan program sosial di Jorong Pauh, beliau dikenal sebagai figur yang solutif dan dekat dengan warga.', },
    { id: 6, nama: 'N. DT RAJO MUDO', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Cicawan', fotoUrl: '/images/tokoh-6.jpg', deskripsi: 'Fokus pada bidang adat dan budaya, beliau berkontribusi dalam memastikan nilai-nilai luhur Minangkabau tetap diwariskan kepada generasi penerus.', },
    { id: 7, nama: 'M. IMAM INDO MARAJO', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Data Sp. Dingin', fotoUrl: '/images/tokoh-7.jpg', deskripsi: 'Sebagai tokoh masyarakat, beliau sering menjadi penengah dan pemberi solusi dalam berbagai dinamika sosial yang terjadi di lingkungannya.', },
    { id: 8, nama: 'A.DT PERPATIAH NAN SABATANG', jabatan: 'Niniak Mamak', alamat: 'Jorong Paninjauan', fotoUrl: '/images/tokoh-8.jpg', deskripsi: 'Merupakan salah satu pemangku adat penting di Jorong Paninjauan, berperan dalam menjaga keutuhan dan penerapan adat istiadat.', },
    { id: 9, nama: 'IWAN SUTRISNO', jabatan: 'Tokoh Masyarakat', alamat: 'Jorong Pauh', fotoUrl: '/images/tokoh-9.jpg', deskripsi: 'Aktif dalam kegiatan kepemudaan dan olahraga, beliau menjadi inspirasi bagi generasi muda untuk terus berprestasi dan berkontribusi bagi nagari.', },
    { id: 10, nama: 'S. DT BANDARO SATI', jabatan: 'Niniak Mamak', alamat: 'Jorong Cicawan', fotoUrl: '/images/tokoh-10.jpg', deskripsi: 'Dengan pengetahuannya yang luas tentang adat, beliau menjadi rujukan dalam pelaksanaan acara-acara adat dan seremonial di Jorong Cicawan.', },
];

function TokohDetail({ tokoh }) {
    if (!tokoh) return null;

    return (
        <motion.div
            key={tokoh.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-white p-8 rounded-2xl shadow-2xl border"
        >
            <div className="flex flex-col items-center text-center">
                <img src={tokoh.fotoUrl} alt={`Foto ${tokoh.nama}`} className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-nagari-gold mb-4" />
                <h2 className="text-2xl font-bold text-nagari-brown">{tokoh.nama}</h2>
                <p className="text-lg text-nagari-green font-semibold">{tokoh.jabatan}</p>
                <p className="text-md text-gray-500 mt-1">{tokoh.alamat}</p>
                <p className="text-gray-700 text-center mt-6 border-t pt-4">{tokoh.deskripsi}</p>
            </div>
        </motion.div>
    );
}

function TokohMasyarakatPage() {
  const [selectedId, setSelectedId] = useState(tokohData[0].id);
  const selectedTokoh = tokohData.find(t => t.id === selectedId);

  return (
    <main className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          {/* Kolom Kiri: Daftar Nama Tokoh (Bisa di-scroll) */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {tokohData.map((tokoh) => (
                <motion.button
                  key={tokoh.id}
                  onClick={() => setSelectedId(tokoh.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedId === tokoh.id 
                    ? 'bg-nagari-green text-white shadow-lg scale-105' 
                    : 'bg-white hover:bg-gray-50 shadow border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="font-bold">{tokoh.nama}</p>
                  <p className={`text-sm ${selectedId === tokoh.id ? 'text-green-200' : 'text-gray-500'}`}>{tokoh.jabatan}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Judul dan Detail Profil (Sticky) */}
          <div className="md:col-span-2 lg:col-span-3 sticky top-24 self-start">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center md:text-left mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-nagari-brown text-center">Tokoh Masyarakat</h1>
              <p className="text-lg text-gray-600 mt-2 text-center">Figur Panutan di Nagari Paninjauan</p>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <TokohDetail tokoh={selectedTokoh} />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  );
}

export default TokohMasyarakatPage;