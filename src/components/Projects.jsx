import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../data/personalData';

const Projects = ({ darkMode, isVisible }) => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-16">
      <div
        className={`max-w-5xl w-full transform transition-all duration-1000 delay-500 ${
          isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <Briefcase
            className={`${darkMode ? 'text-green-400' : 'text-green-500'}`}
            size={32}
          />
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className={`${
                  darkMode ? 'bg-gray-800/70' : 'bg-white/70'
                } backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 transform hover:-translate-y-2 
                overflow-hidden group h-[360px] flex flex-col`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                {/* Project Info */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      } mb-2 group-hover:text-purple-500 transition-colors`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      } text-sm mb-3 leading-relaxed`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`${
                          darkMode
                            ? 'bg-purple-900/50 text-purple-300'
                            : 'bg-purple-100 text-purple-700'
                        } px-2 py-1 rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
