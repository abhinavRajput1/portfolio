'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/abhinavRajput1',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhinav-singh-959603293/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:abhinavsingh14371@gmail.com',
      icon: Mail,
      color: 'hover:text-neon-green'
    }
  ];

  return (
    <footer className="glass-effect border-t border-neon-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Terminal className="w-8 h-8 text-neon-blue" />
              <span className="text-xl font-cyber font-bold text-white">
                Abhinav Singh
              </span>
            </motion.div>
            <p className="text-gray-400 font-mono text-sm">
              Cybersecurity Student & Forensics Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-cyber font-bold text-neon-blue">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-mono text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-cyber font-bold text-neon-blue">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'Email' ? '_self' : '_blank'}
                  rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                  className={`p-2 border border-neon-blue/30 rounded-lg text-neon-blue transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-neon-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 font-mono text-sm">
            © {currentYear} Abhinav Singh. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
