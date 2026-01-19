'use client';

import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Grid Layout - Stack on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm text-gray-300">Open for opportunities</span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                  Assad Wazeer
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                Full Stack Developer & AI Automation Specialist
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed">
              I build high-performance web applications with React, Node.js, and NestJS. Passionate about AI automation, scalable architecture, and turning complex ideas into elegant solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-6">
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 sm:p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">10+</p>
                <p className="text-xs sm:text-sm text-gray-400">Projects</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 sm:p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">4+</p>
                <p className="text-xs sm:text-sm text-gray-400">Years</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 sm:p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">100%</p>
                <p className="text-xs sm:text-sm text-gray-400">Dedicated</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 w-full sm:w-auto">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-blue-500/50 text-blue-400 text-sm sm:text-base hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 hover:border-blue-400 w-full sm:w-auto">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href="https://github.com/assad177" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/60 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <Github size={20} className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/assad-wazeer-92a177283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/60 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <Linkedin size={20} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/60 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <Mail size={20} className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-xs mx-auto aspect-square lg:max-w-sm">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-1 overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full relative">
                    {/* Placeholder - Replace with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center hidden">
                      <div className="text-center space-y-4">
                        <Code2 size={60} className="text-blue-400 mx-auto sm:w-20 sm:h-20" />
                        <p className="text-gray-400 text-sm sm:text-base">Your Profile Photo</p>
                        <p className="text-xs text-gray-500">Place image at: /public/profile.jpg</p>
                      </div>
                    </div>
                    {/* Uncomment below and add your image */}
                    <Image
                      src="/student.jpeg"
                      alt="Assad Wazeer"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Cards - Hidden on small mobile */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-2 sm:p-3 shadow-xl hover:shadow-blue-500/50 transition-shadow text-xs">
                <p className="font-semibold text-white">MERN Stack</p>
                <p className="text-gray-400 text-xs">React, Node.js, MongoDB</p>
              </div>

              <div className="hidden sm:block absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-2 sm:p-3 shadow-xl hover:shadow-cyan-500/50 transition-shadow text-xs">
                <p className="font-semibold text-white">AI Automation</p>
                <p className="text-gray-400 text-xs">n8n, OpenAI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 animate-bounce">
              <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}