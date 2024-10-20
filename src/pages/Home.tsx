import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Spices & Nuts</h1>
          <p className="text-xl mb-8">Wholesale Green Cardamoms and Fresh Cashew Kernels</p>
          <a href="/contact" className="bg-white text-green-800 px-6 py-3 rounded-full inline-flex items-center hover:bg-green-100 transition duration-300">
            Inquire Now <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltm4hbPUMPIZxYdE2hAlxFM4BqU82mSIRdw&s" alt="Green Cardamoms" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Green Cardamoms</h3>
                <p className="text-gray-600 mb-4">Bold, Aromatic, Perfect for all Cuisines</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>8 mm & above (Extra Bold)</li>
                  <li>7.5 mm & above (Bold)</li>
                  <li>7~8 mm (Medium)</li>
                  <li>6~7 mm (Small)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="https://img.freepik.com/premium-photo/premium-cashew-nuts-beautifully-wood-background-creating-inviting-wholesome-image-perfect-your-culinary-healthrelated-projects-add-your-text-branding-with-copy-space_13364-17433.jpg" alt="Fresh Cashew Kernels" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fresh Cashew Kernels</h3>
                <p className="text-gray-600 mb-4">Premium Quality, Freshly Packed</p>
                <p className="text-gray-700">Our cashew kernels are carefully selected and packed to ensure the highest quality and freshness for our wholesale customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ojas Enterprises?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We source only the finest green cardamoms and cashew kernels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Global Export</h3>
              <p className="text-gray-600">We offer international shipping for large wholesale orders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Customized Packaging</h3>
              <p className="text-gray-600">Flexible packaging options to meet your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;