import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const About = ({ darkMode, isVisible }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className={`max-w-4xl transform transition-all duration-1000 delay-200 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Heart className={`${darkMode ? 'text-pink-400' : 'text-pink-500'}`} size={36} />
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl`}>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center mb-6`}>
            {personalInfo.about.intro}
          </p>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center`}>
            {personalInfo.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;