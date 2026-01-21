'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'assadwazeer0@gmail.com',
      link: 'mailto:assadwazeer0@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      info: '+92 3459617702',
      link: 'tel:+923459617702',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      info: 'Abbottabad Pakistan',
      link: '#',
    },
  ];

  const socials = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      link: 'https://github.com/assad177/',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/assadwazeer',
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      link: 'https://twitter.com/assadwazeer',
    },
  ];

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-800 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-32 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Have a project in mind? Let's discuss and turn your ideas into reality. I'm always open to exciting opportunities.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Left - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-slate-700/40 border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-blue-500/50 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm hover:text-blue-400 transition-colors">
                      {item.info}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full p-4 sm:p-6 bg-slate-700/40 border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-blue-500/50 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex flex-col items-center gap-2 sm:gap-3"
                  >
                    <div className="text-blue-400 group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-slate-700/40 border border-slate-700/50 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 hover:border-blue-500/50 hover:bg-slate-700/60 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white font-semibold text-sm sm:text-base">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-gray-500 rounded-lg sm:rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white font-semibold text-sm sm:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-gray-500 rounded-lg sm:rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-white font-semibold text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-gray-500 rounded-lg sm:rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-white font-semibold text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-gray-500 rounded-lg sm:rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-xs sm:text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-xs sm:text-sm">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-blue-600/50 disabled:to-cyan-600/50 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}