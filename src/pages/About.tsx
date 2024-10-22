import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Smile, Leaf, Package, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: Award },
    { label: "Happy Clients", value: "500+", icon: Smile },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Annual Growth", value: "20%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-green-800 mb-12 text-center"
        >
          About Ojas Enterprises
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Ojas Enterprises is a leading supplier of premium green cardamoms and fresh cashew kernels. With years of experience in the spice and nut industry, we have established ourselves as trusted wholesalers, known for our commitment to quality and customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our expertise lies in sourcing the finest green cardamoms, often referred to as the "Queen of Spices," and high-quality cashew kernels. We take pride in our rigorous quality control processes, ensuring that every product we offer meets the highest standards of freshness and flavor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-8 flex items-center justify-center"
          >
            <img src="/about-image.jpg" alt="About Ojas Enterprises" className="rounded-lg max-w-full h-auto shadow-lg" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Leaf className="text-green-600 w-10 h-10 mr-4" />
              <h2 className="text-3xl font-semibold text-green-700">Our Commitment</h2>
            </div>
            <ul className="list-none text-gray-700 space-y-4">
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Award className="text-green-600 w-6 h-6" />
                </span>
                Uncompromising quality in every batch
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Package className="text-green-600 w-6 h-6" />
                </span>
                Adherence to international packaging standards
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Users className="text-green-600 w-6 h-6" />
                </span>
                Flexible options to meet diverse customer needs
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Globe className="text-green-600 w-6 h-6" />
                </span>
                Global export capabilities for large wholesale orders
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Package className="text-green-600 w-10 h-10 mr-4" />
              <h2 className="text-3xl font-semibold text-green-700">Premium Packaging Options</h2>
            </div>
            <ul className="list-none text-gray-700 space-y-4">
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Package className="text-green-600 w-6 h-6" />
                </span>
                50 Kg Gunny Bags
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Package className="text-green-600 w-6 h-6" />
                </span>
                1 KG Oxo-poly bags
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Package className="text-green-600 w-6 h-6" />
                </span>
                500 gm Oxo-poly bags
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-4">
                  <Package className="text-green-600 w-6 h-6" />
                </span>
                Premium Customized packaging for export orders
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-white rounded-lg shadow-xl p-6 text-center"
            >
              <stat.icon size={48} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
