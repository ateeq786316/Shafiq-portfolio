import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Youtube, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Hi Shafiq,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    
    window.open(`mailto:shafiq@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24">
      <Section
        eyebrow="Contact"
        title="Let's Collaborate"
        subtitle="Tell me about your project. I'm ready to help bring your vision to life."
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">
                  Start Your Project
                </h3>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 flex items-center text-green-400"
                  >
                    <CheckCircle className="h-5 w-5 mr-3" />
                    Message sent! Check your email client to complete sending.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-100 placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-100 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-100 placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-gray-100 font-medium">mshafiq786316@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                      <Phone className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-gray-100 font-medium">+92 302 4018443</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-gray-100 font-medium">Pakistan</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-100 mb-6">
                  Connect Online
                </h3>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="secondary"
                    icon={Youtube}
                    href="https://www.youtube.com/@shafiqrajput786/featured"
                  >
                    Shafiq Rajput
                  </Button>
                  <Button
                    variant="secondary"
                    icon={Youtube}
                    href="https://www.youtube.com/@srindustryproduction"
                  >
                    SR Industry
                  </Button>
                  <Button
                    variant="secondary"
                    icon={Linkedin}
                    href="https://www.linkedin.com/in/shafiq-rajput-922ab4219/"
                  >
                    LinkedIn
                  </Button>
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-cyan-500/20">
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  Current Availability
                </h3>
                <p className="text-gray-300 mb-4">
                  I'm currently accepting new projects and typically respond within 24 hours.
                  Have a brief? Share your goals and timeline, and I'll get back to you with
                  a detailed proposal.
                </p>
                <div className="flex items-center text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for new projects</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};