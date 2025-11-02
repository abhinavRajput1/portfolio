'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Clock } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'AWS User Groups Vadodara Community Day 2025',
      subtitle: 'Cloud Computing, Generative AI & DevOps Innovation',
      date: '2025',
      type: 'Community Event',
      location: 'Vadodara, India',
      description: 'Attended the AWS User Groups Vadodara Community Day 2025, an immersive event dedicated to exploring the latest innovations in Cloud Computing, Generative AI, DevOps, and Software Development Lifecycle. The day was filled with deep technical sessions, inspiring talks, and networking opportunities with industry leaders and AWS experts.',
      topics: [
        'AWS Services & Cloud-Native Architectures',
        'Generative AI Technologies',
        'DevOps Best Practices',
        'Software Development Lifecycle',
        'Cloud Computing Innovations',
        'Industry-Scale Problem Solving'
      ],
      achievements: [
        'Deep dive into AWS services & cloud-native architectures',
        'Real-world insights from industry experts on solving problems at scale',
        'Hands-on learning through community-driven sessions',
        'Inspiration to build, innovate, and collaborate within the AWS ecosystem',
        'Networked with AWS experts and community leaders',
        'Gained practical knowledge in Generative AI and DevOps'
      ],
      icon: Users,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Null Vadodara Workshop',
      subtitle: 'Diving Deep into Cybersecurity',
      date: 'November 2024',
      type: 'Workshop',
      location: 'Vadodara, Gujarat',
      description: 'Comprehensive cybersecurity workshop covering advanced penetration testing techniques, malware analysis, and security research methodologies. Hands-on labs and real-world scenarios.',
      topics: [
        'Advanced Penetration Testing',
        'Malware Analysis Techniques',
        'Security Research Methodologies',
        'Vulnerability Exploitation',
        'Forensic Analysis',
        'Incident Response'
      ],
      achievements: [
        'Completed intensive hands-on labs',
        'Participated in security challenges',
        'Networked with cybersecurity professionals',
        'Gained practical experience in real-world scenarios'
      ],
      icon: Award,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Cybersecurity Seminar',
      subtitle: 'Future of Digital Security',
      date: 'March 2025',
      type: 'Seminar',
      location: 'Parul University, Vadodara',
      description: 'Academic seminar focusing on emerging trends in cybersecurity, AI in security, and the future landscape of digital threats and defenses.',
      topics: [
        'AI in Cybersecurity',
        'Quantum Computing Security',
        'IoT Security Challenges',
        'Cloud Security Trends',
        'Zero Trust Architecture'
      ],
      achievements: [
        'Attended expert presentations',
        'Participated in panel discussions',
        'Connected with industry professionals',
        'Gained insights into future security trends'
      ],
      icon: Users,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'CTF Competition',
      subtitle: 'Capture The Flag - Security Challenge',
      date: 'January 2025',
      type: 'Competition',
      location: 'Online',
      description: 'Participated in an online Capture The Flag competition testing various cybersecurity skills including web exploitation, cryptography, reverse engineering, and forensics.',
      topics: [
        'Web Application Security',
        'Cryptography Challenges',
        'Reverse Engineering',
        'Digital Forensics',
        'Network Security',
        'Binary Exploitation'
      ],
      achievements: [
        'Solved multiple challenge categories',
        'Improved practical hacking skills',
        'Learned new attack techniques',
        'Enhanced problem-solving abilities'
      ],
      icon: Award,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Hackathon',
      subtitle: 'Build Secure Applications',
      date: 'May 2025',
      type: 'Hackathon',
      location: 'Ahmedabad, Gujarat',
      description: '48-hour hackathon focused on building secure applications with emphasis on security-first development practices and implementing robust security measures.',
      topics: [
        'Secure Coding Practices',
        'API Security',
        'Authentication & Authorization',
        'Data Protection',
        'Security Testing',
        'DevSecOps Integration'
      ],
      achievements: [
        'Built secure web application',
        'Implemented security best practices',
        'Collaborated with diverse team',
        'Presented solution to judges'
      ],
      icon: Users,
      status: 'planned'
    }
  ];

  const eventTypes = {
    'Workshop': 'bg-neon-green/20 text-neon-green border-neon-green/30',
    'Seminar': 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
    'Competition': 'bg-purple-400/20 text-purple-400 border-purple-400/30',
    'Hackathon': 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
    'Community Event': 'bg-orange-400/20 text-orange-400 border-orange-400/30'
  };

  const statusColors = {
    'completed': 'bg-green-500/20 text-green-400 border-green-400/30',
    'upcoming': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
    'planned': 'bg-gray-500/20 text-gray-400 border-gray-400/30'
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
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
          <h1 className="section-title">Events & Activities</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            My participation in cybersecurity events, workshops, and competitions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < events.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-neon-blue/20"></div>
              )}

              {/* Event Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-8 ml-16 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-8 w-8 h-8 bg-neon-blue rounded-full border-4 border-cyber-dark flex items-center justify-center">
                  <event.icon className="w-4 h-4 text-white" />
                </div>

                {/* Event Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-cyber font-bold text-white">
                        {event.title}
                      </h2>
                      <span className={`px-3 py-1 text-xs font-mono border rounded-full ${eventTypes[event.type as keyof typeof eventTypes]}`}>
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 text-xs font-mono border rounded-full ${statusColors[event.status as keyof typeof statusColors]}`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-mono text-neon-green mb-4">
                      {event.subtitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{event.location}</span>
                      </div>
                      {event.status === 'completed' && (
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span className="font-mono">Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-mono leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Topics Covered */}
                <div className="mb-6">
                  <h4 className="text-lg font-cyber font-bold text-neon-blue mb-3">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-cyber-light border border-neon-blue/30 rounded-full text-sm font-mono text-neon-blue"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-cyber font-bold text-neon-green mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 font-mono text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Event Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-neon-blue/20">
                  <div className="text-sm text-gray-400 font-mono">
                    {event.status === 'completed' && '✓ Successfully completed'}
                    {event.status === 'upcoming' && '⏰ Upcoming event'}
                    {event.status === 'planned' && '📅 Planned for future'}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-green mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-cyber font-bold text-neon-blue">Confirmed Events</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-neon-blue" />
                  <div>
                    <span className="text-white font-mono">Cybersecurity Seminar - Future of Digital Security</span>
                    <div className="text-gray-400 text-sm font-mono">March 2025</div>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-neon-green" />
                  <div>
                    <span className="text-white font-mono">Security Hackathon - Build Secure Apps</span>
                    <div className="text-gray-400 text-sm font-mono">May 2025</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-cyber font-bold text-neon-blue">Interested Events</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-neon-green" />
                  <div>
                    <span className="text-white font-mono">DEF CON Conference</span>
                    <div className="text-gray-400 text-sm font-mono">TBD 2025</div>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-neon-blue" />
                  <div>
                    <span className="text-white font-mono">Black Hat Security Conference</span>
                    <div className="text-gray-400 text-sm font-mono">TBD 2025</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;
