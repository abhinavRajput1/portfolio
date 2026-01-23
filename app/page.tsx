'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Terminal, Shield, Code, Search, Github, Linkedin, Mail } from 'lucide-react';
import TypingAnimation from '@/components/TypingAnimation';

const HomePage = () => {
  const typingTexts = [
    'Cybersecurity Student',
    'Ethical Hacker',
    'Digital Forensics Enthusiast',
    'Security Researcher'
  ];

  const stats = [
    { label: 'Projects Completed', value: '5+', icon: Code },
    { label: 'Certificates Earned', value: '12+', icon: Shield },
    { label: 'Vulnerabilities Found', value: '10+', icon: Search },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Abhinav Singh',
            jobTitle: 'Cybersecurity Student & Ethical Hacker',
            description: 'B.Tech Cyber/Computer Forensics student specializing in ethical hacking, penetration testing, and digital forensics',
            url: 'https://www.rajputabhinav.in',
            image: 'https://www.rajputabhinav.in/og-image.png',
            email: 'abhinavsingh14371@gmail.com',
            knowsAbout: [
              'Cybersecurity',
              'Ethical Hacking',
              'Penetration Testing',
              'Digital Forensics',
              'Network Security',
              'Kali Linux',
              'Python Programming',
              'Cryptography',
              'Security Tools',
              'Vulnerability Assessment'
            ],
            sameAs: [
              'https://github.com/abhinavRajput1',
              'https://www.linkedin.com/in/abhinav-singh-959603293/'
            ],
            affiliation: {
              '@type': 'Organization',
              name: 'Hacktify',
              url: 'https://hacktify.com'
            },
            worksFor: {
              '@type': 'Organization',
              name: 'Hacktify'
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'B.Tech in Cyber/Computer Forensics'
            }
          })
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-cyber font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Abhinav Singh
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-mono">
              <TypingAnimation texts={typingTexts} />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 font-mono leading-relaxed max-w-lg"
          >
            Exploring the world of ethical hacking, digital forensics, and cyber defense.
            Passionate about solving security challenges and protecting digital infrastructure.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects" className="cyber-button group">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="cyber-button-secondary group"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-mono text-gray-300">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/abhinavRajput1"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-neon-blue rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-singh-959603293/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-neon-blue rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:abhinavsingh14371@gmail.com"
                className="group p-3 border border-neon-blue rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-cyber font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Terminal/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="terminal-window max-w-md mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="ml-4 text-gray-400 font-mono text-sm">abhinav@cybersec:~</span>
            </div>
            <div className="space-y-2">
              <div className="text-neon-green">
                $ whoami
              </div>
              <div className="text-white">
                abhinav_singh
              </div>
              <div className="text-neon-green">
                $ cat about.txt
              </div>
              <div className="text-gray-300 space-y-1">
                <div>• B.Tech Cyber/Computer Forensics</div>
                <div>• Cybersecurity Intern @ Hacktify</div>
                <div>• Kali Linux & Penetration Testing</div>
                <div>• Python & Shell Scripting</div>
                <div>• Network Security & Cryptography</div>
              </div>
              <div className="text-neon-green">
                $ ./start_learning.sh
              </div>
              <div className="text-white animate-pulse">
                [INFO] Loading cybersecurity skills...
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-10 -right-10 w-20 h-20 border-2 border-neon-blue/30 rounded-lg rotate-45"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-neon-green/30 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neon-blue/20 rounded-full"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
