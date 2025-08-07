// src/components/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import NavItem from './NavItem';
import logoNagari from '/images/agam.png';

// Definisikan struktur menu dengan path URL yang benar
const menuItems = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Profil Nagari', 
      subItems: [
        { name: 'Sejarah Nagari', href: '/sejarah' },
        { name: 'Profil Wali Nagari', href: '/profil-wali-nagari' },
        { name: 'Visi dan Misi Nagari', href: '/visi-misi' },
        { name: 'Struktur Perangkat Nagari', href: '/struktur-perangkat' },
        { name: 'Geografis Nagari', href: '/geografis' },
        { name: 'Demografi Nagari', href: '/demografi' },
        { name: 'Tokoh Masyarakat', href: '/tokoh-masyarakat' },
      ]
    },
    { 
      name: 'Lembaga',
      subItems: [
        { name: 'BAMUS Nagari', href: '/lembaga/bamus' },
        { name: 'PKK', href: '/lembaga/pkk' },
        { name: 'Kader Pemberdayaan Masyarakat', href: '/lembaga/kpm' },
        { name: 'Gotong Royongan', href: '/lembaga/gotong-royongan' },
        { name: 'Karang Taruna', href: '/lembaga/karang-taruna' },
        { name: 'Posyandu', href: '/lembaga/posyandu' },
        { name: 'Lembaga lainnya', href: '/lembaga/lainnya' },
      ]
    },
    {
      name: 'Data Statistik',
      subItems: [
        { name: 'Data Wilayah Administratif', href: '/statistik/wilayah' },
        { name: 'Data Kelompok Umur', href: '/statistik/kelompok-umur' },
        { name: 'Data Berdasarkan Jenis Kelamin', href: '/statistik/jenis-kelamin' },
      ]
    },
    {
      name: 'Potensi',
      subItems: [
        { name: 'Potensi Alam', href: '/potensi/alam' },
        { name: 'Potensi Pariwisata', href: '/potensi/pariwisata' },
        { name: 'Potensi Penghasilan', href: '/potensi/penghasilan' },
      ]
    },
    {
      name: 'Informasi Publik',
      subItems: [
        { name: 'Pengumuman dan Informasi', href: '/info/pengumuman' },
        { name: 'Agenda', href: '/info/agenda' },
        { name: 'KKN Paninjauan II Unand 2025', href: '/info/galeri' },
      ]
    },
    { name: 'Kontak', href: '/kontak' },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);

  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" ref={headerRef}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Bagian Logo dan Nama Nagari */}
        <a href="/" className="flex items-center space-x-4">
          <img src={logoNagari} alt="Logo Nagari" className="h-16 w-auto" />
          <div>
            <p className="font-bold text-nagari-brown text-xl">Nagari Paninjauan</p>
            <p className="font-normal text-m text-gray-600">Kabupaten Agam</p>
          </div>
        </a>

        {/* Bagian Navigasi */}
        <nav className="flex items-center">
          <div className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <NavItem 
                key={item.name} 
                item={item} 
                isOpen={openMenu === item.name}
                onClick={() => handleMenuClick(item.name)}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;