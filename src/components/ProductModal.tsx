import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    image: string;
    details: {
      label: string;
      value: string;
    }[];
    varieties: string[];
    benefits: string[];
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  // Add useEffect to handle body scroll and positioning
  React.useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Calculate header height (assuming header height is 64px, adjust if different)
      const headerHeight = 64; 
      
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Calculate the modal position
      const modalTop = Math.max(headerHeight, scrollY + headerHeight);
      
      // Scroll to position
      window.scrollTo({
        top: modalTop,
        behavior: 'smooth'
      });
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed z-50 flex items-start justify-center w-full overflow-y-auto"
            style={{ 
              top: '64px', // Match header height
              height: 'calc(100vh - 64px)', // Subtract header height from viewport
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl relative mx-4 my-auto">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6"
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold dark:text-gray-200">Available Varieties</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.varieties.map((variety, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="dark:bg-gray-700"
                          >
                            {variety}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6"
                >
                  <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">{product.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-lg font-semibold mb-3 dark:text-gray-200">Product Details</h3>
                      <div className="space-y-2">
                        {product.details.map((detail, index) => (
                          <div key={index} className="flex justify-between border-b dark:border-gray-700 py-2">
                            <span className="text-gray-600 dark:text-gray-400">{detail.label}</span>
                            <span className="font-medium dark:text-gray-200">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold mb-3 dark:text-gray-200">Benefits</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300">{benefit}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8"
                  >
                    <Button className="w-full" size="lg">
                      Request Quote
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
