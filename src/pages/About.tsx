import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

const milestones = [
  { year: '2018', title: 'Started YouTube Journey', description: 'Launched channel focusing on Touring content' },
  { year: '2020', title: 'Expanded Services', description: 'Added graphic design and photo editing to offerings' },
  { year: '2023', title: 'SR Industry Production', description: 'Launched second channel focusing on automotive content' },
  { year: '2024', title: 'Portfolio Expansion', description: 'Growing client base and diversifying creative services' }
];

export const About: React.FC = () => {
  return (
    <div className="pt-24">
      <Section
        eyebrow="About Me"
        title="Simple. Creative. Reliable. Friendly."
        subtitle="I bring ideas to life through cinematic edits and impactful design"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 mb-8">
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src="./src/assets/profile.jpg"
                    alt="Shafiq Rajput"
                    className="w-24 h-24 rounded-full object-cover border-2 border-cyan-500/30"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">Shafiq Rajput</h3>
                    <p className="text-cyan-400 font-medium">Video Editor & Graphic Designer</p>
                    <div className="flex items-center text-gray-400 text-sm mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      Lahore, Pakistan
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm Shafiq — a creative video editor and graphic designer. I turn raw ideas into 
                    cinematic stories and bold visuals that capture attention and drive results. My 
                    passion lies in crafting content that not only looks great but also connects with 
                    audiences on an emotional level.
                  </p>
                  
                  <p>
                    From vlog stories and reels to brand visuals and UI mockups, my focus is always 
                    on clarity, emotion, and audience connection. I believe that every project tells 
                    a story, and my job is to make sure that story is told in the most compelling 
                    way possible.
                  </p>

                  <p>
                    When I'm not editing or designing, you'll find me exploring new creative techniques, 
                    staying updated with the latest industry trends, or working on content for my 
                    YouTube channels where I share my knowledge and connect with fellow creators.
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="primary" icon={Download}>
                    Download Resume
                  </Button>
                  <Button variant="secondary" href="mailto:mshafiq786316@gmail.com">
                    Get In Touch
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
                <Calendar className="h-6 w-6 text-cyan-400 mr-3" />
                Journey Milestones
              </h3>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border-l-4 border-l-cyan-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-100">
                          {milestone.title}
                        </h4>
                        <span className="text-cyan-400 font-bold text-sm bg-cyan-500/10 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-400">
                        {milestone.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section className="bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Technical Skills</h3>
              <p className="text-gray-300 mb-8">
                Tools I use daily: Photoshop, Figma, Lightroom, Canva, CapCut, Premiere Pro.
                Each tool serves a specific purpose in bringing creative visions to life.
              </p>
              <Button variant="secondary" href="/skills">
                View Full Skills
              </Button>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};