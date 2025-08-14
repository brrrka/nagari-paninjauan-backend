// src/data/beritaData.jsx
import React from 'react';

// NOTE: Path gambar di bawah ini adalah contoh, silakan disesuaikan.
export const beritaData = [
  {
    id: 1,
    title: 'Jorong Cicawan Resmi Jadi Tuan Rumah Turnamen Bola Voli Wali Nagari Cup V',
    category: 'Olahraga',
    date: '1 Agustus 2025',
    imageUrl: '/images/berita1.jpeg',
    headline: true, // Berita ini akan menjadi headline utama
    content: (
      <>
        <p className="mb-4">
          <strong>PANINJAUAN</strong> – Semangat olahraga dan kebersamaan kembali membara di Nagari Paninjauan. Jorong Cicawan secara resmi telah ditunjuk sebagai tuan rumah penyelenggaraan turnamen bola voli bergengsi, Wali Nagari Cup V tahun 2025. Keputusan strategis ini ditetapkan melalui musyawarah mufakat dalam rapat persiapan yang digelar pada Jumat malam, 1 Agustus 2025.
        </p>
        <p className="mb-4">
          Turnamen yang sangat dinantikan ini dijadwalkan akan memulai pertandingan perdananya pada hari Senin, 11 Agustus 2025. Rapat persiapan yang berlangsung khidmat tersebut dipimpin langsung oleh Ketua Voli Nagari Paninjauan, Daniel, serta dihadiri oleh perangkat nagari, tokoh masyarakat, dan para pemuda.
        </p>
        <p className="mb-4">
          Salah satu aturan fundamental yang disepakati adalah kewajiban bagi setiap tim untuk diperkuat oleh pemain-pemain lokal dari Nagari Paninjauan. Aturan ini bertujuan untuk menggali potensi atlet dari nagari sendiri dan memperkuat sportivitas antar-jorong.
        </p>
        <p className="mb-4">
          Untuk menyukseskan perhelatan ini, komitmen masyarakat ditunjukkan melalui penggalangan dana swadaya yang berhasil mengumpulkan dana sebesar Rp 11,2 juta. Sebagian besar dana, yaitu Rp 11,05 juta, dialokasikan untuk proyek renovasi total lapangan voli, yang kini persiapannya telah mencapai 95%.
        </p>
        <p>
          "Dengan semangat kebersamaan ini, kami optimis. Lapangan sudah hampir siap, aturan sudah jelas, dan panitia sudah terbentuk. Kami siap menyukseskan Wali Nagari Cup V," ujar Daniel. Dengan persiapan matang, masyarakat menantikan dimulainya turnamen dengan harapan acara berjalan sukses dan meriah.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: 'Warga Jorong Cicawan dan Mahasiswa KKN Sukses Gelar Panen Madu Galo-Galo',
    category: 'Ekonomi',
    date: '22 Juli 2025',
    imageUrl: '/images/berita2.jpeg',
    headline: false,
    content: (
      <>
        <p className="mb-4">Warga Jorong Cicawan bersama mahasiswa Kuliah Kerja Nyata (KKN) sukses melaksanakan kegiatan panen madu dari lebah galo-galo pada Selasa, 22 Juli 2025. Kegiatan yang penuh kebersamaan ini dilangsungkan di kebun galo-galo yang dikelola oleh masyarakat setempat.</p>
        <p>Selain memanen madu, kegiatan ini juga diisi dengan gotong royong (goro) bersama untuk membersihkan area kebun. Kolaborasi antara warga dan mahasiswa KKN ini menunjukkan sinergi positif dalam memanfaatkan potensi lokal sekaligus menumbuhkan semangat gotong royong.</p>
      </>
    )
  },
  {
    id: 3,
    title: 'Pererat Keakraban, Warga dan Mahasiswa KKN Gelar Hiking Bersama',
    category: 'Sosial',
    date: '23 Juli 2025',
    imageUrl: '/images/berita3.jpeg',
    headline: false,
    content: (
      <>
        <p className="mb-4">Untuk mempererat tali silaturahmi dan keakraban, warga Nagari Paninjauan beserta perangkat nagari dan para mahasiswa KKN dari Universitas Andalas (Unand) menggelar kegiatan hiking bersama pada Rabu, 23 Juli 2025.</p>
        <p>Kegiatan ini menjadi momen rekreasi sekaligus sarana untuk membangun hubungan yang lebih erat antara masyarakat dengan para mahasiswa yang sedang mengabdi di nagari tersebut. Acara seperti ini dinilai sangat efektif dalam menciptakan suasana kekeluargaan.</p>
      </>
    )
  },
  {
    id: 4,
    title: 'Persiapan Turnamen, Lapangan Voli Jorong Cicawan Direnovasi',
    category: 'Pembangunan',
    date: '12 Juli 2025',
    imageUrl: '/images/berita4.jpeg',
    headline: false,
    content: (
      <p>Dalam rangka persiapan menyambut Turnamen Wali Nagari Cup V, warga Jorong Cicawan melaksanakan renovasi besar-besaran terhadap fasilitas lapangan bola voli mereka. Proses perbaikan dilakukan secara intensif untuk memastikan lapangan memenuhi standar dan siap digunakan untuk pertandingan pada 11 Agustus mendatang.</p>
    )
  },
  {
    id: 5,
    title: 'Lestarikan Budaya, Latihan Kesenian Rutin Digelar Setiap Minggu',
    category: 'Budaya',
    date: '12 Juli 2025',
    imageUrl: '/images/berita5.jpeg',
    headline: false,
    content: (
      <p>Sebagai wujud komitmen dalam melestarikan budaya lokal, masyarakat Jorong Cicawan secara rutin mengadakan kegiatan latihan kesenian setiap minggunya. Latihan ini menjadi wadah penting untuk mempelajari, mengembangkan, dan mewariskan seni tradisional khas nagari kepada generasi penerus.</p>
    )
  },
];