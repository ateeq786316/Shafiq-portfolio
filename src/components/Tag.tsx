import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export const Tag: React.FC<TagProps> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-700 text-gray-300',
    accent: 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border border-cyan-500/30'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};