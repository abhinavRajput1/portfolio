'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, CheckCircle, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhinavsingh14371@gmail.com',
      href: 'mailto:abhinavsingh14371@gmail.com',
      color: 'text-neon-green'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/abhinavRajput1',
      href: 'https://github.com/abhinavRajput1',
      color: 'text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abhinav-singh-959603293',
      href: 'https://www.linkedin.com/in/abhinav-singh-959603293/',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, Gujarat, India',
      href: '#',
      color: 'text-neon-blue'
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
          <h1 className="section-title">Get In Touch</h1>
          <p className="text-gray-300 font-mono text-lg max-w-3xl mx-auto">
            Let's connect and discuss cybersecurity, opportunities, or any questions you might have
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-cyber-light/30 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <h3 className="text-white font-mono font-medium">{info.label}</h3>
                      <p className={`text-sm ${info.color} font-mono`}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6">
                Availability
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300 font-mono">Available for cybersecurity internships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300 font-mono">Open to collaboration on security projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300 font-mono">Interested in CTF competitions and events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300 font-mono">Available for security consultations</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-lg p-8 mt-16 text-center"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 font-mono mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing cybersecurity projects, internships, collaborations, 
            or just having a chat about the latest in security research and trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:abhinavsingh14371@gmail.com"
              className="cyber-button inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me Directly</span>
            </a>
            <a 
              href="/resume.pdf"
              download
              className="cyber-button-secondary inline-flex items-center justify-center space-x-2"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
