import React from 'react';
import { Package, Truck, Globe } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <Package className="mr-2" /> Wholesale Options
            </h2>
            <p className="text-gray-700 mb-4">
              We offer a range of wholesale options to meet the diverse needs of our customers. Our flexible packaging and customization options ensure that you get exactly what you need for your business.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Packaging Options:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>50 Kg Gunny Bags</li>
              <li>1 KG Oxo-poly bags</li>
              <li>500 gm Oxo-poly bags</li>
              <li>Premium Customized packaging for export orders</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <Globe className="mr-2" /> Green Cardamom Varieties
            </h2>
            <p className="text-gray-700 mb-4">
              We pride ourselves on offering a variety of high-quality green cardamom options to suit different culinary needs and preferences.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Available Sizes:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>8 mm & above (Extra Bold)</li>
              <li>7.5 mm & above (Bold)</li>
              <li>7~8 mm (Medium)</li>
              <li>6~7 mm (Small)</li>
            </ul>
            <p className="text-gray-700">
              All our cardamom varieties are carefully graded and sorted to ensure consistency in size and quality.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            <Truck className="mr-2" /> International Shipping and Export
          </h2>
          <p className="text-gray-700 mb-4">
            We offer international shipping and export services for large wholesale orders. Our team has extensive experience in handling global logistics, ensuring that your products arrive fresh and on time, no matter where you are in the world.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Expertise in international trade regulations</li>
            <li>Secure and efficient packaging for long-distance transport</li>
            <li>Flexible shipping options to meet your specific needs</li>
            <li>Full support and tracking throughout the shipping process</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;