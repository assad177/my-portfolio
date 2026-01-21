'use client';

import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      link: 'https://github.com/assad177/',
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/assadwazeer',
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      link: 'https://twitter.com/assadwazeer',
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      link: 'assadwazeer0@gmail.com',
    },
  ];

  return (
    <footer className="relative w-full bg-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* Brand Section */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">&lt;/&gt;</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Assad
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Full Stack Developer & AI Automation Specialist crafting innovative solutions.
              </p>
              <div className="flex gap-3 pt-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800/60 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base">Navigation</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base">Services</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    API Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base">Resources</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a href="https://github.com/assad177/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/assadwazeer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/assadwazeer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:assadwazeer0@gmail.com" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 mb-6 sm:mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-500 text-xs sm:text-sm">
                © {currentYear} Assad Wazeer. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1 sm:mt-0">
                Designed & built with <span className="text-red-400">♥</span> using Next.js & Tailwind CSS
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 mx-auto sm:mx-0"
              title="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Elements for Design */}
        <div className="absolute bottom-0 left-0 w-1 h-20 bg-gradient-to-t from-blue-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-cyan-500 to-transparent opacity-50"></div>
      </div>
    </footer>
  );
}