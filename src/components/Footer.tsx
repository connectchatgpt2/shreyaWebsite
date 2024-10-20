// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Nature Fresh Wholesale</h3>
            <p className="text-sm opacity-80">Premium Green Cardamoms and Fresh Cashew Kernels</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-green-300 transition duration-200 ease-out"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-green-300 transition duration-200 ease-out"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Nature Fresh Wholesale. All rights reserved.
          </p>
        </motion.div>
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
