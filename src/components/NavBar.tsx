// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/images/menu.svg';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-red-700 text-2xl bg-white rounded-lg px-8 py-2 my-2" style={{ fontFamily: 'Supercharge Halftone' }}>
          INSTANT REPLAY
        </h1>
      </div>
      <div className="hidden md:flex space-x-7 mr-7">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-300">More Projects</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none bg-white rounded-full p-1">
          <img src={menuIcon} alt="Menu" className="w-6 h-6 text-white" style={{ filter: 'invert(1)' }} />
        </button>
      </div>
      <div className={`md:hidden absolute top-16 right-0 bg-gray-800 w-full flex flex-col items-center space-y-4 py-4 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>About</Link>
        <Link to="/projects" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>More Projects</Link>
      </div>
    </nav>
  );
};

export default NavBar;
