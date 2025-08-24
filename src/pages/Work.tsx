import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, Instagram } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Tag } from '../components/Tag';
import { Modal } from '../components/Modal';
import { Section } from '../components/Section';

const filters = ['All', 'Video', 'Design'];

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.type === activeFilter
  );

  return (
    <div className="pt-24">
      <Section
        eyebrow="Portfolio"
        title="Featured Work"
        subtitle="A showcase of my video editing and graphic design projects"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4 p-2 bg-gray-800 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-cyan-500 text-gray-900'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="group cursor-pointer overflow-hidden" hover={false}>
                  <div className="relative">
                    <img
                      src={project.thumb}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button
                          variant="primary"
                          size="sm"
                          icon={Eye}
                          onClick={() => setSelectedProject(project)}
                          className="w-full"
                        >
                          View Case Study
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Tag variant="accent">{project.type}</Tag>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Tag key={tool}>{tool}</Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Hero Media */}
            {selectedProject.videoUrl ? (
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedProject.instagramUrl ? (
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                <img
                  src={selectedProject.thumb}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <Instagram className="h-16 w-16 text-white mx-auto mb-4" />
                    <p className="text-white text-lg mb-4">Instagram Reel</p>
                    <Button
                      variant="primary"
                      icon={ExternalLink}
                      href={selectedProject.instagramUrl}
                      target="_blank"
                    >
                      Watch on Instagram
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={selectedProject.thumb}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            {/* Project Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Project Brief</h4>
                <p className="text-gray-300 mb-6">{selectedProject.summary}</p>
                
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Details</h4>
                <ul className="text-gray-300 space-y-2">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Tools Used</h4>
                <div className="space-y-2">
                  {selectedProject.tools.map((tool) => (
                    <Tag key={tool} variant="accent">{tool}</Tag>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Images */}
            {selectedProject.images && (
              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Gallery</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};