// src/pages/PotensiPenghasilanPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Data untuk Konten Halaman ---
const contentSections = [
  {
    title: "Pertanian Padi & Hortikultura",
    description: "Sektor pertanian menjadi tulang punggung perekonomian masyarakat. Hamparan sawah yang subur menghasilkan beras berkualitas, sementara tanaman hortikultura seperti sayur-mayur dan cabai menjadi sumber pendapatan harian yang dipasok ke pasar-pasar sekitar Kabupaten Agam.",
    imageUrl: "/images/kebun1.jpeg",
  },
  {
    title: "Perikanan Ikan Nila & Ikan Mas ",
    description: "Memanfaatkan kekayaan Danau Maninjau, budidaya ikan air tawar dengan metode Keramba Jaring Apung (KJA) menjadi potensi penghasilan yang sangat besar. Ikan Nila dan Ikan Mas dari Paninjauan terkenal akan kualitasnya dan menjadi komoditas penting yang didistribusikan ke seluruh Sumatera Barat.",
    imageUrl: "/images/kolam.jpeg",
  },
  {
    title: "Budidaya Madu Galo-Galo",
    description: "Salah satu produk unggulan yang unik dan bernilai ekonomi tinggi adalah Madu Galo-Galo (lebah trigona). Dibudidayakan secara lokal, madu ini memiliki khasiat kesehatan yang istimewa dan rasa yang khas, menjadikannya produk premium yang banyak dicari oleh konsumen untuk kesehatan dan kebugaran.",
    imageUrl: '/images/madu2.jpeg',
  }
];

// Daftar gambar untuk galeri di bagian bawah
const galleryImages = [
  { src: '/images/kolam1.jpeg' },
  { src: '/images/madu.jpeg' },
  { src: '/images/kebun.jpeg' },
  { src: '/images/kolam.jpeg' },
  { src: '/images/madu1.jpeg' },
  { src: '/images/madu3.jpeg' },
];

function PotensiPenghasilanPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('/images/kebun.jpeg')` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1 
            className="relative z-10 text-5xl md:text-7xl font-black text-center drop-shadow-lg font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Potensi Penghasilan
          </motion.h1>
        </div>
        
        <div className="container mx-auto px-6 py-20">
            {contentSections.map((section, index) => (
              <motion.section 
                key={index}
                className="flex flex-col md:flex-row items-center gap-12 mb-20 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={section.imageUrl} alt={section.title} className="rounded-xl shadow-2xl object-cover w-full h-80"/>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-nagari-green mb-4">{section.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">{section.description}</p>
                </div>
              </motion.section>
            ))}

            <section className="mt-24">
              <h2 className="text-3xl font-bold text-nagari-brown text-center mb-10">Galeri Potensi Penghasilan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    // --- PERBAIKAN DI SINI ---
                    // Properti 'transition' harus menjadi objek tersendiri
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300,
                      delay: index * 0.1
                    }}
                  >
                    <img 
                      src={image.src} 
                      alt={`Galeri Potensi Penghasilan ${index + 1}`} 
                      className="w-full h-64 object-cover" 
                    />
                  </motion.div> // <-- Tag penutup dipastikan benar
                ))}
              </div>
            </section>
        </div>
      </main>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />
    </>
  );
}

export default PotensiPenghasilanPage;