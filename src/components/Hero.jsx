import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const Hero = ({ darkMode, isVisible, scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className={`text-center transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
           <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
  <img
    src={personalInfo.photo} // make sure this is '/images/profile.jpg'
    alt="Prerna Nebhwani"
    className="w-full h-full object-cover rounded-full"
  />
</div>

          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
          <Sparkles className={`${darkMode ? 'text-purple-400' : 'text-purple-500'} animate-pulse`} size={32} />
          <h1 className={`text-4xl md:text-7xl font-bold ${darkMode ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>
            I am {personalInfo.name}
          </h1>
          <Sparkles className={`${darkMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} size={32} />
        </div>
        
        <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 font-light`}>
          {personalInfo.title}
        </p>
        
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`${darkMode ? 'bg-gray-800 border-purple-400 text-purple-400' : 'bg-white border-purple-400 text-purple-600'} hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all border-2 shadow-lg`}
          >
            Get In Touch
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href={personalInfo.social.github} className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'} transition-all transform hover:scale-110`}>
            <Github size={28} />
          </a>
          <a href={personalInfo.social.linkedin} className={`${darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-500'} transition-all transform hover:scale-110`}>
            <Linkedin size={28} />
          </a>
          <a href={personalInfo.social.email} className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition-all transform hover:scale-110`}>
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${darkMode ? 'border-purple-400' : 'border-purple-400'} rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${darkMode ? 'bg-purple-400' : 'bg-purple-500'} rounded-full mt-2 animate-pulse`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;