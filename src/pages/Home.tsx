import React from 'react';
import { ArrowRight, Leaf, Globe, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Premium Spices & Nuts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Wholesale Green Cardamoms and Fresh Cashew Kernels
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild variant="secondary" size="lg">
              <a href="/contact" className="inline-flex items-center">
                Inquire Now <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Premium Green Cardamoms</CardTitle>
                  <Badge className="bg-teal-500 text-white">Bold & Aromatic</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltm4hbPUMPIZxYdE2hAlxFM4BqU82mSIRdw&s" 
                    alt="Green Cardamoms" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">Perfect for all Cuisines</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>8 mm & above (Extra Bold)</li>
                    <li>7.5 mm & above (Bold)</li>
                    <li>7~8 mm (Medium)</li>
                    <li>6~7 mm (Small)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Fresh Cashew Kernels</CardTitle>
                  <Badge className="bg-teal-500 text-white">Premium Quality</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img 
                    src="https://img.freepik.com/premium-photo/premium-cashew-nuts-beautifully-wood-background-creating-inviting-wholesome-image-perfect-your-culinary-healthrelated-projects-add-your-text-branding-with-copy-space_13364-17433.jpg" 
                    alt="Fresh Cashew Kernels" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">Freshly Packed for Wholesale</p>
                  <p className="text-gray-700">Our cashew kernels are carefully selected and packed to ensure the highest quality and freshness for our wholesale customers.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ojas Enterprises?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", icon: Leaf, description: "We source only the finest green cardamoms and cashew kernels." },
              { title: "Global Export", icon: Globe, description: "We offer international shipping for large wholesale orders." },
              { title: "Customized Packaging", icon: Package, description: "Flexible packaging options to meet your specific needs." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto text-green-600" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}