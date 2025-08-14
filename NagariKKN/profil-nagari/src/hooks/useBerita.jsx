// src/hooks/useBerita.js
import { useState, useEffect } from 'react';

export const useBerita = () => {
    const [berita, setBerita] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBerita = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost/nagari-api/api/berita/read.php');
            const data = await response.json();

            if (data.records) {
                setBerita(data.records);
                setError(null);
            } else {
                setBerita([]);
            }
        } catch (err) {
            setError('Gagal mengambil data berita');
            console.error('Error fetching berita:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchLatestThree = async () => {
        try {
            const response = await fetch('http://localhost/nagari-api/api/berita/latest_three.php');
            const data = await response.json();
            return data.records || [];
        } catch (err) {
            console.error('Error fetching latest berita:', err);
            return [];
        }
    };

    const getBeritaById = async (id) => {
        try {
            const response = await fetch(`http://localhost/nagari-api/api/berita/read_one.php?id=${id}`);
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error fetching berita by id:', err);
            return null;
        }
    };

    useEffect(() => {
        fetchBerita();
    }, []);

    return {
        berita,
        loading,
        error,
        fetchBerita,
        fetchLatestThree,
        getBeritaById,
        refetch: fetchBerita
    };
};