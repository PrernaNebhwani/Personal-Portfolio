import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';

const Contact = ({ darkMode, isVisible }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon. 💌');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className={`max-w-2xl w-full transform transition-all duration-1000 delay-600 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Send className={`${darkMode ? 'text-pink-400' : 'text-pink-500'}`} size={36} />
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl`}>
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 text-lg`}>
            I'd love to hear from you! Whether you have a question, collaboration idea, or just want to say hi, feel free to reach out.
          </p>
          
          <div className="space-y-6">
            <div>
              <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-6 py-3 rounded-full border-2 ${darkMode ? 'border-purple-500 bg-gray-700 text-white' : 'border-purple-200 bg-white/50'} focus:border-purple-400 focus:outline-none transition-colors`}
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-6 py-3 rounded-full border-2 ${darkMode ? 'border-purple-500 bg-gray-700 text-white' : 'border-purple-200 bg-white/50'} focus:border-purple-400 focus:outline-none transition-colors`}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className={`w-full px-6 py-3 rounded-3xl border-2 ${darkMode ? 'border-purple-500 bg-gray-700 text-white' : 'border-purple-200 bg-white/50'} focus:border-purple-400 focus:outline-none transition-colors resize-none`}
                placeholder="Your message..."
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className={`mt-16 text-center`}>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center justify-center gap-2`}>
            Made by Prerna Nebhwani © 2024
          </p>
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} text-sm mt-2`}>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;