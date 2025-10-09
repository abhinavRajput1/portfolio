'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Calendar } from 'lucide-react';
import CertificateCard from '@/components/CertificateCard';

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      title: 'Cybersecurity Foundation',
      issuer: 'Palo Alto Networks',
      date: 'August 2025',
      description: 'Comprehensive foundation course covering cybersecurity fundamentals, threat landscape, and security best practices. This certification validates understanding of core security concepts and modern security architectures.',
      skills: ['Cybersecurity Fundamentals', 'Threat Intelligence', 'Security Architecture', 'Risk Management', 'Incident Response'],
      credentialId: 'PA-CYB-FND-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/palo-alto-foundation.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Forage',
      date: 'July 2025',
      description: 'Hands-on job simulation providing real-world experience in cybersecurity analysis tasks. Completed practical exercises in threat detection, vulnerability assessment, and security monitoring.',
      skills: ['Threat Analysis', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Investigation', 'Risk Assessment'],
      credentialId: 'FORAGE-CYB-ANALYST-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/forage-analyst.jpg'
    },
    {
      id: 3,
      title: 'Cryptography & Network Security',
      issuer: 'NPTEL',
      date: 'May 2025',
      description: 'Advanced course covering cryptographic algorithms, network security protocols, and secure communication systems. Explored both theoretical foundations and practical implementations.',
      skills: ['Cryptographic Algorithms', 'Network Protocols', 'Public Key Infrastructure', 'Digital Signatures', 'Secure Communications'],
      credentialId: 'NPTEL-CRYPT-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/nptel-cryptography.jpg'
    },
    {
      id: 4,
      title: 'Diving Deep in Cyber Security',
      issuer: 'Null Vadodara',
      date: 'November 2024',
      description: 'Intensive cybersecurity workshop covering advanced penetration testing techniques, malware analysis, and security research methodologies. Hands-on labs and real-world scenarios.',
      skills: ['Penetration Testing', 'Malware Analysis', 'Security Research', 'Vulnerability Exploitation', 'Forensic Analysis'],
      credentialId: 'NULL-DEEP-CYB-2024',
      credentialUrl: '#',
      imageUrl: '/certificates/null-vadodara.jpg'
    },
    {
      id: 5,
      title: 'Cloud Computing',
      issuer: 'EC-Council',
      date: 'Ongoing',
      description: 'Comprehensive cloud security certification covering cloud architectures, security models, and best practices for securing cloud environments. Focus on AWS, Azure, and Google Cloud platforms.',
      skills: ['Cloud Security', 'AWS Security', 'Azure Security', 'Cloud Architecture', 'DevSecOps'],
      credentialId: 'ECC-CLOUD-2024',
      credentialUrl: '#',
      imageUrl: '/certificates/ec-council-cloud.jpg'
    }
  ];

  const stats = [
    { label: 'Certificates Earned', value: '5+', icon: Award },
    { label: 'Skills Mastered', value: '25+', icon: Star },
    { label: 'Organizations', value: '5', icon: Trophy },
    { label: 'Years Learning', value: '2+', icon: Calendar },
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
          <h1 className="section-title">Certifications & Achievements</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            My journey in cybersecurity through formal certifications and continuous learning
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
              <stat.icon className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-3xl font-cyber font-bold text-neon-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-green mb-8 text-center">
            Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-cyber font-bold text-neon-blue mb-4">
                  Certification Roadmap
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                    <span className="text-gray-300 font-mono text-sm">Completed: Foundation Certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-mono text-sm">In Progress: Cloud Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-400 font-mono text-sm">Planned: CEH (Certified Ethical Hacker)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-400 font-mono text-sm">Future: OSCP (Offensive Security)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-cyber font-bold text-neon-blue mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Completed 5+ professional certifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Mastered 25+ cybersecurity skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Active in cybersecurity community</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Continuous learning and skill development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="glass-effect rounded-lg p-8 mt-8"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6 text-center">
            Upcoming Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-lg font-cyber font-bold text-white">CEH</h3>
              <p className="text-gray-400 font-mono text-sm">Certified Ethical Hacker</p>
              <span className="text-xs text-neon-green font-mono">Q2 2025</span>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-lg font-cyber font-bold text-white">OSCP</h3>
              <p className="text-gray-400 font-mono text-sm">Offensive Security Certified Professional</p>
              <span className="text-xs text-neon-blue font-mono">Q3 2025</span>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-cyber font-bold text-white">CISSP</h3>
              <p className="text-gray-400 font-mono text-sm">Certified Information Systems Security Professional</p>
              <span className="text-xs text-purple-400 font-mono">Q4 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesPage;
