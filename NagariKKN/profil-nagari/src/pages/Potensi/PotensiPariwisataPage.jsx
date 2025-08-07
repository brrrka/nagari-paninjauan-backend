// src/pages/PotensiPariwisataPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Data untuk Konten Halaman ---
const contentSections = [
  {
    title: "Musik Tambua (Ansambel Tambua Tansa)",
    description: "Musik Tambua bukanlah musik yang dimainkan oleh satu instrumen, melainkan sebuah ansambel (kelompok musik) perkusi yang dikenal dengan nama Tambua Tansa. Kesenian ini merupakan bagian tak terpisahkan dari berbagai upacara adat dan keramaian di Minangkabau, termasuk di Nagari Paninjauan dan wilayah sekitar Danau Maninjau. Ansambel ini menghasilkan irama yang energik, riuh, dan penuh semangat. Tujuannya adalah untuk memeriahkan suasana, menarik perhatian masyarakat, dan menjadi pengiring arak-arakan dalam sebuah prosesi.",
    imageUrl: '/images/tambua1.jpg',
  },
  {
    title: "Tari Randai",
    description: "Randai bukan sekadar tarian, melainkan sebuah seni pertunjukan yang memadukan musik, nyanyian (dendang), drama (dialog), tari, dan pencak silat (silek). Pertunjukan Randai selalu dibawakan dalam formasi lingkaran oleh sekelompok penampil (anak randai). Gerakan utama dalam Randai adalah gerakan kaki yang dinamis sambil menepuk celana galembong (celana sangat longgar dan besar khas Randai) yang menghasilkan suara perkusi yang unik dan ritmis.",
    imageUrl: '/images/randai.jpg',
  },
  {
    title: "Kolam Renang Terpesona",
    description: "Salah satu destinasi rekreasi yang populer di kalangan wisatawan lokal dan keluarga. Kolam renang ini menawarkan pengalaman unik berenang di dataran tinggi dengan air pegunungan yang sejuk dan segar. Keistimewaannya adalah pemandangan terbuka ke arah perbukitan hijau, memberikan sensasi berenang di tengah alam.",
    imageUrl: '/images/kolamair2.jpeg',
  },
  {
    title: "Air Terjun Alahan Anggang",
    description: "Bagi para pencari petualangan dan keindahan alam yang tersembunyi, Air Terjun Alahan Anggang adalah jawabannya. Terletak di area yang masih sangat asri, air terjun ini menawarkan suasana yang tenang dan damai. Perjalanan singkat menuju lokasi akan terbayar dengan pemandangan air terjun bertingkat dan suara gemericik air yang menenangkan jiwa.",
    imageUrl: '/images/airterjun.jpeg',
  }
];

// Daftar gambar untuk galeri di bagian bawah
const galleryImages = [
  { src: '/images/airterjun.jpeg' },
  { src: '/images/pemandangan.jpeg'},
  { src: '/images/kolamair1.jpeg' },
  { src: '/images/kolamair2.jpeg' },
  { src: '/images/kolamair3.jpeg' },
  { src: '/images/kolamair4.jpeg' },
];

function PotensiPariwisataPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <main className="bg-gray-50">
        <div className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('/images/kolamair00.jpeg')`}}
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
            Potensi Pariwisata
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
              <h2 className="text-3xl font-bold text-nagari-brown text-center mb-10">Galeri Wisata Paninjauan</h2>
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
                      alt={`Galeri Wisata ${index + 1}`} 
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

export default PotensiPariwisataPage;