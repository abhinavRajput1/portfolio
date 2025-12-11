import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: 'Abhinav Singh - Cybersecurity Student & Ethical Hacker',
    template: '%s | Abhinav Singh - Cybersecurity Portfolio'
  },
  description: 'Abhinav Singh is a B.Tech Cyber/Computer Forensics student and Cybersecurity Intern at Hacktify. Specializing in ethical hacking, penetration testing, digital forensics, and cyber defense. Explore projects, certificates, and skills in network security, Kali Linux, and Python security tools.',

  // Keywords for SEO
  keywords: [
    'cybersecurity',
    'ethical hacking',
    'digital forensics',
    'penetration testing',
    'cyber defense',
    'Abhinav Singh',
    'security researcher',
    'Kali Linux',
    'network security',
    'cryptography',
    'vulnerability assessment',
    'incident response',
    'malware analysis',
    'security tools',
    'Python security',
    'web application security',
    'Hacktify intern',
    'cyber forensics',
    'OSINT',
    'security automation'
  ],

  // Author Information
  authors: [
    {
      name: 'Abhinav Singh',
      url: 'https://github.com/abhinavRajput1'
    }
  ],
  creator: 'Abhinav Singh',
  publisher: 'Abhinav Singh',

  // Robots and Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons and Favicon
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
  },

  // Open Graph for Social Media
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rajputabhinav.in',
    siteName: 'Abhinav Singh - Cybersecurity Portfolio',
    title: 'Abhinav Singh - Cybersecurity Student & Ethical Hacker',
    description: 'Exploring the world of ethical hacking, digital forensics, and cyber defense. Portfolio showcasing cybersecurity projects, certificates, and professional experience.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhinav Singh - Cybersecurity Portfolio',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinav Singh - Cybersecurity Student & Ethical Hacker',
    description: 'Exploring the world of ethical hacking, digital forensics, and cyber defense.',
    creator: '@abhinavsingh',
    images: ['/og-image.png'],
  },

  // Verification (Add your verification codes when available)
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Additional Metadata
  category: 'Technology',
  classification: 'Portfolio Website',

  // Alternate Languages (if you add multilingual support)
  alternates: {
    canonical: 'https://www.rajputabhinav.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <MatrixBackground />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
