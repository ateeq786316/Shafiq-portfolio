import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Card } from '../components/Card';
import { Tag } from '../components/Tag';
import { Section } from '../components/Section';

export const Skills: React.FC = () => {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Skills"
        title="Technical Skills That Power Creative Results"
        subtitle="A comprehensive overview of tools and competencies I use to deliver professional results"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-100 mb-6">
                    {skillCategory.category}
                  </h3>
                  
                  <div className="grid gap-4">
                    {skillCategory.items.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <Tag variant="accent" className="text-base py-2 px-4">
                          {skill}
                        </Tag>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Workflow Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-cyan-500/20">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                My Creative Process
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Concept', description: 'Understanding your vision and requirements' },
                  { step: '02', title: 'Plan', description: 'Structuring the approach and timeline' },
                  { step: '03', title: 'Create', description: 'Bringing ideas to life with technical expertise' },
                  { step: '04', title: 'Deliver', description: 'Polishing and delivering the final product' }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-cyan-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {phase.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};