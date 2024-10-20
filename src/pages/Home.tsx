import { ArrowRight, Leaf, Globe, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/cardamom.png",
      title: "Premium Green Cardamoms",
      description: "Aromatic and flavorful, perfect for all cuisines."
    },
    {
      image: "/cashew.png",
      title: "Fresh Cashew Kernels",
      description: "High-quality cashews for wholesale and retail."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 max-w-4xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            key={`button-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild variant="default" size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <a href="/contact" className="inline-flex items-center">
                Buy Now <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="text-black" size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="text-black" size={24} />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full mx-1 ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            ></div>
          ))}
        </div>
      </section>

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
