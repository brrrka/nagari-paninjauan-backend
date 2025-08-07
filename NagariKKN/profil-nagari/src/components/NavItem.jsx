// src/components/NavItem.jsx

import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

function NavItem({ item, isOpen, onClick }) {
  return (
    <div className="relative">
      {/* Jika item tidak punya sub-menu, gunakan Link biasa */}
      {!item.subItems ? (
        <Link
          to={item.href}
          // TAMBAHKAN 'flex items-center' DI SINI
          className="text-nagari-green hover:text-nagari-gold font-semibold px-3 py-2 flex items-center"
        >
          <span>{item.name}</span>
        </Link>
      ) : (
        // Jika punya sub-menu, gunakan button untuk memicu dropdown
        <button
          onClick={onClick}
          className="text-nagari-green hover:text-nagari-gold font-semibold px-3 py-2 flex items-center space-x-1"
        >
          <span>{item.name}</span>
          <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* Tampilkan dropdown jika isOpen true dan ada sub-menu */}
      {isOpen && item.subItems && <DropdownMenu subItems={item.subItems} onClick={onClick} />}
    </div>
  );
}

export default NavItem;