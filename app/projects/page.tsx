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
    },
    {
      id: 3,
      title: 'Secure Metadata Sanitization Tool (MetaClean)',
      description: 'Privacy-focused web app to strip sensitive metadata from images, documents, and media before sharing.',
      longDescription: 'MetaClean is a privacy-first metadata sanitization tool that scans files for sensitive EXIF/XMP/IPTC and document properties, shows a risk report, and safely strips them before you share. It targets GPS coordinates, author/company data, revision history, hidden media tags, and more—processing files securely with a modern React + Tailwind interface.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Metadata Sanitization', 'EXIF/IPTC/XMP', 'PDF & Office Docs', 'Audio/Video Metadata'],
      category: 'Security',
      githubUrl: 'https://github.com/abhinavRajput1/metadata-sanitisor.git',
      features: [
        'Privacy-first processing; originals never exposed publicly',
        'Comprehensive metadata removal for images (EXIF/IPTC/XMP)',
        'Document cleaning: author, company, revision history, properties',
        'Media sanitization for audio/video tags',
        'Detailed risk analysis report before cleaning',
        'Modern responsive UI built with React and Tailwind CSS',
        'Cross-platform in any modern browser'
      ],
      icon: Shield
    },
    {
      id: 4,
      title: 'CyberQuest: Cybersecurity Awareness Game',
      description: 'Gamified cybersecurity platform with missions for phishing detection, network security puzzles, and OSINT practice.',
      longDescription: 'CyberQuest is a fun, mission-based learning platform where students tackle phishing email challenges, network security puzzles, and OSINT missions in a safe environment. It uses gamification (XP, levels, badges) and progress tracking to keep learners engaged while building practical security skills.',
      technologies: [
        'React 18',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'React Router',
        'Axios',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'JWT',
        'bcryptjs'
      ],
      category: 'Security',
      githubUrl: 'https://github.com/abhinavRajput1/cyberquest.git',
      features: [
        'Phishing email challenges with real-world patterns',
        'Network security puzzles and configuration scenarios',
        'OSINT missions to understand digital footprints and privacy risks',
        'Gamification: XP, levels, and unlockable badges',
        'Progress tracking across mission categories',
        'Dark cyber-themed UI built with React + Tailwind',
        'Secure backend with JWT auth and hashed credentials'
      ],
      icon: Code
    },
    {
      id: 5,
      title: 'Deepfake Image Detector',
      description: 'Cyber-themed web app with FastAPI backend to flag synthetic (deepfake) images and show REAL vs FAKE probabilities.',
      longDescription: 'Deepfake Image Detector pairs a FastAPI backend (with optional DeepFace embeddings) and a Tailwind frontend dashboard. Users upload JPG/PNG images, get REAL vs FAKE verdicts with probability bars, and can review recent scans stored in SQLite. If DeepFace/GPU is unavailable, it falls back to a heuristic frequency+histogram detector to stay responsive.',
      technologies: [
        'FastAPI',
        'Python',
        'DeepFace (optional)',
        'SQLite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Node.js',
        'Express'
      ],
      category: 'Security',
      githubUrl: 'https://github.com/abhinavRajput1/deepfake.git',
      features: [
        'Upload JPG/PNG for on-device deepfake analysis',
        'REAL vs FAKE verdict with probability bars and color cues',
        'Loader animation and responsive dark UI',
        'SQLite-backed history endpoint for recent scans',
        'Sample images included for quick verification',
        'Fallback heuristic detector when DeepFace/GPU is unavailable',
        'Clean project split: FastAPI backend + static Tailwind dashboard'
      ],
      icon: Shield
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '5' },
    { label: 'Lines of Code', value: '6K+' },
    { label: 'Security Tools', value: '5' },
    { label: 'Web Applications', value: '4' },
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
