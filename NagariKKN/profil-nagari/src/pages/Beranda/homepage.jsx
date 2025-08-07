// src/pages/HomePage.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { beritaData } from '../Informasi Publik/beritaData.jsx'; // <-- Impor data berita

// Data untuk video podcast
const podcastData = [
  { id: 1, title: 'Episode 1: Sejarah Nagari Paninjauan', description: 'Mengetahui bagaimana sejarah dan asal usul dari Nagari Paninjauan ', thumbnail: '/images/episode1.png', videoSrc: 'https://www.youtube.com/embed/Wj3g79vg2FY?si=hnQ0Ev0GpllDUXE1' },
  { id: 2, title: 'Episode 2: Kearifan Lokal Pertanian', description: 'Melihat lebih dekat sistem pertanian dan perikanan.', thumbnail: '/images/podcast2.jpg', videoSrc: 'https://www.youtube.com/embed/Wj3g79vg2FY?si=hnQ0Ev0GpllDUXE1' },
  { id: 3, title: 'Episode 3: Geliat Kesenian Daerah', description: 'Mengenal lebih dalam seni Randai dan musik Tambua.', thumbnail: '/images/podcast3.jpg', videoSrc: '/videos/episode3.mp4' },
  { id: 4, title: 'Episode 4: Bincang Wali Nagari', description: 'Wawancara eksklusif mengenai visi dan misi nagari.', thumbnail: '/images/podcast4.jpg', videoSrc: '/videos/episode4.mp4' }
];

// Komponen Kartu Menu Cepat
const MenuCard = ({ to, title, iconSrc, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        style={{ perspective: 1000 }}
    >
        <Link to={to} className="block p-8 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl  hover:shadow-2xl transition-all duration-300 h-full">
            <motion.div 
                className="text-center"
                whileHover={{ rotateY: 15, rotateX: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <div className="inline-block p-4 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-full mb-4">
                    <img src={iconSrc} alt={title} className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold text-nagari-brown">
                    {title}
                </h3>
            </motion.div>
        </Link>
    </motion.div>
);

function HomePage() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Ambil 3 berita terbaru untuk ditampilkan di beranda
  const beritaTerbaru = beritaData.slice(0, 3);

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen text-white overflow-hidden">
        <motion.div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('images/fotoalam.jpg')", y: backgroundY }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div 
            style={{ y: textY }}
            className="relative z-10 h-full flex flex-col justify-center items-start container mx-auto px-6 max-w-7xl"
        >
          <div className="w-full md:w-2/3 lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white drop-shadow-lg leading-tight whitespace-nowrap"
            >
              Nagari Paninjauan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-lg text-gray-200 max-w-xl drop-shadow-md text-justify"
            >
              Nagari Paninjauan merupakan salah satu nagari yang termasuk dalam Kecamatan Tanjung Raya, Kabupaten Agam, Provinsi Sumatera Barat. Terkenal dengan keindahan alamnya yang memukau dan adat istiadat yang masih terjaga.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Section Menu Cepat */}
      <section className="py-20 bg-white -mt-20 relative z-20 rounded-t-3xl">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <MenuCard to="/struktur-perangkat" title="Struktur Perangkat Nagari" delay={0.2} iconSrc="/images/str.png" />
            <MenuCard to="/statistik/wilayah" title="Data Wilayah Administratif" delay={0.3} iconSrc="/images/adm.png" />
            <MenuCard to="/info/pengumuman" title="Informasi Publik" delay={0.4} iconSrc="/images/inf.png" />
            <MenuCard to="/kontak" title="Kontak" delay={0.5} iconSrc="/images/knt.png" />
          </div>
        </div>
      </section>

      {/* Potensi Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-nagari-brown">Unggulan Nagari</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/potensi/pariwisata" className="relative rounded-xl overflow-hidden shadow-lg group block">
                  <img src="images/danau.jpg" alt="Pariwisata Alam" className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Pariwisata Alam</h3>
                      <p className="mt-1 text-gray-200">Keindahan Danau Maninjau dan udara sejuk.</p>
                  </div>
              </Link>
              <Link to="/potensi/penghasilan" className="relative rounded-xl overflow-hidden shadow-lg group block">
                  <img src="images/pertanian.jpg" alt="Pertanian & Perikanan" className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Pertanian & Perikanan</h3>
                      <p className="mt-1 text-gray-200">Hasil sawah, ikan nila, dan Madu Galo-galo.</p>
                  </div>
              </Link>
              <Link to="/kesenian-daerah" className="relative rounded-xl overflow-hidden shadow-lg group block">
                  <img src="images/tambua.jpg" alt="Kesenian Daerah" className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Kesenian Daerah</h3>
                      <p className="mt-1 text-gray-200">Seni pertunjukan Randai dan musik Tambua.</p>
                  </div>
              </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION BERITA TERKINI (BAGIAN BARU) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-nagari-brown">Berita Terkini</h2>
            <p className="text-gray-600 mt-2 text-lg">Ikuti perkembangan dan kegiatan terbaru di Nagari Paninjauan.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaTerbaru.map((berita, index) => (
              <motion.div 
                key={berita.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              >
                <Link to={`/berita/${berita.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden group h-full">
                  <div className="overflow-hidden h-56">
                    <img src={berita.imageUrl} alt={berita.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex-grow">
                      <span className="text-xs font-semibold text-white bg-nagari-green px-2 py-1 rounded-full">{berita.category}</span>
                      <h3 className="text-xl font-bold text-nagari-brown mt-3 group-hover:text-nagari-green transition-colors duration-300">{berita.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">{berita.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Podcast */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-nagari-brown">Podcast Nagari</h2>
            <p className="text-gray-600 mt-2 text-lg">Saksikan cerita langsung dari Nagari Paninjauan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {podcastData.map((episode) => (
              <div key={episode.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <img src={episode.thumbnail} alt={episode.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => setPlayingVideo(episode.videoSrc)} className="bg-white/30 backdrop-blur-sm rounded-full p-4 transform hover:scale-110 transition-transform duration-200">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-nagari-brown">{episode.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{episode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Pemutar Video */}
      {playingVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPlayingVideo(null)} className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-gray-300">×</button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-2xl">
              {playingVideo.includes('youtube') ? (
                <iframe 
                  src={`${playingVideo}?autoplay=1`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <video src={playingVideo} controls autoPlay className="w-full h-full">
                  Browser Anda tidak mendukung tag video.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;