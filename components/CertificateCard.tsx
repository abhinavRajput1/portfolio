'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, X, Download } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        whileHover={{ y: -5, scale: 1.02 }}
        className="certificate-card cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 bg-neon-green/10 rounded-lg flex-shrink-0">
            <Award className="w-6 h-6 text-neon-green" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-cyber font-bold text-white mb-1">
              {certificate.title}
            </h3>
            <p className="text-neon-blue font-mono text-sm mb-2">
              {certificate.issuer}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-mono">{certificate.date}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
          {certificate.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-cyber-light border border-neon-green/30 rounded text-xs font-mono text-neon-green"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="px-2 py-1 bg-cyber-light border border-neon-green/30 rounded text-xs font-mono text-gray-400">
              +{certificate.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono">
            Click to view details
          </span>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 border border-neon-green/30 rounded-lg text-neon-green hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
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
                  <div className="p-4 bg-neon-green/10 rounded-lg">
                    <Award className="w-8 h-8 text-neon-green" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cyber font-bold text-white mb-2">
                      {certificate.title}
                    </h2>
                    <p className="text-neon-blue font-mono text-lg">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{certificate.date}</span>
                      </div>
                      {certificate.credentialId && (
                        <span className="text-xs text-gray-400 font-mono">
                          ID: {certificate.credentialId}
                        </span>
                      )}
                    </div>
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
                  {certificate.description}
                </p>

                <div>
                  <h3 className="text-lg font-cyber font-bold text-neon-green mb-3">
                    Skills & Knowledge Gained
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyber-light border border-neon-green/30 rounded-full text-sm font-mono text-neon-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button-secondary flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Verify Credential</span>
                    </a>
                  )}
                  {certificate.imageUrl && (
                    <button className="cyber-button flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download Certificate</span>
                    </button>
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

export default CertificateCard;
