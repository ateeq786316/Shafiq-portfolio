import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Skills } from './pages/Skills';
import { YouTube } from './pages/YouTube';
import { Contact } from './pages/Contact';

type PageType = 'home' | 'work' | 'about' | 'services' | 'skills' | 'youtube' | 'contact';

const pageComponents = {
  home: Home,
  work: Work,
  about: About,
  services: Services,
  skills: Skills,
  youtube: YouTube,
  contact: Contact
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const CurrentPageComponent = pageComponents[currentPage];

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <CurrentPageComponent onPageChange={handlePageChange} />
        </motion.div>
      </AnimatePresence>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;