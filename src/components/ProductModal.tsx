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
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ 
              paddingTop: 'calc(64px + 1rem)', // header height + padding
              paddingBottom: '1rem'
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl relative my-auto">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="grid md:grid-cols-2 gap-6 p-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-lg"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold dark:text-gray-200">Available Varieties</h3>
                    <div className="flex flex-wrap gap-2">
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-gray-200">{product.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold dark:text-gray-200">Product Details</h3>
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
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold dark:text-gray-200">Benefits</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300">{benefit}</li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pt-4"
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
