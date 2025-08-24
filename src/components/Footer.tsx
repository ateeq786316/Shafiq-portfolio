import React from 'react';
import { Youtube, Mail, Linkedin } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-100 mb-2">Shafiq Rajput</h3>
            <p className="text-gray-400 text-sm">Video Editor • Graphic Designer • YouTuber</p>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <Button
              variant="icon"
              icon={Youtube}
              href="https://www.youtube.com/@shafiqrajput786/featured"
            />
            <Button
              variant="icon"
              icon={Youtube}
              href="https://www.youtube.com/@srindustryproduction"
            />
            <Button
              variant="icon"
              icon={Mail}
              onClick={() => onPageChange('contact')}
            />
            <Button
              variant="icon"
              icon={Linkedin}
              href="https://www.linkedin.com/in/shafiq-rajput-922ab4219/"
            />
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onPageChange('contact')}
          >
            Hire Me
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Shafiq Rajput. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};