'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Shield, Search, Zap, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  icon: React.ElementType;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    'Security': 'border-neon-green text-neon-green',
    'Automation': 'border-neon-blue text-neon-blue',
    'Web': 'border-purple-400 text-purple-400',
    'Network': 'border-yellow-400 text-yellow-400',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5 }}
        className="project-card cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-neon-blue/10 rounded-lg">
              <project.icon className="w-6 h-6 text-neon-blue" />
            </div>
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-1">
                {project.title}
              </h3>
              <span className={`inline-block px-3 py-1 text-xs font-mono border rounded-full ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-cyber-light border border-neon-blue/30 rounded text-xs font-mono text-neon-blue"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-cyber-light border border-neon-blue/30 rounded text-xs font-mono text-gray-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono">
            Click to view details
          </span>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 border border-neon-green/30 rounded-lg text-neon-green hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neon-blue/10 rounded-lg">
                    <project.icon className="w-8 h-8 text-neon-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cyber font-bold text-white">
                      {project.title}
                    </h2>
                    <span className={`inline-block px-3 py-1 text-sm font-mono border rounded-full ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-gray-300 font-mono leading-relaxed">
                  {project.longDescription}
                </p>

                <div>
                  <h3 className="text-lg font-cyber font-bold text-neon-green mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 font-mono text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-cyber font-bold text-neon-blue mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-light border border-neon-blue/30 rounded-full text-sm font-mono text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button-secondary flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
