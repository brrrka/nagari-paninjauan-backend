// src/pages/VisiMisiPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

function VisiMisiPage() {
  const visiBreakdown = [
    {
      term: 'Bermartabat',
      explanation: 'Menjunjung tinggi nilai luhur, norma adat, dan agama sehingga menciptakan masyarakat yang memiliki harga diri, dihormati, dan mampu menjaga kehormatan nagari.'
    },
    {
      term: 'Sejahtera',
      explanation: 'Terpenuhinya kebutuhan material, spiritual, dan sosial warga masyarakat secara adil dan merata, sehingga dapat hidup layak dan mampu mengembangkan diri.'
    },
    {
      term: 'Mandiri',
      explanation: 'Memiliki kemampuan dan kemandirian dalam mengelola potensi sumber daya yang ada di nagari untuk sebesar-besarnya kemakmuran masyarakat tanpa bergantung pada pihak luar.'
    },
    {
      term: 'Masyarakat Madani',
      explanation: 'Suatu tatanan masyarakat yang beradab, demokratis, menjunjung tinggi hukum, dan partisipatif dalam setiap proses pembangunan yang berlandaskan Adat Basandi Syara\', Syara\' Basandi Kitabullah.'
    }
  ];

  const misiItems = [
    "Menciptakan Tata Kelola Pemerintahan yang Bersih Dari KKN, Profesional Dan Transparan.",
    "Memanfaatkan Teknologi Informasi dan Jaringan Dalam Pelaksanaan Administrasi Kepemerintahan Dan Perluasan Informasi Untuk Percepatan Pelayanan.",
    "Meningkatkan kualitas Kehidupan Beragama, Beradat Dan Berbudaya Serta Berbangsa dan Bernegara.",
    "Meningkatkan Kualitas Sumber Daya Manusia, Sumber Daya Alam Dan Pengelolaan Aset Nagari Yang Profesional.",
    "Menumbuh Kembangkan Potensi Ekonomi Masyarakat.",
    "Membangun Usaha-Usaha Ekonomi Kreatif Dan Home Industri.",
    "Melaksanakan Pembangunan Dan Pemeliharaan Infrastruktur Dan Sarana Umum Untuk Menunjang Aspek Kebutuhan Hidup Masyarakat.",
    "Memaksimalkan Partisipasi Hubungan Lintas Dengan Instansi Terkait, Lembaga Pemerintahan, Dunia Usaha Dan Masyarakat Rantau Untuk Pembangunan Dan Pelayanan Sosial Kemasyarakatan.",
    "Meningkatkan Pelayanan Kesehatan Masyarakat Serta Penataan Lingkungan yang Bersih Dan Sehat."
  ];

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-nagari-brown py-24 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('/images/potensialam.jpg')` }}
        ></div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <h1 className="text-5xl md:text-6xl font-bold font-serif">Visi & Misi</h1>
            <p className="text-xl text-gray-300 mt-2">Pemerintahan Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl py-16 -mt-16 relative z-10">
        <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
        >
            {/* Visi Section */}
            <section className="mb-16 bg-white p-8 rounded-2xl shadow-xl border">
                <h2 className="text-3xl font-bold text-nagari-green text-center mb-4">Visi Nagari</h2>
                <blockquote className="text-center text-xl md:text-2xl font-semibold text-gray-800 my-6">
                  "Terwujudnya Nagari Paninjauan Yang Bermartabat Sejahtera Dan Mandiri Menuju Masyarakat Madani"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {visiBreakdown.map((item, index) => (
                        <motion.div 
                            key={item.term}
                            className="bg-gray-50 p-6 rounded-lg border-l-4 border-nagari-gold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="font-bold text-lg text-nagari-brown">{item.term}</h3>
                            <p className="text-gray-600 mt-1">{item.explanation}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Misi Section */}
            <section className="bg-white p-8 rounded-2xl shadow-xl border">
                <h2 className="text-3xl font-bold text-nagari-green text-center mb-8">Misi Nagari</h2>
                <ol className="list-none space-y-6">
                    {misiItems.map((misi, index) => (
                    <motion.li 
                        key={index} 
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="flex-shrink-0 bg-nagari-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                        </span>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        {misi}
                        </p>
                    </motion.li>
                    ))}
                </ol>
            </section>
        </motion.div>
      </div>
    </main>
  );
}

export default VisiMisiPage;