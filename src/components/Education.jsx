import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/personalData';

const Education = ({ darkMode, isVisible }) => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className={`max-w-5xl w-full transform transition-all duration-1000 delay-300 ${isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={36} />
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2 md:mb-0`}>
                 {edu.institution}
                </h3>
                <span className={`${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'} px-4 py-2 rounded-full text-sm font-semibold`}>
                  {edu.year}
                </span>
              </div>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold mb-3 text-lg`}>
                {edu.degree}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;