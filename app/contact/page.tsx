'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Phone, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

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
      value: 'github.com/abhinav-singh',
      href: '#',
      color: 'text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abhinav-singh',
      href: '#',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual EmailJS or Formspree integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, always show success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
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

            {/* Response Time */}
            <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Response Time
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Email Response</span>
                  <span className="text-neon-green font-mono font-bold">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Project Inquiries</span>
                  <span className="text-neon-blue font-mono font-bold">Within 48 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Urgent Matters</span>
                  <span className="text-neon-green font-mono font-bold">Same day</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-cyber font-bold text-neon-green mb-6">
              Send Message
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white font-mono focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white font-mono focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white font-mono focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white font-mono focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, question, or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cyber-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-neon-green font-mono text-sm"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 font-mono text-sm"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
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
              <Send className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
