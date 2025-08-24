import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Zap, Camera, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

const iconMap = {
  Video,
  Palette,
  Zap,
  Camera
};

interface ServicesProps {
  onPageChange: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Services"
        title="What I Can Do For You"
        subtitle="Need a promo, reel, or brand visuals? Let's create something memorable."
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-display uppercase tracking-wider text-gray-100">
                        {service.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-300">
                          <ArrowRight className="h-4 w-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => onPageChange('contact')}
                    >
                      Get Quote
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Why Choose Me Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-cyan-500/20">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                🔑 Why Choose Me?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I don't just edit — I craft stories. Every frame, graphic, and sound is designed to connect with your audience, 
                boost your brand, and make your message unforgettable.
              </p>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-cyan-500/20">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you need a single video edit or a complete brand identity package, 
                I'm here to help bring your vision to life with professional quality and creative flair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => onPageChange('contact')}
                >
                  Start a Project
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => onPageChange('work')}
                >
                  View Portfolio
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};