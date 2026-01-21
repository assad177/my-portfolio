'use client';

import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github: string;
  };
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Voice Calling Agent',
      description: 'Intelligent workflow automation system using n8n, OpenAI, and custom integrations for business process automation.',
      image: '/projects/automation.jpg',
      tags: ['n8n', 'OpenAI', 'Node.js', 'MongoDB', 'React','Vapi'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
    {
      id: 2,
      title: 'Full-Stack E-Commerce Platform',
      description: 'Complete MERN stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZSUyMHdlYiUyMGRlc2lnbiUyMG9uJTIwc2hvcGlmeXxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
    {
      id: 3,
      title: 'Scalable REST API Backend',
      description: 'Enterprise-grade backend using NestJS, TypeORM with PostgreSQL and JWT authentication.',
      image: '/project/api.jpeg',
      tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'JWT'],
      links: {
        demo: 'https://api.example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
    {
      id: 4,
      title: 'Real-Time Chat Application',
      description: 'Full-featured chat app with WebSocket support, user authentication, and real-time messaging capabilities.',
      image: '/projects/chat.jpg',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
    {
      id: 5,
      title: 'Website Bio Generation',
      description: 'AI-powered content generation tool using GPT-3 API with modern React frontend and Node.js backend.',
      image: '/projects/ai-content.jpg',
      tags: ['React', 'OpenAI', 'Node.js', 'TypeScript', 'Tailwind'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
    {
      id: 6,
      title: 'Blog_Site',
      description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team collaboration features.',
      image: '/projects/tasks.jpg',
      tags: ['React', 'Firebase', 'Redux', 'Tailwind', 'TypeScript'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/assadwazeer',
      },
    },
  ];

  const categories = ['all', 'React', 'Node.js', 'NestJS', 'OpenAI'];
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-32 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Explore some of my recent work showcasing full-stack development, AI integration, and scalable architecture.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-blue-500/50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 flex flex-col h-full"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-40 sm:h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <ArrowRight size={24} className="text-white" />
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">Project Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 flex-1 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 text-xs sm:text-sm rounded-lg transition-all duration-300 hover:border-blue-400 flex-1 justify-center"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-400 text-sm sm:text-base">No projects found for this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center pt-4 sm:pt-8 lg:pt-12">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
            Want to see more? Check out my GitHub for all projects
          </p>
          <a
            href="https://github.com/assadwazeer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}