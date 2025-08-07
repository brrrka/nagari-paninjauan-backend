// src/pages/StrukturPemerintahanPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Data perangkat nagari
const perangkatNagari = [
  { no: 1, nama: 'RUSDI, S.Pd, MM.Pd, Kons', jabatan: 'Walinagari' },
  { no: 2, nama: 'DEDI. ANDRI, S.Sos', jabatan: 'Sekretaris Nagari' },
  { no: 3, nama: 'RAMAH YANIS', jabatan: 'Kasi Pemerintahan' },
  { no: 4, nama: 'NOFITA SARI', jabatan: 'Kasi Pelayanan' },
  { no: 5, nama: 'YELI MULIARNI, SE.Sy', jabatan: 'Kasi Kesejahteraan' },
  { no: 6, nama: 'ROBI SANDRA, S.Pd', jabatan: 'Kaur Keuangan' },
  { no: 7, nama: 'SUCI ULANDARI, SE', jabatan: 'Kaur Tata Usaha & Umum' },
  { no: 8, nama: 'SEPTIVA MISLIANI, S.Pd', jabatan: 'Kaur Perencanaan' },
  { no: 9, nama: 'SINTA KURNIA SARI', jabatan: 'Staff' },
  { no: 10, nama: 'JEPRIZAL', jabatan: 'Wali Jorong Paninjauan' },
  { no: 11, nama: 'AFDAL MUKLIS, A.Md', jabatan: 'Wali Jorong Cicawan' },
  { no: 12, nama: 'RIDO RAHMAT.D', jabatan: 'Wali Jorong Data Sp. Dingin' },
  { no: 13, nama: 'HERLINDA', jabatan: 'Wali Jorong Pauah' },
];

function StrukturPemerintahanPage() {
  const getPerangkat = (jabatan) => perangkatNagari.find(p => p.jabatan === jabatan) || {};

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-nagari-brown py-24 text-white text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/pemerintahan.jpg')" }}
          ></div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
          >
              <h1 className="text-4xl md:text-5xl font-bold font-serif">Struktur Pemerintahan</h1>
              <p className="text-xl text-gray-300 mt-2 font-semibold">Nagari Paninjauan Agam</p>
          </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        {/* Style card (shadow, border, dll) dihapus dari <motion.article> */}
        <motion.article
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="prose lg:prose-xl max-w-none text-justify mb-12">
            <p>
               Sesuai dengan Peraturan Bupati Agam Nomor 15 Tahun 2016 Tentang Susunan Organisasi dan Tata Kerja Pemerintah Nagari, dimana Struktur Organisasi Pemerintah Nagari terdiri dari Walinagari dan Perangkat Nagari. Perangkat Nagari sebagaimana dimaksud terdiri dari Sekretariat Nagari, Pelaksana Kewilayahan, dan Pelaksana Teknis. Sekretariat Nagari terdiri dari Sekretaris Nagari, Kepala Urusan Tata Usaha dan Umum, Kepala Urusan Keuangan dan Kepala Urusan Perencanaan. Pelaksana Kewilayahan adalah Wali Jorong yang ada di Nagari Paninjauan, sedangkan Pelaksana Teknis terdiri dari Kepala Seksi Pemerintahan, Kepala Seksi Kesejahteraan dan Kepala Seksi Pelayanan.
            </p>
          </div>

          {/* Struktur Organisasi */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-nagari-brown mb-8 text-center">STRUKTUR ORGANISASI</h2>
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <img 
                  src="/images/srtp.png" 
                  alt="Struktur Organisasi Pemerintahan Nagari Paninjauan" 
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Tabel Perangkat Nagari */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-nagari-brown mb-6 text-center">Daftar Lengkap Perangkat Nagari</h2>
            <div className="max-w-3xl mx-auto overflow-x-auto relative shadow-md sm:rounded-lg border">
              <table className="w-full text-sm text-center text-gray-700">
                <thead className="text-xs text-white uppercase bg-nagari-brown">
                  <tr>
                    <th scope="col" className="py-3 px-4">No</th>
                    <th scope="col" className="py-3 px-4 text-left">Nama</th>
                    <th scope="col" className="py-3 px-4 text-left">Jabatan</th>
                  </tr>
                </thead>
                <tbody>
                  {perangkatNagari.map((perangkat) => (
                    <tr key={perangkat.no} className="bg-white border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{perangkat.no}.</td>
                      <td className="py-3 px-4 text-left font-semibold text-gray-900">{perangkat.nama}</td>
                      <td className="py-3 px-4 text-left">{perangkat.jabatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}

export default StrukturPemerintahanPage;