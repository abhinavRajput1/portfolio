'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Shield, Network, Database, Lock, Target, Brain } from 'lucide-react';

const StudiesPage = () => {
  const academicMilestones = [
    {
      year: '2023',
      title: 'B.Tech Graduation',
      institution: 'Parul Institute of Engineering & Technology',
      degree: 'Cyber/Computer Forensics and Counterterrorism',
      description: 'Completed comprehensive program covering digital forensics, cybersecurity fundamentals, and counterterrorism studies.',
      courses: [
        'Digital Forensics Fundamentals',
        'Cybersecurity Principles',
        'Network Security',
        'Cryptography',
        'Incident Response',
        'Counterterrorism Studies'
      ],
      achievements: [
        'Graduated with specialization in cybersecurity',
        'Completed final year project on digital forensics',
        'Participated in cybersecurity research',
        'Maintained strong academic performance'
      ],
      icon: Shield
    },
    {
      year: '2022',
      title: 'Higher Secondary Education',
      institution: 'GSEB',
      degree: 'HSC Science',
      description: 'Completed higher secondary education with focus on science and mathematics, laying foundation for engineering studies.',
      courses: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science'
      ],
      achievements: [
        'Strong foundation in mathematics and science',
        'Developed analytical thinking skills',
        'Completed computer science coursework',
        'Prepared for engineering entrance'
      ],
      icon: BookOpen
    }
  ];

  const keyCoursework = [
    {
      category: 'Programming & Development',
      courses: [
        { name: 'C Programming', level: 85, icon: Code },
        { name: 'Python', level: 90, icon: Code },
        { name: 'Shell Scripting', level: 80, icon: Code },
        { name: 'Data Structures', level: 75, icon: Code }
      ]
    },
    {
      category: 'Cybersecurity & Forensics',
      courses: [
        { name: 'Kali Linux', level: 90, icon: Shield },
        { name: 'Digital Forensics', level: 85, icon: Shield },
        { name: 'Penetration Testing', level: 80, icon: Target },
        { name: 'Malware Analysis', level: 75, icon: Shield }
      ]
    },
    {
      category: 'Network & Systems',
      courses: [
        { name: 'Network Security', level: 85, icon: Network },
        { name: 'Wireshark', level: 85, icon: Network },
        { name: 'System Administration', level: 80, icon: Network },
        { name: 'Database Security', level: 75, icon: Database }
      ]
    },
    {
      category: 'Security Tools & Techniques',
      courses: [
        { name: 'Burp Suite', level: 80, icon: Target },
        { name: 'Metasploit', level: 75, icon: Target },
        { name: 'OWASP Top 10', level: 85, icon: Lock },
        { name: 'Cryptography', level: 80, icon: Lock }
      ]
    }
  ];

  const currentLearning = [
    {
      title: 'Preparing for CEH Certification',
      description: 'Studying for Certified Ethical Hacker certification to validate penetration testing skills.',
      progress: 60,
      timeline: 'Q2 2025',
      status: 'in-progress'
    },
    {
      title: 'Advanced Web Application Security',
      description: 'Deepening knowledge in web security vulnerabilities and exploitation techniques.',
      progress: 70,
      timeline: 'Ongoing',
      status: 'in-progress'
    },
    {
      title: 'Cloud Security Fundamentals',
      description: 'Learning AWS, Azure, and Google Cloud security best practices and architectures.',
      progress: 40,
      timeline: 'Q3 2025',
      status: 'in-progress'
    },
    {
      title: 'OSCP Preparation',
      description: 'Building hands-on skills for Offensive Security Certified Professional certification.',
      progress: 25,
      timeline: 'Q3 2025',
      status: 'planned'
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
          <h1 className="section-title">Learning Journey</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            My academic journey, key coursework, and continuous learning in cybersecurity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Academic Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-8 text-center">
              Academic Milestones
            </h2>
            {academicMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-lg p-8 relative"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-neon-blue/10 rounded-lg flex-shrink-0">
                    <milestone.icon className="w-8 h-8 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-cyber font-bold text-white mb-2">
                          {milestone.title} - {milestone.year}
                        </h3>
                        <h4 className="text-xl font-mono text-neon-green mb-2">
                          {milestone.institution}
                        </h4>
                        <p className="text-gray-400 font-mono text-sm">
                          {milestone.degree}
                        </p>
                      </div>
                      <span className="text-neon-blue font-cyber font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>

                    <p className="text-gray-300 font-mono leading-relaxed mb-6">
                      {milestone.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-cyber font-bold text-neon-blue mb-3">
                          Key Courses
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {milestone.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-cyber-light border border-neon-blue/30 rounded-full text-sm font-mono text-neon-blue"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-lg font-cyber font-bold text-neon-green mb-3">
                          Achievements
                        </h5>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 font-mono text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Coursework */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-green mb-8 text-center">
              Key Coursework & Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyCoursework.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <h3 className="text-lg font-cyber font-bold text-neon-blue mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.courses.map((course, courseIndex) => (
                      <motion.div
                        key={course.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: courseIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-3">
                          <course.icon className="w-5 h-5 text-neon-blue" />
                          <span className="text-white font-mono font-medium">{course.name}</span>
                          <span className="text-neon-green font-mono text-sm ml-auto">{course.level}%</span>
                        </div>
                        <div className="w-full bg-cyber-gray rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.level}%` }}
                            transition={{ duration: 1, delay: courseIndex * 0.1 + 0.5 }}
                            className="bg-gradient-to-r from-neon-blue to-neon-green h-2 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.3)]"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Learning Goals */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-8 text-center">
              Current Learning Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentLearning.map((goal, goalIndex) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: goalIndex * 0.1 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-cyber font-bold text-white mb-2">
                      {goal.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-mono border rounded-full ${
                      goal.status === 'in-progress' 
                        ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'
                        : 'bg-gray-500/20 text-gray-400 border-gray-400/30'
                    }`}>
                      {goal.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                    {goal.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 font-mono">Progress</span>
                      <span className="text-sm text-neon-green font-mono">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-cyber-gray rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: goalIndex * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-neon-blue to-neon-green h-2 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.3)]"
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 font-mono">Timeline:</span>
                      <span className="text-neon-blue font-mono">{goal.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6 text-center">
              Learning Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-cyber font-bold text-neon-blue">Approach to Learning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-neon-blue mt-1" />
                    <span className="text-gray-300 font-mono text-sm">
                      Hands-on practice with real-world scenarios and lab environments
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-neon-green mt-1" />
                    <span className="text-gray-300 font-mono text-sm">
                      Continuous skill assessment through CTF competitions and challenges
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-neon-blue mt-1" />
                    <span className="text-gray-300 font-mono text-sm">
                      Staying updated with latest security trends and threat landscapes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-cyber font-bold text-neon-blue">Future Learning Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">
                      Obtain industry-recognized certifications (CEH, OSCP, CISSP)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">
                      Master cloud security and DevSecOps practices
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">
                      Contribute to open-source security projects and research
                    </span>
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

export default StudiesPage;
