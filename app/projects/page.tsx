'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Code, Network } from 'lucide-react';
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
      githubUrl: '#',
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
      title: 'Vulnerability Scanner',
      description: 'Automated web application vulnerability scanner focusing on common OWASP Top 10 vulnerabilities.',
      longDescription: 'An advanced vulnerability scanner designed to identify common web application security flaws. The scanner performs comprehensive checks for SQL injection, XSS, CSRF, and other critical vulnerabilities. Built with modular architecture allowing for easy extension and customization.',
      technologies: ['Python', 'Requests', 'BeautifulSoup', 'SQLMap', 'OWASP', 'Multi-threading', 'Report Generation'],
      category: 'Security',
      githubUrl: '#',
      features: [
        'OWASP Top 10 vulnerability detection',
        'Automated SQL injection testing',
        'Cross-site scripting (XSS) identification',
        'CSRF token validation',
        'Directory traversal detection',
        'Comprehensive reporting system',
        'Integration with Burp Suite'
      ],
      icon: Shield
    },
    {
      id: 3,
      title: 'Network Security Monitor',
      description: 'Real-time network traffic analysis tool for detecting suspicious activities and potential threats.',
      longDescription: 'A comprehensive network monitoring solution that analyzes traffic patterns, detects anomalies, and alerts on potential security threats. The tool provides real-time insights into network behavior and helps identify malicious activities.',
      technologies: ['Python', 'Scapy', 'Wireshark', 'Network Analysis', 'Real-time Processing', 'Alert System'],
      category: 'Network',
      githubUrl: '#',
      features: [
        'Real-time packet capture and analysis',
        'Anomaly detection algorithms',
        'Custom alert rules and thresholds',
        'Network topology mapping',
        'Traffic pattern analysis',
        'Integration with SIEM systems',
        'Historical data visualization'
      ],
      icon: Network
    },
    {
      id: 4,
      title: 'Security Automation Scripts',
      description: 'Collection of automated security testing scripts for common penetration testing tasks.',
      longDescription: 'A comprehensive collection of automation scripts designed to streamline common penetration testing workflows. These scripts automate repetitive tasks, improve efficiency, and ensure consistent testing procedures across different environments.',
      technologies: ['Python', 'Bash', 'Automation', 'API Integration', 'Report Generation', 'Multi-platform'],
      category: 'Automation',
      githubUrl: '#',
      features: [
        'Automated port scanning and service enumeration',
        'Password policy validation scripts',
        'Security configuration auditing',
        'Automated report generation',
        'Integration with popular security tools',
        'Cross-platform compatibility',
        'Customizable testing profiles'
      ],
      icon: Code
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '4+' },
    { label: 'Lines of Code', value: '5K+' },
    { label: 'Security Tools', value: '3+' },
    { label: 'Automation Scripts', value: '10+' },
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
