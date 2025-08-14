import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { beritaService } from '../../services/beritaService';

function BeritaDetailPage() {
  const { beritaId } = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBerita();
  }, [beritaId]);

  const fetchBerita = async () => {
    try {
      setLoading(true);
      const data = await beritaService.getById(beritaId);

      if (data && data.title) {
        setBerita(data);
      } else {
        setError('Berita tidak ditemukan');
      }
    } catch (err) {
      setError('Gagal memuat berita');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !berita) {
    return (
      <div className="text-center py-20 container mx-auto">
        <h1 className="text-3xl font-bold text-nagari-brown">{error || 'Berita Tidak Ditemukan'}</h1>
        <Link to="/info/pengumuman" className="text-nagari-green hover:underline mt-6 inline-block">
          &larr; Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

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

  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <article>
          {/* Judul dan Informasi Berita */}
          <header className="mb-8 text-center border-b pb-6">
            <p className="text-sm font-semibold text-white bg-nagari-green px-3 py-1 rounded-full inline-block">
              {berita.category}
            </p>
            <h1 className="text-3xl font-bold text-nagari-brown mt-4">{berita.title}</h1>
            <p className="text-gray-500 text-md mt-4">{formatDate(berita.date)}</p>
          </header>

          {/* Gambar Headline */}
          {berita.imageUrl && (
            <figure className="my-8">
              <img
                src={berita.imageUrl}
                alt={berita.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </figure>
          )}

          {/* Konten Berita */}
          <div className="prose lg:prose-xl max-w-none text-justify">
            <div dangerouslySetInnerHTML={{ __html: berita.content }} />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/info/pengumuman"
              className="bg-nagari-brown text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              &larr; Kembali ke Semua Berita
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BeritaDetailPage;