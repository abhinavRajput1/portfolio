import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhinav Singh - Cybersecurity Student & Ethical Hacker',
  description: 'Portfolio of Abhinav Singh, a cybersecurity student specializing in ethical hacking, digital forensics, and cyber defense.',
  keywords: 'cybersecurity, ethical hacking, digital forensics, penetration testing, cyber defense, Abhinav Singh',
  authors: [{ name: 'Abhinav Singh' }],
  openGraph: {
    title: 'Abhinav Singh - Cybersecurity Student & Ethical Hacker',
    description: 'Exploring the world of ethical hacking, digital forensics, and cyber defense.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
