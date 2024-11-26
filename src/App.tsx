import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-gray-900 to-black opacity-90 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1),rgba(147,51,234,0.1))] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] opacity-50" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
