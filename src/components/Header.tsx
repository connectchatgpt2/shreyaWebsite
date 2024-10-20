import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/about', label: 'About Us', icon: FaUser },
    { to: '/services', label: 'Services', icon: FaCog },
    { to: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-4"
      >
        <img 
          src="/Logo.jpg" 
          alt="OJASENTERPRISES" 
          className="w-10 h-10 object-cover rounded-full" 
        />
        <span className="text-3xl font-bold text-blue-600">OJAS ENTERPRISES</span>
      </motion.div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <motion.li key={item.to} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.to}
                className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="md:hidden text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
          >
            <ul className="flex flex-col p-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.to}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="py-2"
                >
                  <Link
                    to={item.to}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="hidden md:block"
      >
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;