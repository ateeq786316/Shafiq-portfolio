import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  icon: Icon,
  className = '',
  disabled = false
}) => {
  const baseClasses = "inline-flex items-center justify-center font-accent font-medium tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/25",
    secondary: "border border-gray-600 hover:border-cyan-500 text-gray-100 hover:text-cyan-400 focus:ring-cyan-500",
    icon: "text-gray-400 hover:text-cyan-400 p-2"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-6 py-2.5 text-base rounded-lg", 
    lg: "px-8 py-3 text-lg rounded-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${variant !== 'icon' ? sizes[size] : ''} ${className}`;

  const content = (
    <>
      {Icon && <Icon className={`${variant === 'icon' ? 'h-5 w-5' : 'h-4 w-4 mr-2'}`} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};