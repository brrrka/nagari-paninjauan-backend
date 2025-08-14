// src/pages/BeritaDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { beritaData } from './beritaData.jsx';

function BeritaDetailPage() {
  // Mengambil ID berita dari URL, contoh: /berita/1
  const { beritaId } = useParams();
  // Mencari data berita yang cocok berdasarkan ID
  const berita = beritaData.find(b => b.id === parseInt(beritaId));

  // Jika berita dengan ID tersebut tidak ditemukan, tampilkan pesan error
  if (!berita) {
    return (
      <div className="text-center py-20 container mx-auto">
        <h1 className="text-3xl font-bold text-nagari-brown">Berita Tidak Ditemukan</h1>
        <Link to="/info/pengumuman" className="text-nagari-green hover:underline mt-6 inline-block">
          &larr; Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <article>
          {/* Judul dan Informasi Berita */}
          <header className="mb-8 text-center border-b pb-6">
            <p className="text-sm font-semibold text-white bg-nagari-green px-3 py-1 rounded-full inline-block">{berita.category}</p>
            <h1 className="text-3xl font-bold text-nagari-brown mt-4">{berita.title}</h1>
            <p className="text-gray-500 text-md mt-4">{berita.date}</p>
          </header>
          
          {/* Gambar Headline */}
          <figure className="my-8">
            <img 
              src={berita.imageUrl} 
              alt={berita.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
            />
          </figure>

          {/* Konten Berita */}
          <div className="prose lg:prose-xl max-w-none text-justify">
            {berita.content}
          </div>

          <div className="text-center mt-12">
             <Link to="/info/pengumuman" className="bg-nagari-brown text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                &larr; Kembali ke Semua Berita
            </Link>
          </div>

        </article>
      </div>
    </main>
  );
}

export default BeritaDetailPage;