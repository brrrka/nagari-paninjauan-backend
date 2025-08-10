// src/pages/GaleriKKNPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- DATA UNTUK GALERI (FOTO & VIDEO) ---
// Ganti dengan path file Anda yang sebenarnya.
const mediaData = [
  { type: 'photo', src: 'https://source.unsplash.com/random/800x1200/?community,volunteering,portrait', caption: 'Kebersamaan awal di nagari.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?children,smiling,indonesia', caption: 'Berbagi tawa dengan generasi penerus.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x1200/?teaching,village,happy', caption: 'Momen mengajar yang tak terlupakan.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?friendship,group,sunset', caption: 'Kerja keras yang terbayar lunas.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?culture,ceremony,people', caption: 'Belajar dan menyatu dengan adat.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x1200/?farewell,sad,friends', caption: 'Hingga jumpa kembali, Nagari Paninjauan.' },
];

function GaleriKKNPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const photoSlides = mediaData.filter(item => item.type === 'photo').map(item => ({ src: item.src }));

  const openLightboxFor = (photoSrc) => {
    const photoIndex = photoSlides.findIndex(slide => slide.src === photoSrc);
    if (photoIndex !== -1) {
      setLightboxIndex(photoIndex);
      setLightboxOpen(true);
    }
  };

  return (
    <>
      <main className="bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?stars,night,sky')" }}></div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10 px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">Sebuah Kisah Pengabdian</h1>
              <p className="text-xl text-gray-300 mt-4">Memori KKN Paninjauan II Unand 2025</p>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-16"
          >
            <p>"Bukan tentang apa yang kami berikan, tetapi tentang apa yang kami pelajari. Bukan tentang perpisahan, tetapi tentang kenangan yang akan selamanya kami simpan di hati."</p>
          </motion.div>
          
          {/* Kolase Galeri Foto & Video */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightboxFor(mediaData[2].src)}>
              <img src={mediaData[2].src} alt={mediaData[2].caption} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightboxFor(mediaData[0].src)}>
              <img src={mediaData[0].src} alt={mediaData[0].caption} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightboxFor(mediaData[1].src)}>
              <img src={mediaData[1].src} alt={mediaData[1].caption} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightboxFor(mediaData[3].src)}>
              <img src={mediaData[3].src} alt={mediaData[3].caption} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }} className="rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightboxFor(mediaData[4].src)}>
              <img src={mediaData[4].src} alt={mediaData[4].caption} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* After Movie Section */}
          <section className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">After Movie KKN</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Sebuah rangkuman perjalanan singkat kami yang penuh makna.</p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden group cursor-pointer" 
              onClick={() => setPlayingVideo('/videos/kkn/aftermovie.mp4')} // Ganti dengan path after movie Anda
            >
              <img src="/images/kkn/aftermovie_thumbnail.jpg" alt="After Movie KKN" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-sm rounded-full p-6 transform group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" /><path d="M6.271 5.055a.5.5 0 01.52.038l3.5 2.5a.5.5 0 010 .814l-3.5 2.5A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z" /></svg>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={photoSlides} index={lightboxIndex} />
      {playingVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setPlayingVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPlayingVideo(null)} className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300">×</button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-2xl"><video src={playingVideo} controls autoPlay className="w-full h-full"></video></div>
          </div>
        </div>
      )}
    </>
  );
}

export default GaleriKKNPage;