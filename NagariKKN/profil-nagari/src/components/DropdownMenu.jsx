// src/components/DropdownMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link

function DropdownMenu({ subItems, onClick }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-200">
      <ul>
        {subItems.map((subItem) => (
          <li key={subItem.name}>
            <Link
              to={subItem.href}
              onClick={onClick} // Menutup dropdown setelah diklik
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-nagari-green hover:text-white transition-colors duration-200"
            >
              {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;