import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

// Import halaman Beranda
import HomePage from './pages/Beranda/homepage';

// Import halaman Profil Nagari
import SejarahPage from './pages/Profil Nagari/SejarahNagari';
import VisiMisiPage from './pages/Profil Nagari/VisiMisi';
import StrukturPemerintahanPage from './pages/Profil Nagari/StrukturPemerintahanPage';
import ProfilWaliNagariPage from './pages/Profil Nagari/ProfilWaliNagariPage';
import GeografisPage from './pages/Profil Nagari/GeografisPage';
import DemografiPage from './pages/Profil Nagari/DemografiPage';
import TokohMasyarakatPage from './pages/Profil Nagari/TokohMasyarakatPage';

// Import halaman Data Statistik
import DataWilayahPage from './pages/Data Statistik/DataWilayahPage';
import DataKelompokUmurPage from './pages/Data Statistik/DataKelompokUmurPage';
import DataJenisKelaminPage from './pages/Data Statistik/DataJenisKelaminPage';

// Import halaman Potensi
import PotensiAlamPage from './pages/Potensi/PotensiAlamPage';
import PotensiPenghasilanPage from './pages/Potensi/PotensiPenghasilanPage';
import PotensiPariwisataPage from './pages/Potensi/PotensiPariwisataPage';

// Import halaman Lembaga
import BamusPage from './pages/Lembaga/BamusPage';
import PkkPage from './pages/Lembaga/PkkPage';
import KpmPage from './pages/Lembaga/KpmPage';
import GotongRoyongPage from './pages/Lembaga/GotongRoyongPage';
import KarangTarunaPage from './pages/Lembaga/KarangTarunaPage';
import PosyanduPage from './pages/Lembaga/PosyanduPage';
import LembagaLainnyaPage from './pages/Lembaga/LembagaLainnyaPage';

// Import halaman Informasi Publik
import PengumumanInformasiPage from './pages/Informasi Publik/PengumumanInformasiPage';
import BeritaDetailPage from './pages/Informasi Publik/BeritaDetailPage';
import GaleriKKNPage from './pages/Informasi Publik/GaleriKKNPage';

// Import halaman Kontak
import ContactPage from './pages/Kontak/ContactPage';

// Import Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminCreate from './pages/Admin/AdminCreate';
import AdminEdit from './pages/Admin/AdminEdit';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
          <Routes>
            {/* Admin Routes - Tanpa Header/Footer */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/create" element={
              <ProtectedRoute>
                <AdminCreate />
              </ProtectedRoute>
            } />
            <Route path="/admin/edit/:id" element={
              <ProtectedRoute>
                <AdminEdit />
              </ProtectedRoute>
            } />

            {/* Public Routes - Dengan Header/Footer */}
            <Route path="/*" element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    {/* Rute Utama */}
                    <Route path="/" element={<HomePage />} />

                    {/* Rute Profil Nagari */}
                    <Route path="/sejarah" element={<SejarahPage />} />
                    <Route path="/visi-misi" element={<VisiMisiPage />} />
                    <Route path="/struktur-perangkat" element={<StrukturPemerintahanPage />} />
                    <Route path="/profil-wali-nagari" element={<ProfilWaliNagariPage />} />
                    <Route path="/geografis" element={<GeografisPage />} />
                    <Route path="/demografi" element={<DemografiPage />} />
                    <Route path="/tokoh-masyarakat" element={<TokohMasyarakatPage />} />

                    {/* Rute Data Statistik */}
                    <Route path="/statistik/wilayah" element={<DataWilayahPage />} />
                    <Route path="/statistik/kelompok-umur" element={<DataKelompokUmurPage />} />
                    <Route path="/statistik/jenis-kelamin" element={<DataJenisKelaminPage />} />

                    {/* Rute Potensi */}
                    <Route path="/potensi/alam" element={<PotensiAlamPage />} />
                    <Route path="/potensi/penghasilan" element={<PotensiPenghasilanPage />} />
                    <Route path="/potensi/pariwisata" element={<PotensiPariwisataPage />} />

                    {/* Rute Lembaga */}
                    <Route path="/lembaga/bamus" element={<BamusPage />} />
                    <Route path="/lembaga/pkk" element={<PkkPage />} />
                    <Route path="/lembaga/kpm" element={<KpmPage />} />
                    <Route path="/lembaga/gotong-royongan" element={<GotongRoyongPage />} />
                    <Route path="/lembaga/karang-taruna" element={<KarangTarunaPage />} />
                    <Route path="/lembaga/posyandu" element={<PosyanduPage />} />
                    <Route path="/lembaga/lainnya" element={<LembagaLainnyaPage />} />

                    {/* Rute Informasi Publik */}
                    <Route path="/info/pengumuman" element={<PengumumanInformasiPage />} />
                    <Route path="/galeri-kkn" element={<GaleriKKNPage />} />
                    <Route path="/berita/:beritaId" element={<BeritaDetailPage />} />

                    {/* Rute Kontak */}
                    <Route path="/kontak" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;