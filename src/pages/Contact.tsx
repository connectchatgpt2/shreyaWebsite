import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-dark-bg dark:to-dark-bg py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-blue-800 dark:text-dark-heading mb-8 text-center"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-dark-accent mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-dark-text font-semibold mb-2">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full dark:bg-dark-bg dark:text-dark-text"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-dark-text font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full dark:bg-dark-bg dark:text-dark-text"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-dark-text font-semibold mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full dark:bg-dark-bg dark:text-dark-text"
                />
              </div>
              <Button type="submit" className="w-full dark:bg-dark-accent dark:text-dark-heading">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-dark-accent mb-6">Our Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-600 dark:text-dark-accent mt-1" size={24} />
                <p className="text-gray-700 dark:text-dark-text">Mayur Vihar Phase I, Delhi 110091 INDIA</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 dark:text-dark-accent" size={24} />
                <p className="text-gray-700 dark:text-dark-text">+91 9999886959</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 dark:text-dark-accent" size={24} />
                <p className="text-gray-700 dark:text-dark-text">sales@ojasenterprises.in</p>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-blue-600 dark:text-dark-accent mt-1" size={24} />
                <div>
                  <p className="text-gray-700 dark:text-dark-text">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-700 dark:text-dark-text">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-700 dark:text-dark-text">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mayur%20Vihar%20Phase%20I,%20Delhi%20110091%20INDIA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
