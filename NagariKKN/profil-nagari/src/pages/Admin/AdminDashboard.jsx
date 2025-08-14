import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { beritaService } from '../../services/beritaService';

function AdminDashboard() {
    const [beritaList, setBeritaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { admin, logout } = useAuth();

    useEffect(() => {
        fetchBerita();
    }, []);

    const fetchBerita = async () => {
        try {
            const data = await beritaService.getAll();
            setBeritaList(data);
        } catch (error) {
            console.error('Error fetching berita:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            try {
                await beritaService.delete(id);
                fetchBerita(); // Refresh list
                alert('Berita berhasil dihapus');
            } catch (error) {
                alert('Gagal menghapus berita: ' + error.message);
            }
        }
    };

    const handleLogout = async () => {
        if (window.confirm('Apakah Anda yakin ingin logout?')) {
            await logout();
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-nagari-brown">Admin Dashboard</h1>
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
                {/* Action Buttons */}
                <div className="mb-8">
                    <Link
                        to="/admin/create"
                        className="bg-nagari-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                        Tambah Berita Baru
                    </Link>
                </div>

                {/* Berita List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">Daftar Berita</h2>
                    </div>

                    {beritaList.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Headline</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {beritaList.map((berita) => (
                                        <tr key={berita.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{berita.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {berita.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(berita.date).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {berita.headline ? (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                        Headline
                                                    </span>
                                                ) : (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        Normal
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    to={`/admin/edit/${berita.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(berita.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="px-6 py-8 text-center text-gray-500">
                            <p>Belum ada berita yang dibuat.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;