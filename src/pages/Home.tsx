import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Star, Award, Users, VideoIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import bgImage from '../assets/bg.jpg';
import shafiqImage from '../assets/shafiq.jpg';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const stats = [
  { icon: VideoIcon, label: 'Videos Edited', value: '5000+' },
  { icon: Star, label: 'Happy Clients', value: '90+' },
  { icon: Award, label: 'Years Experience', value: '7+' },
  { icon: Users, label: 'YouTube Subscribers', value: '...' }
];

export const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px 0px -10% 0px' // Trigger slightly before video is fully in view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Update video src with autoplay parameter based on visibility
  const getVideoSrc = () => {
    const baseUrl = 'https://www.youtube.com/embed/Q9lNpAdgzdM';
    const params = new URLSearchParams({
      autoplay: isVideoVisible ? '1' : '0',
      mute: '0', // Must be muted for autoplay to work
      controls: '1',
      loop: '1',
      playlist: 'Q9lNpAdgzdM' // Required for loop to work
    });
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImage})` }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 tracking-tight">
              Shafiq Rajput
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Video Editor • Graphic Designer • YouTuber
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I craft cinematic edits, bold visuals, and stories that connect. 
              From concept to final cut, I bring ideas to life with technical precision and creative vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="primary" 
                size="lg" 
                icon={Play}
                onClick={() => onPageChange('work')}
              >
                View Showreel
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onPageChange('contact')}
              >
                Hire Me
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Showreel */}
      <Section 
        eyebrow="Featured Work"
        title="Latest Showreel"
        subtitle="A showcase of my recent video editing and design projects"
      >
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-6">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <iframe
                ref={videoRef}
                src={getVideoSrc()}
                title="Shafiq Rajput Showreel"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {isVideoVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Playing
                </motion.div>
              )}
            </div>
          </Card>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Preview */}
      <Section
        eyebrow="About Me"
        title="Simple. Creative. Reliable. Friendly."
        subtitle="I bring ideas to life through cinematic edits and impactful design"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm Shafiq — a video editor, graphic designer, and YouTuber. I blend storytelling 
                with clean visual design to help brands and creators stand out. From vlog stories 
                and reels to brand visuals and UI mockups, my focus is clarity, emotion, and 
                audience connection.
              </p>
              <p className="text-gray-400 mb-8">
                Tools I use daily: Photoshop, Figma, Lightroom, Canva, CapCut, Premiere Pro.
              </p>
              <Button 
                variant="secondary"
                onClick={() => onPageChange('about')}
              >
                Learn More About Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-2">
                <img
                  src={shafiqImage}
                  alt="Shafiq Rajput"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};