'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Target, Shield, Code, Search, Users } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      title: 'Cybersecurity Intern',
      company: 'Hacktify Cyber Security',
      duration: 'Feb 2025 - Mar 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Gained hands-on experience in cybersecurity operations and vulnerability assessment.',
      achievements: [
        'Discovered and analyzed web application vulnerabilities including SQL injection, XSS, CSRF, IDOR, and CORS misconfigurations',
        'Participated in Capture The Flag (CTF) exercises to enhance practical skills',
        'Improved practical skills in vulnerability scanning and ethical hacking techniques',
        'Collaborated with security team to identify and document security flaws',
        'Learned industry-standard penetration testing methodologies'
      ],
      technologies: ['SQL Injection', 'XSS', 'CSRF', 'IDOR', 'CORS', 'Burp Suite', 'OWASP', 'CTF'],
      icon: Shield
    }
  ];

  const skillsGained = [
    { skill: 'Web Application Security', icon: Shield, level: 85 },
    { skill: 'Vulnerability Assessment', icon: Search, level: 80 },
    { skill: 'Penetration Testing', icon: Target, level: 75 },
    { skill: 'Security Tools', icon: Code, level: 85 },
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
          <h1 className="section-title">Professional Experience</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            My journey in cybersecurity through internships and hands-on projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-lg p-8 relative"
              >
                {/* Experience Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-blue/10 rounded-lg">
                      <exp.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-cyber font-bold text-white mb-2">
                        {exp.title}
                      </h2>
                      <h3 className="text-xl font-mono text-neon-green mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-mono leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-cyber font-bold text-neon-blue mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 font-mono text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-cyber font-bold text-neon-blue mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="skill-badge"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Gained Section */}
          <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-green mb-8 text-center">
              Skills Developed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsGained.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-neon-blue" />
                    <span className="text-white font-mono font-medium">{skill.skill}</span>
                    <span className="text-neon-green font-mono text-sm ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-cyber-gray rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      className="bg-gradient-to-r from-neon-blue to-neon-green h-3 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Future Career Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-cyber font-bold text-neon-green">Short-term Goals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Complete CEH certification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Participate in more CTF competitions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Build advanced penetration testing tools</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-cyber font-bold text-neon-green">Long-term Goals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Become a certified ethical hacker (CEH)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Pursue OSCP certification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Lead security teams and mentor others</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
