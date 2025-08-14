import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { beritaService } from '../../services/beritaService';
import ImageUpload from '../../components/ImageUpload';

function AdminCreate() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    imageUrl: '',
    headline: false,
    content: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const categories = [
    'Pengumuman',
    'Kegiatan',
    'Pembangunan',
    'Sosial',
    'Ekonomi',
    'Budaya',
    'Kesehatan',
    'Pendidikan',
    'Lingkungan',
    'Lainnya'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await beritaService.create(formData);
      alert('Berita berhasil dibuat!');
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Gagal membuat berita');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUploaded = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      imageUrl
    }));
  };

  const handleLogout = async () => {
    if (window.confirm('Apakah Anda yakin ingin logout?')) {
      await logout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard" className="text-nagari-green hover:text-nagari-green/80">
              ← Kembali ke Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-nagari-brown">Buat Berita Baru</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {admin?.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Judul Berita *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nagari-green"
                placeholder="Masukkan judul berita"
              />
            </div>

            {/* Category and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nagari-green"
                >
                  <option value="">Pilih Kategori</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nagari-green"
                />
              </div>
            </div>

            {/* Headline Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="headline"
                name="headline"
                checked={formData.headline}
                onChange={handleChange}
                className="h-4 w-4 text-nagari-green focus:ring-nagari-green border-gray-300 rounded"
              />
              <label htmlFor="headline" className="ml-2 block text-sm text-gray-900">
                Jadikan sebagai berita headline
              </label>
            </div>

            {/* Image Upload */}
            <ImageUpload
              onImageUploaded={handleImageUploaded}
              currentImage={formData.imageUrl}
            />

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Konten Berita *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={12}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nagari-green"
                placeholder="Tulis konten berita di sini..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Anda bisa menggunakan HTML tags untuk formatting (p, br, strong, em, ul, ol, li)
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <Link
                to="/admin/dashboard"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-nagari-green text-white rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Menyimpan...' : 'Simpan Berita'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCreate;