import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { beritaService } from '../../services/beritaService';

function PengumumanInformasiPage() {
  const [beritaData, setBeritaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const data = await beritaService.getAll();
      setBeritaData(data);
    } catch (error) {
      console.error('Error fetching berita:', error);
      // Fallback ke data statis jika API gagal
      const { fallbackBeritaData } = await import('./beritaData');
      setBeritaData(fallbackBeritaData);
    } finally {
      setLoading(false);
    }
  };

  // Format date untuk display
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Pisahkan berita headline dan berita lainnya
  const headlineNews = beritaData.find(berita => berita.headline);
  const otherNews = beritaData.filter(berita => !berita.headline);

  return (
    <main className="bg-gray-100">
      {/* Judul Halaman */}
      <div className="bg-white py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-nagari-brown">Pengumuman & Informasi</h1>
          <p className="text-lg text-gray-600 mt-2 text-center">Kabar terkini dari Nagari Paninjauan</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Headline News Section */}
        {headlineNews && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Link to={`/berita/${headlineNews.id}`} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-2xl border">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={headlineNews.imageUrl}
                    alt={headlineNews.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white bg-red-600 px-3 py-1 rounded-full">
                    {headlineNews.category}
                  </span>
                  <h2 className="text-3xl font-bold text-nagari-brown mt-4 group-hover:text-nagari-green transition-colors duration-300">
                    {headlineNews.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">{formatDate(headlineNews.date)}</p>
                  <p className="mt-4 font-semibold text-nagari-green group-hover:underline">Baca Selengkapnya</p>
                </div>
              </div>
            </Link>
          </motion.section>
        )}

        {/* Daftar Berita Lainnya */}
        <section>
          <h2 className="text-3xl font-bold text-nagari-brown mb-8 border-b-2 pb-2">Berita Lainnya</h2>
          {otherNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((berita, index) => (
                <motion.div
                  key={berita.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Link to={`/berita/${berita.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden group h-full">
                    <div className="overflow-hidden h-48">
                      <img
                        src={berita.imageUrl}
                        alt={berita.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-white bg-nagari-green px-2 py-1 rounded-full">
                        {berita.category}
                      </span>
                      <h3 className="text-xl font-bold text-nagari-brown mt-3 group-hover:text-nagari-green transition-colors duration-300 h-20">
                        {berita.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">{formatDate(berita.date)}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada berita lainnya.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default PengumumanInformasiPage;