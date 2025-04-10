// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/images/menu.svg';

interface NavBarProps {
  resetAppState: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ resetAppState }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-[#013369] via-[#013369] to-[#D50A0A] px-6 py-4 shadow-lg w-full">

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={resetAppState}
          className="text-white text-4xl font-extrabold tracking-widest px-6 py-2 rounded-full bg-[#D50A0A] hover:bg-red-700 transition duration-300 drop-shadow-lg"
          style={{ fontFamily: 'Supercharge Halftone' }}
        >
          INSTANT REPLAY
        </Link>

        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to="/" onClick={resetAppState} className="text-white hover:text-[#00BFFF] transition duration-200">Home</Link>
          <Link to="/about" className="text-white hover:text-[#00BFFF] transition duration-200">About</Link>
          <Link to="/projects" className="text-white hover:text-[#00BFFF] transition duration-200">More Projects</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 rounded-full bg-white drop-shadow-md">
            <img src={menuIcon} alt="Menu" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center bg-[#013369] py-4 mt-4 space-y-4 rounded-md shadow-md">
          <Link to="/" className="text-white text-lg font-medium" onClick={() => { toggleMobileMenu(); resetAppState(); }}>Home</Link>
          <Link to="/about" className="text-white text-lg font-medium" onClick={toggleMobileMenu}>About</Link>
          <Link to="/projects" className="text-white text-lg font-medium" onClick={toggleMobileMenu}>More Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
