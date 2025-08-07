// src/pages/GaleriKKNPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from 'react-masonry-css';

// --- DATA UNTUK GALERI (FOTO & VIDEO) ---
// Ganti dengan path file Anda yang sebenarnya
const mediaData = [
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?community,volunteering', caption: 'Kebersamaan dengan masyarakat.' },
  { type: 'video', thumbnail: '/images/kkn/thumbnail1.jpg', videoSrc: '/videos/kkn/video1.mp4', caption: 'Momen Ceria Anak-Anak Nagari' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x1200/?indonesia,children,smiling', caption: 'Senyum generasi penerus.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?teaching,village', caption: 'Program mengajar di sekolah dasar.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?friendship,group,happy', caption: 'Kerja bakti membersihkan lingkungan.' },
  { type: 'video', thumbnail: '/images/kkn/thumbnail2.jpg', videoSrc: '/videos/kkn/video2.mp4', caption: 'Pentas Seni Perpisahan' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x1200/?sunset,farewell', caption: 'Kenangan di penghujung hari.' },
  { type: 'photo', src: 'https://source.unsplash.com/random/800x600/?culture,ceremony,indonesia', caption: 'Mengikuti prosesi adat setempat.' },
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

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <>
      <main className="bg-gray-100">
        <div className="relative h-80 flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?friendship,group,farewell')" }}></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Galeri Kenangan</h1>
            <p className="text-xl text-gray-200 mt-2">KKN Nagari Paninjauan II Unand 2025</p>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 py-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Sebuah catatan visual dari perjalanan kami, merekam setiap tawa, kerja keras, dan momen haru selama mengabdi di Nagari Paninjauan. Setiap gambar dan video adalah kepingan cerita yang tak akan terlupakan.
          </motion.p>
          
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-6"
            columnClassName="pl-6 bg-clip-padding"
          >
            {mediaData.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {item.type === 'photo' ? (
                  <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightboxFor(item.src)}>
                    <img src={item.src} alt={item.caption} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{item.caption}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => setPlayingVideo(item.videoSrc)}>
                    <img src={item.thumbnail} alt={item.caption} className="w-full h-auto" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" /><path d="M6.271 5.055a.5.5 0 01.52.038l3.5 2.5a.5.5 0 010 .814l-3.5 2.5A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z" /></svg>
                      </div>
                    </div>
                     <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-white text-sm font-semibold drop-shadow-md">{item.caption}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </Masonry>
        </div>
      </main>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={photoSlides} index={lightboxIndex} />
      {playingVideo && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50" onClick={() => setPlayingVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPlayingVideo(null)} className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300">×</button>
            <div className="bg-black rounded-lg overflow-hidden"><video src={playingVideo} controls autoPlay className="w-full h-full"></video></div>
          </div>
        </div>
      )}
    </>
  );
}

export default GaleriKKNPage;