'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Calendar } from 'lucide-react';
import CertificateCard from '@/components/CertificateCard';

const CertificatesPage = () => {
  const certificates = [
    // ── March 2026 ─────────────────────────────────────────────────────────
    {
      id: 1,
      title: 'Digital Forensics & Incident Investigation',
      issuer: 'Red Team Leaders',
      date: 'March 2026',
      description: 'Certification validating expertise in digital forensics techniques and incident investigation methodologies. Covers evidence acquisition, disk and memory forensics, log analysis, chain of custody, and structured incident investigation procedures used in real-world cyber investigations.',
      skills: [
        'Digital Forensics',
        'Incident Investigation',
        'Evidence Acquisition',
        'Disk Forensics',
        'Memory Forensics',
        'Log Analysis',
        'Chain of Custody',
        'Incident Response',
        'Forensic Reporting',
        'Cyber Investigation Procedures'
      ],
      credentialId: '034e82f19440438d',
      credentialUrl: 'https://courses.redteamleaders.com/completion/034e82f19440438d',
      imageUrl: '/certificates/digital-forensics-redteamleaders.pdf',
      tags: ['DigitalForensics', 'IncidentInvestigation', 'CyberForensics', 'IncidentResponse', 'RedTeamLeaders']
    },
    {
      id: 2,
      title: 'Malware Analysis Introduction v1',
      issuer: 'Red Team Leaders',
      date: 'March 2026',
      description: 'Introductory certification in malware analysis covering static and dynamic analysis techniques, reverse engineering fundamentals, malware behavior profiling, and sandbox analysis. Provides foundational skills required for analyzing malicious software and understanding attacker tooling.',
      skills: [
        'Malware Analysis',
        'Static Analysis',
        'Dynamic Analysis',
        'Reverse Engineering',
        'Sandbox Analysis',
        'Malware Behavior Profiling',
        'Threat Intelligence',
        'Indicator of Compromise (IOC) Extraction',
        'Disassembly Techniques',
        'Malware Classification'
      ],
      credentialId: '68374c8e2a4ac2fa',
      credentialUrl: 'https://courses.redteamleaders.com/completion/68374c8e2a4ac2fa',
      imageUrl: '/certificates/malware-analysis-redteamleaders.pdf',
      tags: ['MalwareAnalysis', 'ReverseEngineering', 'ThreatIntelligence', 'StaticAnalysis', 'DynamicAnalysis', 'RedTeamLeaders']
    },
    // ── February 2026 ──────────────────────────────────────────────────────
    {
      id: 3,
      title: 'Cybersecurity Fundamentals and Insights',
      issuer: 'Red Team Leaders',
      date: 'February 2026',
      description: 'Certification covering core cybersecurity concepts including network security fundamentals, cybersecurity frameworks, threat modelling, and security best practices. Provides comprehensive insights into the cybersecurity landscape and establishes a solid foundation for advanced security studies.',
      skills: [
        'Network Security Fundamentals',
        'Cybersecurity Frameworks',
        'Threat Modelling',
        'Security Best Practices',
        'Security Architecture',
        'Risk Assessment',
        'Vulnerability Management',
        'Security Policies',
        'Defense in Depth',
        'Cyber Threat Landscape'
      ],
      imageUrl: '/certificates/cybersec-fundamentals-redteamleaders.pdf',
      tags: ['NetworkSecurity', 'CybersecurityFrameworks', 'SecurityFundamentals', 'ThreatModelling', 'RedTeamLeaders']
    },
    {
      id: 4,
      title: 'Certificate of Participation \u2013 Digital CyberHunt CTF',
      issuer: 'Unstop',
      date: 'February 2026',
      description: 'Certificate of participation in the Online Round of the Digital CyberHunt Capture The Flag (CTF) competition hosted on Unstop. Demonstrates active participation in competitive cybersecurity challenges covering areas such as cryptography, web exploitation, OSINT, reverse engineering, and forensics.',
      skills: [
        'CTF Competitions',
        'Cryptography Challenges',
        'Web Exploitation',
        'OSINT',
        'Reverse Engineering',
        'Digital Forensics',
        'Problem Solving',
        'Competitive Cybersecurity',
        'Capture The Flag',
        'Ethical Hacking'
      ],
      credentialId: '760fcfcb-5062-4152-8c7f-8256be3352c3',
      credentialUrl: 'https://unstop.com/certificate/760fcfcb-5062-4152-8c7f-8256be3352c3',
      imageUrl: '/certificates/cyberhunt-ctf-unstop.pdf',
      tags: ['CTF', 'CyberHunt', 'Unstop', 'CaptureTheFlag', 'CompetitiveSecurity', 'EthicalHacking']
    },
    // ── January 2026 ───────────────────────────────────────────────────────
    {
      id: 5,
      title: 'Certified Threat Intelligence & Governance Analyst (CTIGA)',
      issuer: 'Red Team Leaders',
      date: 'January 2026',
      description: 'The Certified Threat Intelligence & Governance Analyst (CTIGA) certification validates expertise in threat intelligence analysis, cyber threat hunting, and security governance frameworks. This certification demonstrates proficiency in collecting, analyzing, and operationalizing threat intelligence to protect organizations from advanced cyber threats. It covers threat actor profiling, intelligence lifecycle management, risk assessment methodologies, and implementing governance frameworks for enterprise security operations.',
      skills: [
        'Threat Intelligence Analysis',
        'Cyber Threat Hunting',
        'Security Governance',
        'Risk Management',
        'Threat Actor Profiling',
        'Intelligence Lifecycle Management',
        'Security Operations',
        'Incident Response',
        'Vulnerability Assessment',
        'Security Framework Implementation'
      ],
      credentialId: '1efb37fe60619778',
      credentialUrl: 'https://courses.redteamleaders.com/exam-completion/1efb37fe60619778',
      imageUrl: '/certificates/ctiga-redteamleaders.pdf',
      tags: ['ThreatIntelligence', 'CyberSecurity', 'Governance', 'ThreatHunting', 'RiskManagement', 'SecurityOperations']
    },
    {
      id: 6,
      title: 'ICS/Scada Cybersecurity',
      issuer: 'Red Team Leaders',
      date: 'January 2026',
      description: 'The ICS/SCADA Cybersecurity certification provides specialized training in securing Industrial Control Systems (ICS) and Supervisory Control and Data Acquisition (SCADA) systems that are critical to modern infrastructure. This certification validates expertise in identifying vulnerabilities in operational technology (OT) environments, implementing security controls for critical infrastructure, and protecting industrial systems from cyber threats.',
      skills: [
        'ICS/SCADA Security',
        'Industrial Control Systems',
        'Operational Technology (OT)',
        'Critical Infrastructure Protection',
        'SCADA Network Architecture',
        'OT Threat Intelligence',
        'Industrial Protocols Security',
        'Network Segmentation',
        'ICS Vulnerability Assessment',
        'OT Incident Response'
      ],
      credentialId: 'a8985255162e71e4',
      credentialUrl: 'https://courses.redteamleaders.com/completion/a8985255162e71e4',
      imageUrl: '/certificates/ics-scada-redteamleaders.pdf',
      tags: ['ICS', 'SCADA', 'CriticalInfrastructure', 'OT', 'IndustrialSecurity', 'CyberSecurity']
    },
    // ── December 2025 ──────────────────────────────────────────────────────
    {
      id: 7,
      title: 'ISO/IEC 27001:2022 Lead Auditor',
      issuer: 'Mastermind',
      date: 'December 2025',
      description: 'Lead Auditor certification for ISO/IEC 27001:2022 demonstrating capability to plan, conduct, report, and follow up on Information Security Management System (ISMS) audits in alignment with ISO/IEC 27006 requirements and GRC best practices.',
      skills: [
        'Audit Principles',
        'Audit Process',
        'Governance, Risk Management, and Compliance (GRC)',
        'Information Security',
        'ISO/IEC 27006',
        'ISO/IEC 27001:2022',
        'ISMS Auditing',
        'Risk Assessment',
        'Compliance Reporting',
        'Corrective Actions'
      ],
      credentialId: 'gwoklqorjt',
      credentialUrl: 'https://learn.mastermindassurance.com/certificates/gwoklqorjt',
      imageUrl: '/certificates/iso-27001-lead-auditor.pdf',
      tags: ['ISO27001', 'LeadAuditor', 'GRC', 'InformationSecurity', 'Compliance', 'Audit']
    },
    {
      id: 8,
      title: 'Certificate of Participation \u2013 niteCTF 2025',
      issuer: 'Unstop',
      date: 'December 2025',
      description: 'Certificate of participation in niteCTF 2025, a competitive Capture The Flag event hosted on Unstop. Demonstrates active engagement in cybersecurity challenges spanning cryptography, web exploitation, binary exploitation, reverse engineering, OSINT, and forensics.',
      skills: [
        'CTF Competitions',
        'Cryptography Challenges',
        'Web Exploitation',
        'Binary Exploitation',
        'Reverse Engineering',
        'OSINT',
        'Digital Forensics',
        'Problem Solving',
        'Competitive Cybersecurity',
        'Ethical Hacking'
      ],
      credentialId: 'dc4e8bd3-19c9-4be5-ba73-ba13d9d817cf',
      credentialUrl: 'https://unstop.com/certificate/dc4e8bd3-19c9-4be5-ba73-ba13d9d817cf',
      imageUrl: '/certificates/nitectf-2025-unstop.pdf',
      tags: ['CTF', 'niteCTF', 'Unstop', 'CaptureTheFlag', 'CompetitiveSecurity', 'EthicalHacking']
    },
    {
      id: 9,
      title: 'Introduction to Linux LFS101',
      issuer: 'The Linux Foundation',
      date: 'December 2025',
      description: 'Entry-level certification from The Linux Foundation covering Linux fundamentals, system navigation, shell basics, package management, and foundational administration concepts for working confidently in Linux environments.',
      skills: [
        'Linux Fundamentals',
        'Shell Navigation',
        'Package Management',
        'File Permissions',
        'System Services',
        'User & Group Management',
        'Basic Networking',
        'Command-Line Tools',
        'Filesystem Operations',
        'Process Management'
      ],
      credentialId: 'LF-trnqb1lrcr',
      credentialUrl: 'https://trainingportal.linuxfoundation.org/learn/certificates/introduction-to-linux-lfs101?id=f8080e1b-0f79-4bd2-95df-0a1e2f7734ba',
      imageUrl: '/certificates/linux-foundation-lfs101.pdf',
      tags: ['Linux', 'TheLinuxFoundation', 'SysAdmin', 'DevOps', 'CLI', 'Fundamentals']
    },
    // ── November 2025 ──────────────────────────────────────────────────────
    {
      id: 10,
      title: 'Gemini Certified University Student',
      issuer: 'Google',
      date: 'November 2025',
      expirationDate: 'November 2028',
      description: 'Certification from Google demonstrating proficiency with Gemini for academic and applied projects, including LLM fundamentals, prompt engineering, responsible AI, and building AI-powered solutions with Google tooling.',
      skills: [
        'Large Language Models',
        'Prompt Engineering',
        'Responsible AI',
        'Generative AI Applications',
        'Model Evaluation',
        'AI Safety & Governance',
        'Google AI Ecosystem',
        'Data Preparation',
        'Use-Case Design',
        'AI Solution Delivery'
      ],
      credentialId: '165924863',
      credentialUrl: 'https://edu.google.accredible.com/64dcba58-9ce6-4064-89ab-465b1a7f35ae',
      imageUrl: '/certificates/google-gemini-university.pdf',
      tags: ['Gemini', 'Google', 'AI', 'LLM', 'ResponsibleAI', 'PromptEngineering']
    },
    {
      id: 11,
      title: 'Network Security Practitioner (CNSP)',
      issuer: 'The SecOps Group (Creators of PentestingExams.com)',
      date: 'November 2025',
      description: 'Certification validating practical competence in network security fundamentals including secure network architectures, DNS hardening, intrusion detection and prevention, and applied defensive techniques.',
      skills: [
        'Network Security',
        'Domain Name System (DNS)',
        'Secure Network Architecture',
        'Intrusion Detection & Prevention',
        'Firewall Policies',
        'Traffic Analysis',
        'Threat Mitigation',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response'
      ],
      credentialId: '10764465',
      credentialUrl: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXe5xYPhEdtTiOkz4JnYrXCsOWxLoMoXm/rVUtsk2mDiYkRrefMtPu3aGmdHaq+ec4kakddWlRZMmHrQzasQ1aRA=',
      imageUrl: '/certificates/csnp-secops.pdf',
      tags: ['NetworkSecurity', 'DNS', 'SecOps', 'DefensiveSecurity', 'InfrastructureSecurity']
    },
    // ── September 2025 ─────────────────────────────────────────────────────
    {
      id: 12,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'September 2025',
      expirationDate: 'September 2027',
      description: "The Oracle Cloud Infrastructure (OCI) AI Foundations certification introduces learners to the essential concepts of Artificial Intelligence (AI) and Machine Learning (ML), focusing on their practical implementation within Oracle Cloud Infrastructure. This certification validates foundational knowledge in AI/ML concepts, OCI AI services, and cloud-based machine learning workflows.",
      skills: [
        'Artificial Intelligence Fundamentals',
        'Machine Learning Concepts',
        'Oracle Cloud Infrastructure AI Services',
        'Data Science & Analytics',
        'Cloud Computing Architecture',
        'AI/ML Model Deployment',
        'Natural Language Processing',
        'Computer Vision Basics',
        'OCI Data Science Platform',
        'MLOps & Model Management'
      ],
      credentialId: 'OCI-AI-FOUNDATIONS-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/oracle-ai-foundations.pdf',
      tags: ['AI', 'MachineLearning', 'OracleCloud', 'Certification', 'CloudComputing', 'DataScience', 'MLOps'],
      examDetails: {
        examCode: '1Z0-1122-23',
        duration: '90 minutes',
        questions: '50 multiple choice',
        passingScore: '70%',
        format: 'Online proctored'
      },
      prerequisites: [
        'Basic understanding of cloud computing concepts',
        'Familiarity with Oracle Cloud Infrastructure',
        'Fundamental knowledge of data science principles',
        'Understanding of AI/ML terminology'
      ],
      benefits: [
        'Validates foundational AI/ML knowledge in enterprise cloud environments',
        'Demonstrates practical skills in Oracle Cloud AI services',
        'Enhances career prospects in AI and cloud computing roles',
        'Provides industry-recognized credential from Oracle',
        'Foundation for advanced Oracle AI certifications'
      ]
    },
    // ── August 2025 ────────────────────────────────────────────────────────
    {
      id: 13,
      title: 'Cybersecurity Foundation',
      issuer: 'Palo Alto Networks',
      date: 'August 2025',
      description: 'Comprehensive foundation course covering cybersecurity fundamentals, threat landscape, and security best practices. This certification validates understanding of core security concepts and modern security architectures.',
      skills: ['Cybersecurity Fundamentals', 'Threat Intelligence', 'Security Architecture', 'Risk Management', 'Incident Response'],
      credentialId: 'PA-CYB-FND-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/palo-alto-foundation.pdf'
    },
    // ── July 2025 ──────────────────────────────────────────────────────────
    {
      id: 14,
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Forage',
      date: 'July 2025',
      description: 'Hands-on job simulation providing real-world experience in cybersecurity analysis tasks. Completed practical exercises in threat detection, vulnerability assessment, and security monitoring.',
      skills: ['Threat Analysis', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Investigation', 'Risk Assessment'],
      credentialId: 'FORAGE-CYB-ANALYST-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/forage-analyst.pdf'
    },
    // ── May 2025 ───────────────────────────────────────────────────────────
    {
      id: 15,
      title: 'Cryptography & Network Security',
      issuer: 'NPTEL',
      date: 'May 2025',
      description: 'Advanced course covering cryptographic algorithms, network security protocols, and secure communication systems. Explored both theoretical foundations and practical implementations.',
      skills: ['Cryptographic Algorithms', 'Network Protocols', 'Public Key Infrastructure', 'Digital Signatures', 'Secure Communications'],
      credentialId: 'NPTEL-CRYPT-2025',
      credentialUrl: '#',
      imageUrl: '/certificates/nptel-cryptography.pdf'
    },
    // ── November 2024 ──────────────────────────────────────────────────────
    {
      id: 16,
      title: 'Diving Deep in Cyber Security',
      issuer: 'Null Vadodara',
      date: 'November 2024',
      description: 'Intensive cybersecurity workshop covering advanced penetration testing techniques, malware analysis, and security research methodologies. Hands-on labs and real-world scenarios.',
      skills: ['Penetration Testing', 'Malware Analysis', 'Security Research', 'Vulnerability Exploitation', 'Forensic Analysis'],
      credentialId: 'NULL-DEEP-CYB-2024',
      credentialUrl: '#',
      imageUrl: '/certificates/null-vadodara.pdf'
    },
    // ── Ongoing ────────────────────────────────────────────────────────────
    {
      id: 17,
      title: 'Cloud Computing',
      issuer: 'EC-Council',
      date: 'Ongoing',
      description: 'Comprehensive cloud security certification covering cloud architectures, security models, and best practices for securing cloud environments. Focus on AWS, Azure, and Google Cloud platforms.',
      skills: ['Cloud Security', 'AWS Security', 'Azure Security', 'Cloud Architecture', 'DevSecOps'],
      credentialId: 'ECC-CLOUD-2024',
      credentialUrl: '#',
      imageUrl: '/certificates/ec-council-cloud.pdf'
    }
  ];

  const stats = [
    { label: 'Certificates Earned', value: '17', icon: Award },
    { label: 'Skills Mastered', value: '40+', icon: Star },
    { label: 'Organizations', value: '8', icon: Trophy },
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
          <h1 className="section-title">Certifications &amp; Achievements</h1>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
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
                    <span className="text-gray-300 font-mono text-sm">Completed 17 professional certifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                    <span className="text-gray-300 font-mono text-sm">Mastered 40+ cybersecurity and AI/ML skills</span>
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
              <span className="text-xs text-neon-green font-mono">Q2 2026</span>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-lg font-cyber font-bold text-white">OSCP</h3>
              <p className="text-gray-400 font-mono text-sm">Offensive Security Certified Professional</p>
              <span className="text-xs text-neon-blue font-mono">Q3 2026</span>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-cyber font-bold text-white">CISSP</h3>
              <p className="text-gray-400 font-mono text-sm">Certified Information Systems Security Professional</p>
              <span className="text-xs text-purple-400 font-mono">Q4 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesPage;
