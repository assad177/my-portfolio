'use client';

import { Briefcase, BookOpen, Target, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Briefcase size={24} />,
      title: 'Backend Developer',
      description: 'Currently working with NestJS, TypeORM, and building scalable APIs.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Software Engineer',
      description: 'Graduated from  COMSATS University Abbottabad Campus',
    },
    {
      icon: <Target size={24} />,
      title: 'AI Automation Expert',
      description: 'Specializing in n8n, OpenAI, and intelligent workflow automation.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Passionate Learner',
      description: 'Constantly exploring new technologies and best practices.',
    },
  ];

  return (
    <section id="about" className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-800 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-32 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            A passionate developer with a mission to build impactful solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Left - Story */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm Assad Wazeer Graduated from  COMSATS University  in Software Engineering with a passion for building scalable web applications and intelligent automation solutions. My journey in tech has been driven by curiosity and the desire to solve real-world problems through elegant code.
            </p>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Currently, I work as a Backend Developer at Todds Group Abbottabad an Australian based Student Service company, specializing in NestJS and TypeORM to craft robust, enterprise-grade APIs. I have a deep interest in modern web architecture, database optimization, and creating systems that perform at scale.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beyond traditional development, I'm passionate about AI automation. I leverage tools like n8n and OpenAI to create intelligent workflows that enhance productivity and eliminate repetitive tasks. This fusion of web development and AI automation is where I truly excel.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I believe in clean code, continuous learning, and building solutions that deliver measurable business value. Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-700/40 border border-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/60 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { number: '10+', label: 'Projects', description: 'Built & Deployed' },
            { number: '2+', label: 'Years', description: 'Web Development' },
            { number: '10+', label: 'Technologies', description: 'Experienced With' },
            { number: '100%', label: 'Dedication', description: 'In Every Project' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </p>
              <p className="text-white font-semibold text-xs sm:text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-gray-500 text-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}