import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Settings, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const menuItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About Us', icon: User },
    { to: '/services', label: 'Services', icon: Settings },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-4"
      >
        <img 
          src="/Logo.jpg" 
          alt="OJASENTERPRISES" 
          className="w-12 h-12 object-cover rounded-full" 
        />
        <span className="text-3xl font-extrabold text-blue-600 font-serif tracking-wide">
          OJAS ENTERPRISES
        </span>
      </motion.div>
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.to}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.to}
                  className="flex items-center space-x-2 py-2 px-3 text-sm text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button asChild variant="default" size="sm">
          <Link to="/contact">
            Get in Touch
          </Link>
        </Button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
