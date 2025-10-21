import React from 'react';
import { Code2, Database, Github } from 'lucide-react';
import { skills } from '../data/personalData';

const Skills = ({ darkMode = false }) => {
  const getSkillIcon = (icon) => {
    const iconMap = {
      cpp: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L6 18v12l18 10 18-10V18L24 8z" fill="#00599C" />
          <path d="M24 8v32l18-10V18L24 8z" fill="#004482" />
          <text x="24" y="30" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">C++</text>
        </svg>
      ),
      python: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
      ),
      javascript: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
      ),
      sql: <Database className="w-12 h-12 text-blue-600" strokeWidth={1.5} />,
      react: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
      ),
      html: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS" className="w-12 h-12" />
      ),
      tailwind: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Tailwind CSS"
          className="w-12 h-12"
        />
      ),
      ds: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="32" height="6" rx="2" fill="#8b5cf6" />
          <rect x="8" y="21" width="32" height="6" rx="2" fill="#a78bfa" />
          <rect x="8" y="32" width="32" height="6" rx="2" fill="#c4b5fd" />
        </svg>
      ),
      oop: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="12" height="12" rx="2" fill="#ec4899" />
          <rect x="26" y="10" width="12" height="12" rx="2" fill="#f472b6" />
          <rect x="10" y="26" width="12" height="12" rx="2" fill="#f9a8d4" />
          <rect x="26" y="26" width="12" height="12" rx="2" fill="#fbcfe8" />
        </svg>
      ),
      vs: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-12 h-12" />
      ),
      github: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
      ),
      default: <Code2 className="w-12 h-12" />,
    };

    return iconMap[icon] || iconMap.default;
  };

  return (
    <section
      id="skills"
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          <p className="text-sm opacity-80">Technologies I work with</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center justify-center w-32 h-32 text-center gap-2 p-4 rounded-2xl shadow-sm border ${darkMode ? 'border-slate-700 bg-slate-800/60' : 'border-slate-100 bg-white'
                } transform transition-transform duration-300 hover:scale-110 hover:shadow-md`}
            >

              <div className="icon-wrapper">{getSkillIcon(skill.icon)}</div>
              <div className="text-center">
                <p className="text-sm font-medium break-words leading-tight">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
