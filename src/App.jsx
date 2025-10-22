import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'}`}>
      {/* Animated Background Blobs */}
      {!darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-0 left-0" />
          <div className="absolute w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-0 right-0" style={{ animationDelay: '2s' }} />
          <div className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-1/2 left-1/2" style={{ animationDelay: '4s' }} />
        </div>
      )}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrollToSection={scrollToSection} />
      <Hero darkMode={darkMode} isVisible={isVisible} scrollToSection={scrollToSection} />
      <About darkMode={darkMode} isVisible={isVisible} />

      <Skills darkMode={darkMode} isVisible={isVisible} />
      <Projects darkMode={darkMode} isVisible={isVisible} />
      <Contact darkMode={darkMode} isVisible={isVisible} />
    </div>
  );
}

export default App;