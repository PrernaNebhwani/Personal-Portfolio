import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const Contact = ({ darkMode, isVisible }) => {
  const handleResumeDownload = () => {
    window.open(
      'https://1drv.ms/b/c/f21b16ef6b8de949/EXRn5DfVxedLk_LXLnQNvC8BSzAY3mplqjPiGgXoWdMnKA?e=iGX2CaK', // replace with your actual resume link
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-2xl w-full text-center transform transition-all duration-1000 ${
          isVisible.contact
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Let's Connect 🤝
        </h2>

        <p
          className={`text-lg mb-12 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          I’d love to connect! Feel free to reach out on any platform below.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Github size={22} />
            GitHub
          </a>

          <a
            href={`mailto:${personalInfo.social.email}`}
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail size={22} />
            Email Me
          </a>
        </div>

        {/* Download Resume Button */}
        <button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          <Download size={20} />
          Download Resume
        </button>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p
            className={`flex items-center justify-center gap-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Made  by Prerna Nebhwani © 2025
          </p>
          <p
            className={`${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            } text-sm mt-2`}
          >
            Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
