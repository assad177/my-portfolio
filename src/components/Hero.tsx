'use client';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, link: 'https://github.com/assad177', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/assad-wazeer-92a177283/', label: 'LinkedIn' },
    { icon: Mail, link: '#', label: 'Email' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-black" />
      
      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(100, 150, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Premium Glowing Orbs - subtle and elegant */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10" style={{
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10" style={{
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-in-left' : ''}`}>
            {/* Badge with animation */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/5 text-sm text-blue-300 w-fit hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 cursor-default" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.1s forwards' : 'none'
            }}>
              <Sparkles className="w-4 h-4" />
              Open for opportunities
            </div>

            {/* Heading with staggered animation */}
            <div className="space-y-2" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.2s forwards' : 'none',
              opacity: 0
            }}>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-pulse">Assad</span>
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-200">Wazeer</h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 font-semibold" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.3s forwards' : 'none',
              opacity: 0
            }}>
              Full Stack Developer & AI Automation Specialist
            </p>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.4s forwards' : 'none',
              opacity: 0
            }}>
              I craft high-performance web applications with React, Node.js, and NestJS. Specialized in AI automation, scalable architecture, and transforming complex ideas into elegant digital solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 py-6 pt-4" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.5s forwards' : 'none',
              opacity: 0
            }}>
              {[
                { number: '10+', label: 'Projects' },
                { number: '4+', label: 'Years' },
                { number: '100%', label: 'Dedicated' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1 group cursor-default">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all">{stat.number}</p>
                  <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 flex-wrap" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}>
              <button className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 active:scale-95">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="px-8 py-3 border border-gray-500 rounded-lg font-semibold text-gray-200 hover:bg-gray-900/50 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 active:scale-95">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.7s forwards' : 'none',
              opacity: 0
            }}>
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border border-gray-600 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 active:scale-95 group"
                  >
                    <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Image Section */}
          <div className={`relative ${isLoaded ? 'animate-in-right' : ''}`} style={{
            animation: isLoaded ? 'slideInRight 0.8s ease-out forwards' : 'none',
            opacity: 0
          }}>
            {/* Premium Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" style={{
              animation: 'float 4s ease-in-out infinite'
            }} />
            <div className="absolute inset-0 bg-gradient-to-l from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-10" style={{
              animation: 'float 5s ease-in-out infinite reverse'
            }} />

            {/* Image Container with premium styling */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              <img
                src="/student.jpeg"
                alt="Assad Wazeer - Full Stack Developer"
                className="w-full h-auto rounded-3xl object-cover border-2 border-blue-500/30 shadow-2xl hover:border-blue-400/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30"
              />
            </div>

            {/* Left Floating Tech Card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-gray-900/90 to-gray-900/70 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-2xl hover:border-blue-400/60 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 group cursor-default" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.5s forwards' : 'none',
              opacity: 0
            }}>
              <p className="font-bold text-base text-white">MERN Stack</p>
              <p className="text-gray-400 text-sm mt-1">React • Node • MongoDB</p>
              <div className="mt-3 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>
            </div>

            {/* Right Floating Tech Card */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-gray-900/90 to-gray-900/70 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 shadow-2xl hover:border-purple-400/60 hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 cursor-default" style={{
              animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}>
              <p className="font-bold text-base text-white">AI Automation</p>
              <p className="text-gray-400 text-sm mt-1">n8n • OpenAI • LLMs</p>
              <div className="mt-3 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-3 hover:text-gray-300 transition-colors cursor-default" style={{
        animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.8s forwards' : 'none',
        opacity: 0
      }}>
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
}