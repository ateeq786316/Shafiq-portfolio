import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Work', value: 'work' },
  { label: 'About', value: 'about' },
  { label: 'Services', value: 'services' },
  { label: 'Skills', value: 'skills' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Contact', value: 'contact' }
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onPageChange('home')}
            className="text-3xl font-raintop text-gray-100 tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shafiq Rajput
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.value
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
            <Button variant="primary" size="sm">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              children={isMenuOpen ? 'Close' : 'Menu'}
              aria-label="Toggle menu"
              variant="icon"
              icon={isMenuOpen ? X : Menu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{ maxHeight: isMenuOpen ? 384 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onPageChange(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  currentPage === item.value
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="primary" size="sm" className="w-full mt-4">
              Hire Me
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};