// src/pages/PotensiAlamPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Data untuk Konten Halaman ---
const contentSections = [
  {
    title: "Pemandangan Spektakuler",
    description: "Daya tarik utama Nagari Paninjauan adalah panorama alamnya. Sebagai \"jendela\" ke Danau Maninjau, nagari ini menawarkan pemandangan spektakuler dari Puncak Paninjauan yang sulit ditemukan di tempat lain. Potensi ini sangat besar untuk dikembangkan sebagai destinasi ekowisata dan agrowisata.",
    imageUrl: '/images/potensialam.jpg',  // pastikan file ada di folder public/images/
  },
  {
    title: "Sumber Daya Air & Tanah Subur",
    description: "Berada di kawasan perbukitan, Nagari Paninjauan berfungsi sebagai daerah tangkapan air yang penting dengan banyak sumber mata air. Tanah jenis Andosol yang terbentuk dari material vulkanik membuatnya sangat subur dan ideal untuk pertanian padi sawah serta berbagai tanaman hortikultura.",
    imageUrl: '/images/potensialam2.jpg',
  },
  {
    title: "Keanekaragaman Hayati",
    description: "Kawasan hutan yang masih terjaga di sekitar nagari merupakan rumah bagi berbagai jenis flora dan fauna. Potensi hasil hutan bukan kayu seperti kayu manis, rotan, dan tanaman obat tradisional menjadi sumber daya yang dapat dikelola secara berkelanjutan oleh masyarakat.",
    imageUrl: '/images/potensialam3.jpg',
  }
];

// Daftar gambar untuk galeri di bagian bawah
const galleryImages = [
  { src: '/images/potensialam4.jpg' },
  { src: '/images/potensialam5.jpg'},
  { src: '/images/potensialam6.jpg' },
  { src: '/images/potensialam7.jpg'},
  { src: '/images/potensialam8.jpg'},
  { src: '/images/potensialam9.jpg' },
];

function PotensiAlamPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('/images/potensialam.jpg')` }}
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
            Potensi Alam Paninjauan
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
              <h2 className="text-3xl font-bold text-nagari-brown text-center mb-10">Galeri Potensi Alam</h2>
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
                    transition={{ type: 'spring', stiffness: 300 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img 
                      src={image.src} 
                      alt={`Galeri Potensi Alam ${index + 1}`} 
                      className="w-full h-64 object-cover" 
                    />
                  </motion.div>
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

export default PotensiAlamPage;