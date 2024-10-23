import { ArrowRight, Leaf, Globe, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from 'react';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const featuresRef = useRef(null);
  const sectionsRef = useRef(null);
  const dynamicContentRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const heroInView = useInView(heroRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const sectionsInView = useInView(sectionsRef, { once: true });

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

  const toggleSection = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    if (activeSection && dynamicContentRef.current) {
      const yOffset = -100; // Adjust this value to fine-tune the scroll position
      const y = dynamicContentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeSection]);

  // Add product data
  const products = [
    {
      id: 1,
      image: "/cardamom.png",
      title: "Premium Green Cardamoms",
      shortDescription: "Aromatic and flavorful, perfect for all cuisines.",
      description: "Our premium green cardamoms are carefully selected and processed to ensure the highest quality. Known for their intense aroma and distinctive flavor, these cardamoms are perfect for both culinary and medicinal purposes.",
      details: [
        { label: "Origin", value: "Kerala, India" },
        { label: "Grade", value: "Premium Export Quality" },
        { label: "Packaging", value: "Vacuum Sealed" },
        { label: "Shelf Life", value: "24 months" },
      ],
      varieties: [
        "8 mm & above (Extra Bold)",
        "7.5 mm & above (Bold)",
        "7~8 mm (Medium)",
        "6~7 mm (Small)",
      ],
      benefits: [
        "Rich in antioxidants and anti-inflammatory compounds",
        "Natural breath freshener",
        "Aids digestion and metabolism",
        "Perfect for both sweet and savory dishes",
      ],
    },
    {
      id: 2,
      image: "/cashew.png",
      title: "Fresh Cashew Kernels",
      shortDescription: "High-quality cashews for wholesale and retail.",
      description: "Our premium cashew kernels are processed and packed under strict quality control measures. Each kernel is carefully selected to ensure consistent size, color, and taste.",
      details: [
        { label: "Origin", value: "Karnataka, India" },
        { label: "Grade", value: "W320" },
        { label: "Packaging", value: "Nitrogen Flushed" },
        { label: "Shelf Life", value: "12 months" },
      ],
      varieties: [
        "W180",
        "W210",
        "W240",
        "W320",
        "W450",
      ],
      benefits: [
        "Rich in heart-healthy fats",
        "Excellent source of protein",
        "Contains essential minerals",
        "Versatile ingredient for various recipes",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-dark-bg dark:to-dark-bg">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 max-w-4xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white dark:text-dark-heading mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 dark:text-dark-text mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            key={`button-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild variant="default" size="lg" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-accent dark:hover:bg-dark-accent/90">
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
      </motion.section>

      {/* Products Section */}
      <motion.section 
        ref={productsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: productsInView ? 1 : 0, y: productsInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-green-50 dark:bg-dark-bg"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-heading">Our Premium Products</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <Card className="h-full flex flex-col dark:bg-dark-card dark:border-dark-border">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2 dark:text-dark-heading">{product.title}</CardTitle>
                    <Badge className="bg-teal-500 text-white">Premium Quality</Badge>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-600 dark:text-dark-text mb-4">{product.shortDescription}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add the ProductModal component */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || products[0]}
      />

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-green-50 dark:bg-dark-bg py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-heading">Why Choose Ojas Enterprises?</h2>
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
                    <p className="text-gray-600 dark:text-dark-text">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Explore More Section */}
      <motion.section
        ref={sectionsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: sectionsInView ? 1 : 0, y: sectionsInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16 bg-white dark:bg-dark-bg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-heading">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Discover our range of wholesale options and international shipping services.</p>
                <Button onClick={() => toggleSection('services')} variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Learn about our commitment to quality and customer satisfaction.</p>
                <Button onClick={() => toggleSection('about')} variant="outline">
                  Discover Our Story
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get in touch with us for inquiries or to place an order.</p>
                <Button onClick={() => toggleSection('contact')} variant="outline">
                  Reach Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Dynamic Content Section */}
      <div ref={dynamicContentRef}>
        <AnimatePresence mode="wait">
          {activeSection === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Services />
            </motion.div>
          )}
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          )}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
