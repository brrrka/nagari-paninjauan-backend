import React, { useState, useRef } from 'react';
import { uploadService } from '../services/uploadService';

const ImageUpload = ({ onImageUploaded, currentImage }) => {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(currentImage || '');
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        console.log('File selected:', file.name, file.type, file.size);

        // Validasi file di frontend
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            setError('Tipe file tidak diizinkan. Hanya JPG, PNG, GIF, dan WebP yang diperbolehkan.');
            return;
        }

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            setError('Ukuran file terlalu besar. Maksimal 5MB.');
            return;
        }

        setError('');
        setUploading(true);

        try {
            // Preview gambar terlebih dahulu
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreview(e.target.result);
                console.log('Preview set successfully');
            };
            reader.readAsDataURL(file);

            // Upload ke server
            console.log('Starting upload...');
            const response = await uploadService.uploadImage(file);
            console.log('Upload response:', response);

            if (response.success) {
                onImageUploaded(response.imageUrl);
                setPreview(response.imageUrl);
                console.log('Image uploaded successfully:', response.imageUrl);
            } else {
                throw new Error('Upload response indicates failure');
            }
        } catch (err) {
            console.error('Upload error:', err);
            setError(err.message || 'Gagal mengupload gambar');
            setPreview(currentImage || '');
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } finally {
            setUploading(false);
        }
    };

    const handleRemoveImage = () => {
        setPreview('');
        onImageUploaded('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Gambar Berita
            </label>

            {preview ? (
                <div className="mb-4">
                    <div className="relative inline-block">
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-w-xs max-h-48 object-cover rounded-lg shadow-md"
                            onError={(e) => {
                                setError('Gagal memuat gambar');
                                setPreview('');
                            }}
                        />
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                        >
                            ×
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mb-4">
                    <div
                        onClick={handleButtonClick}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-nagari-green transition-colors"
                    >
                        <div className="text-gray-400 mb-2">
                            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600">Klik untuk upload gambar</p>
                        <p className="text-xs text-gray-400 mt-1">JPG, PNG, GIF, WebP (Max 5MB)</p>
                    </div>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />

            <div className="flex space-x-2">
                <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={uploading}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                    {uploading ? 'Uploading...' : preview ? 'Ganti Gambar' : 'Pilih Gambar'}
                </button>

                {preview && (
                    <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                        Hapus Gambar
                    </button>
                )}
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            {uploading && (
                <p className="text-blue-500 text-sm mt-2">Mengupload gambar...</p>
            )}
        </div>
    );
};

export default ImageUpload;