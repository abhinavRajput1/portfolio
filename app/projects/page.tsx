'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Code, Network, Link } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Sub-Domain Enumeration Tool',
      description: 'Automated subdomain discovery tool using DNS and certificate transparency logs for comprehensive reconnaissance.',
      longDescription: 'A powerful reconnaissance tool designed to automate the process of subdomain enumeration. The tool leverages multiple techniques including DNS brute-forcing, certificate transparency logs, and various APIs to discover hidden subdomains. Built with Python and shell scripting, it provides comprehensive coverage for penetration testing and security assessments.',
      technologies: ['Python', 'Shell Scripting', 'DNS', 'Certificate Transparency', 'API Integration', 'Regex', 'Threading'],
      category: 'Security',
      githubUrl: 'https://github.com/abhinavRajput1/Subdomain_Enumeration',
      features: [
        'DNS brute-forcing with custom wordlists',
        'Certificate transparency log scanning',
        'Multiple API integrations for comprehensive results',
        'Concurrent processing for improved performance',
        'Customizable output formats (JSON, TXT, CSV)',
        'Integration with popular security tools',
        'Rate limiting and stealth mode capabilities'
      ],
      icon: Search
    },
    {
      id: 2,
      title: 'Phishing Checker',
      description: 'A lightweight, single-page tool to evaluate URLs and content for common phishing indicators.',
      longDescription: 'A user-friendly phishing detection tool designed to help users identify potentially malicious URLs and content. The tool uses heuristics to analyze suspicious URL patterns, domain characteristics, and content indicators to provide quick phishing assessments.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'URL Analysis', 'Heuristics', 'Mobile Responsive'],
      category: 'Security',
      githubUrl: 'https://github.com/abhinavRajput1/phising_link_identifer',
      liveUrl: 'https://phising-link-identifer.vercel.app/',
      features: [
        'Visual, friendly UI for quick checks',
        'Heuristics for suspicious URL patterns (domains, shortening, mixed chars)',
        'Fully mobile-responsive design',
        'Zero dependencies – deploy anywhere instantly',
        'Real-time URL analysis',
        'Suspicious domain pattern detection',
        'Mixed character analysis for obfuscation'
      ],
      icon: Link
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '2' },
    { label: 'Lines of Code', value: '3K+' },
    { label: 'Security Tools', value: '2' },
    { label: 'Web Applications', value: '1' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">My Projects</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            A collection of cybersecurity tools, automation scripts, and security research projects
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-cyber font-bold text-neon-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Future Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6 text-center">
            Upcoming Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-cyber font-bold text-neon-blue">In Development</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                  <span className="text-gray-300 font-mono text-sm">Advanced Malware Analysis Tool</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-2 animate-pulse"></div>
                  <span className="text-gray-300 font-mono text-sm">Cloud Security Assessment Framework</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                  <span className="text-gray-300 font-mono text-sm">IoT Device Security Scanner</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-cyber font-bold text-neon-blue">Planned</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                  <span className="text-gray-300 font-mono text-sm">Blockchain Security Analyzer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                  <span className="text-gray-300 font-mono text-sm">AI-Powered Threat Detection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                  <span className="text-gray-300 font-mono text-sm">Mobile App Security Framework</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
