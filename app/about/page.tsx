'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code, Shield, Terminal, Database, Network } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    { name: 'Python', level: 85, icon: Code },
    { name: 'Shell Scripting', level: 80, icon: Terminal },
    { name: 'C Programming', level: 75, icon: Code },
    { name: 'Kali Linux', level: 90, icon: Terminal },
    { name: 'Wireshark', level: 85, icon: Network },
    { name: 'Burp Suite', level: 80, icon: Shield },
    { name: 'Network Security', level: 85, icon: Shield },
    { name: 'Cryptography', level: 75, icon: Shield },
    { name: 'Web Pentesting', level: 80, icon: Shield },
    { name: 'SQLi', level: 85, icon: Database },
    { name: 'XSS', level: 80, icon: Shield },
    { name: 'CSRF', level: 75, icon: Shield },
    { name: 'IDOR', level: 70, icon: Shield },
  ];

  const education = [
    {
      year: '2023',
      degree: 'B.Tech in Cyber/Computer Forensics and Counterterrorism',
      institution: 'Parul Institute of Engineering & Technology',
      description: 'Specialized coursework in digital forensics, cybersecurity fundamentals, and counterterrorism studies.'
    },
    {
      year: '2022',
      degree: 'HSC Science',
      institution: 'GSEB',
      description: 'Completed higher secondary education with focus on science and mathematics.'
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
          <h1 className="section-title">About Me</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            Get to know more about my journey in cybersecurity and my passion for ethical hacking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Who I Am
              </h2>
              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                I'm Abhinav Singh, an aspiring cybersecurity professional with a B.Tech in Cyber/Computer Forensics and Counterterrorism. 
                My journey into cybersecurity began with a fascination for understanding how systems work and how they can be protected.
              </p>
              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                I love solving security challenges, analyzing vulnerabilities, and exploring malware behavior. 
                My goal is to become a skilled ethical hacker who can help organizations strengthen their security posture 
                and protect against cyber threats.
              </p>
              <p className="text-gray-300 font-mono leading-relaxed">
                When I'm not diving deep into security research, you can find me participating in CTF competitions, 
                contributing to open-source security tools, or sharing knowledge with the cybersecurity community.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-4 h-4 text-neon-blue" />
                      <span className="text-white font-mono text-sm">{skill.name}</span>
                      <span className="text-neon-green font-mono text-sm ml-auto">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-gray rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-neon-blue to-neon-green h-2 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.3)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3" />
                Education Timeline
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="timeline-item"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-neon-green font-cyber font-bold text-lg">
                          {edu.year}
                        </span>
                        <span className="text-white font-mono text-sm bg-neon-blue/10 px-3 py-1 rounded-full">
                          {edu.institution}
                        </span>
                      </div>
                      <h3 className="text-xl font-cyber font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6">
                Current Focus
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300 font-mono text-sm">
                    Preparing for industry certifications (CEH, OSCP)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300 font-mono text-sm">
                    Building practical skills through CTF competitions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300 font-mono text-sm">
                    Contributing to open-source security projects
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300 font-mono text-sm">
                    Expanding knowledge in cloud security and DevSecOps
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
