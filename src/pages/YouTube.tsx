import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Play } from 'lucide-react';
import { channels } from '../data/channels';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Tag } from '../components/Tag';
import { Section } from '../components/Section';

export const YouTube: React.FC = () => {
  return (
    <div className="pt-24">
      <Section
        eyebrow="YouTube"
        title="My YouTube Channels"
        subtitle="I run two YouTube channels—one for creative lifestyle content, one focused on automotive stories and tutorials."
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.handle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <Youtube className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">
                        {channel.name}
                      </h3>
                      <p className="text-gray-400">{channel.handle}</p>
                    </div>
                  </div>

                  <Tag variant="accent" className="mb-4">
                    {channel.focus}
                  </Tag>

                  <p className="text-gray-300 mb-6">
                    {channel.note}
                  </p>

                  <Button 
                    variant="secondary" 
                    icon={ExternalLink}
                    href={channel.url}
                    className="w-full"
                  >
                    Visit Channel
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Videos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">
              Featured Content
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Channel 1 Featured Video */}
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                  <Play className="h-5 w-5 text-cyan-400 mr-2" />
                  Latest from Shafiq Rajput
                </h4>
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/ZbNbmU3kkv0"
                    title="Latest video from Shafiq Rajput"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Diverse content with polished editing showcasing lifestyle, tech reviews, and more.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  href="https://www.youtube.com/@shafiqrajput786/featured"
                >
                  View More Videos
                </Button>
              </Card>

              {/* Channel 2 Featured Video */}
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                  <Play className="h-5 w-5 text-cyan-400 mr-2" />
                  Latest from SR Industry Production
                </h4>
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/2r82iP0Bq-w"
                    title="Latest video from SR Industry Production"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Automotive-focused content featuring reviews, modifications, and detailed tutorials.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  href="https://www.youtube.com/@srindustryproduction"
                >
                  View More Videos
                </Button>
              </Card>
            </div>
          </motion.div>

          {/* Subscribe CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20">
              <Youtube className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to both channels to stay updated with my latest content. From lifestyle vlogs 
                to automotive deep-dives, there's always something new to discover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  href="https://www.youtube.com/@shafiqrajput786/featured"
                  icon={Youtube}
                >
                  Subscribe to Shafiq Rajput
                </Button>
                <Button 
                  variant="secondary" 
                  href="https://www.youtube.com/@srindustryproduction"
                  icon={Youtube}
                >
                  Subscribe to SR Industry
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};