import React from 'react';

// Fallback data untuk development/offline mode
export const fallbackBeritaData = [
  {
    id: 1,
    title: 'Jorong Cicawan Resmi Jadi Tuan Rumah Turnamen Bola Voli Wali Nagari Cup V',
    category: 'Olahraga',
    date: '2025-08-01',
    imageUrl: '/images/berita1.jpeg',
    headline: true,
    content: `<p><strong>PANINJAUAN</strong> – Semangat olahraga dan kebersamaan kembali membara di Nagari Paninjauan. Jorong Cicawan secara resmi telah ditunjuk sebagai tuan rumah penyelenggaraan turnamen bola voli bergengsi, Wali Nagari Cup V tahun 2025.</p>`
  },
  // ... berita lainnya
];

// Function untuk mengambil data berita dari API atau fallback
export const getBeritaData = async () => {
  try {
    const response = await fetch('http://localhost/nagari-api/api/berita/read.php');
    const data = await response.json();

    if (data.records && data.records.length > 0) {
      return data.records.map(berita => ({
        ...berita,
        content: parseContentToJSX(berita.content)
      }));
    }
  } catch (error) {
    console.warn('API tidak tersedia, menggunakan data fallback');
  }

  return fallbackBeritaData;
};

// Function untuk mengubah HTML string menjadi JSX
const parseContentToJSX = (htmlContent) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// Function untuk mengambil berita terbaru (3 berita)
export const getLatestBerita = async () => {
  try {
    const response = await fetch('http://localhost/nagari-api/api/berita/latest_three.php');
    const data = await response.json();

    if (data.records) {
      return data.records;
    }
  } catch (error) {
    console.warn('API tidak tersedia, menggunakan data fallback');
    return fallbackBeritaData.slice(0, 3);
  }

  return [];
};

// Export berita data untuk kompatibilitas dengan kode yang ada
export const beritaData = fallbackBeritaData;