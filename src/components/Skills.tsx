'use client';

import { Code2, Database, Zap, Brain, Settings } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={28} className="sm:w-8 sm:h-8" />,
      color: 'from-blue-500 to-blue-600',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Backend Development',
      icon: <Settings size={28} className="sm:w-8 sm:h-8" />,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Node.js', 'Express.js', 'NestJS', 'TypeORM', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'Databases',
      icon: <Database size={28} className="sm:w-8 sm:h-8" />,
      color: 'from-purple-500 to-purple-600',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL','TypeOrm', 'Prisma ORM'],
    },
    {
      title: 'AI & Automation',
      icon: <Brain size={28} className="sm:w-8 sm:h-8" />,
      color: 'from-orange-500 to-orange-600',
      skills: ['n8n', 'OpenAI', 'Hugging Face', 'Workflow Automation', 'AI Integration', 'LLM APIs'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Zap size={28} className="sm:w-8 sm:h-8" />,
      color: 'from-green-500 to-green-600',
      skills: ['Git/GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'Vercel/Netlify'],
    },
  ];

  const proficiencies = [
    { name: 'React.js', level: 90 },
    { name: 'NestJS', level: 90 },
    { name: 'MongoDB', level: 88 },
    { name: 'TypeScript', level: 92 },
    { name: 'Node.js', level: 93 },
    { name: 'AI Automation', level: 85 },
  ];

  return (
    <section id="skills" className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-32 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            A comprehensive toolkit of modern technologies and frameworks that I use to build scalable, high-performance applications.
          </p>
        </div>

        {/* Skills Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-800/80"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110`}>
                  <div className="text-white">{category.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></span>
                      <span className="truncate">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Technical Proficiency</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {proficiencies.map((skill, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-sm sm:text-base">{skill.name}</span>
                  <span className="text-blue-400 font-bold text-xs sm:text-sm">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300">
            <p className="text-blue-400 font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">10+</p>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Projects Completed</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-cyan-400 font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">1+</p>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Years Experience</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-purple-400 font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">10+</p>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}