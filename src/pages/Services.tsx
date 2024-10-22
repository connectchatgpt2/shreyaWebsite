import React from 'react';
import { Package, Truck, Globe, CheckCircle, Coffee, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services: React.FC = () => {
  const services = [
    { title: "Wholesale Options", icon: Package, description: "Flexible packaging solutions for businesses of all sizes.", color: "bg-blue-500" },
    { title: "Green Cardamom Varieties", icon: Coffee, description: "Premium cardamom in various grades and sizes.", color: "bg-green-500" },
    { title: "International Shipping", icon: Globe, description: "Reliable worldwide delivery for your orders.", color: "bg-purple-500" },
    { title: "Quality Assurance", icon: CheckCircle, description: "Rigorous quality control for every product.", color: "bg-yellow-500" },
    { title: "Custom Packaging", icon: Zap, description: "Tailored packaging solutions for your brand.", color: "bg-red-500" },
    { title: "Express Delivery", icon: Truck, description: "Fast and efficient local and international shipping.", color: "bg-indigo-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-bg py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-800 dark:text-dark-heading mb-8 text-center"
        >
          Our Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-dark-text text-center mb-12 max-w-3xl mx-auto"
        >
          From premium products to global shipping, we offer comprehensive solutions tailored to your business needs.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-dark-card dark:border-dark-border">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2 dark:text-dark-heading">{service.title}</CardTitle>
                  <Badge className={`${service.color} text-white`}>{service.title}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-dark-text">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
