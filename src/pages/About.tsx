import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">About Ojas Enterprises</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            Ojasenterprises is a leading supplier of premium green cardamoms and fresh cashew kernels. With years of experience in the spice and nut industry, we have established ourselves as trusted wholesalers, known for our commitment to quality and customer satisfaction.
          </p>
          <p className="text-gray-700 mb-6">
            Our expertise lies in sourcing the finest green cardamoms, often referred to as the "Queen of Spices," and high-quality cashew kernels. We take pride in our rigorous quality control processes, ensuring that every product we offer meets the highest standards of freshness and flavor.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Commitment</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Uncompromising quality in every batch</li>
            <li>Adherence to international packaging standards</li>
            <li>Flexible packaging options to meet diverse customer needs</li>
            <li>Global export capabilities for large wholesale orders</li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Premium Packaging Options</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>50 Kg Gunny Bags</li>
            <li>1 KG Oxo-poly bags</li>
            <li>500 gm Oxo-poly bags</li>
            <li>Premium Customized packaging for export orders</li>
          </ul>
          <p className="text-gray-700">
            At Ojasenterprises, we believe in building long-lasting relationships with our customers. Whether you're a small business owner or a large-scale distributor, we are committed to providing you with the finest products and exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;