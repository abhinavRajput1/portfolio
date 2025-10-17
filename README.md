# Abhinav Singh - Cybersecurity Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</div>

<div align="center">
  <h3>🚀 A Modern Cybersecurity Portfolio</h3>
  <p>Interactive portfolio showcasing cybersecurity expertise, projects, and certifications</p>
</div>

---

## 🌟 Live Demo

🔗 **[View Portfolio](https://abhinav-portfolio-singh.vercel.app/)** *(Update with your actual deployment URL)*

---

## ✨ Features

- **🎨 Cyberpunk Aesthetic**: Dark theme with neon blue/green accents
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎭 Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **⚡ Interactive Components**: Hover effects, typing animations, and matrix background
- **🔍 Project Showcase**: Detailed project cards with live demos and GitHub links
- **🏆 Certifications**: Interactive certificate gallery with verification links
- **📧 Contact Integration**: Ready-to-use contact form with EmailJS integration
- **🚀 Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

---

## 📱 Portfolio Sections

| Section | Description |
|---------|-------------|
| **🏠 Home** | Hero section with typing animation and terminal-style interface |
| **👨‍💻 About** | Personal bio, skills, and educational background |
| **💼 Experience** | Professional experience and internship details |
| **🚀 Projects** | Showcase of cybersecurity tools and applications |
| **🏆 Certificates** | Professional certifications and achievements |
| **📅 Events** | Workshops, competitions, and cybersecurity events |
| **📚 Studies** | Learning journey and current educational goals |
| **📞 Contact** | Contact form and social media links |

---

## 🚀 Featured Projects

### 1. Sub-Domain Enumeration Tool
- **Description**: Automated subdomain discovery tool using DNS and certificate transparency logs
- **Tech Stack**: Python, Shell Scripting, DNS, Certificate Transparency
- **Features**: 
  - DNS brute-forcing with custom wordlists
  - Certificate transparency log scanning
  - Multiple API integrations
  - Concurrent processing for improved performance

### 2. Phishing Checker
- **Description**: Lightweight, single-page tool to evaluate URLs for phishing indicators
- **Tech Stack**: JavaScript, HTML, CSS, URL Analysis
- **Live Demo**: [phising-link-identifer.vercel.app](https://phising-link-identifer.vercel.app/)
- **Features**:
  - Visual, friendly UI for quick checks
  - Heuristics for suspicious URL patterns
  - Fully mobile-responsive design
  - Zero dependencies

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom cyber theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS integration

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Version Control**: Git

---

## 🎨 Design System

### Color Palette
```css
--neon-blue: #00f5ff    /* Primary accent */
--neon-green: #39ff14   /* Secondary accent */
--cyber-dark: #0a0a0a   /* Background */
--cyber-gray: #1a1a1a   /* Card backgrounds */
```

### Key Design Elements
- **Matrix Background**: Animated falling code effect
- **Glassmorphism**: Modern glass-like components
- **Neon Glows**: Subtle glowing effects on hover
- **Terminal Aesthetics**: Command-line inspired elements
- **Smooth Animations**: Enhanced user experience

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/abhinavRajput1/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── certificates/             # Certificates page
│   ├── contact/                  # Contact page
│   ├── events/                  # Events page
│   ├── experience/               # Experience page
│   ├── projects/                 # Projects page
│   ├── studies/                  # Studies page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── CertificateCard.tsx       # Certificate display
│   ├── Footer.tsx                # Footer component
│   ├── MatrixBackground.tsx      # Animated background
│   ├── Navbar.tsx                # Navigation
│   ├── ProjectCard.tsx           # Project display
│   └── TypingAnimation.tsx       # Typing effect
├── public/                       # Static assets
│   ├── certificates/             # Certificate PDFs
│   └── resume.pdf                # Resume file
├── scripts/                      # Setup scripts
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
└── README.md                     # This file
```

---

## 🎯 Key Components

### MatrixBackground
- **Purpose**: Animated falling code effect using HTML5 Canvas
- **Effect**: Creates authentic hacker aesthetic
- **Performance**: Optimized for smooth 60fps animation

### TypingAnimation
- **Purpose**: Dynamic text display with typing effect
- **Usage**: Hero section and skill descriptions
- **Features**: Customizable speed and text arrays

### ProjectCard
- **Purpose**: Interactive project showcase
- **Features**: Modal details, hover effects, live demo links
- **Integration**: GitHub and live demo buttons

### CertificateCard
- **Purpose**: Professional certification display
- **Features**: Lightbox preview, verification links, download options
- **Data**: Comprehensive certification details

---

## 🔧 Customization Guide

### Updating Content

1. **Personal Information**
   - Edit `app/page.tsx` for home page content
   - Update `app/about/page.tsx` for bio and skills
   - Modify `app/contact/page.tsx` for contact details

2. **Projects**
   - Update `app/projects/page.tsx` with your projects
   - Add project images to `public/` directory
   - Update GitHub and live demo URLs

3. **Certificates**
   - Add certificate PDFs to `public/certificates/`
   - Update `app/certificates/page.tsx` with certificate data
   - Add verification URLs

4. **Experience**
   - Update `app/experience/page.tsx` with work history
   - Add company logos and descriptions

### Styling Customization

1. **Colors**: Modify `tailwind.config.js` for theme colors
2. **Fonts**: Update font imports in `app/layout.tsx`
3. **Animations**: Customize Framer Motion variants
4. **Layout**: Adjust grid systems and spacing

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Connect to Vercel
vercel --prod

# Or connect via GitHub integration
# 1. Push to GitHub
# 2. Connect repository to Vercel
# 3. Deploy automatically
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# 1. Upload dist folder
# 2. Configure build settings
```

### GitHub Pages
```bash
# Update next.config.js for static export
# Add output: 'export' to next.config.js

# Build and deploy
npm run build
npm run export
```

---

## 📧 Contact Integration

The portfolio includes a contact form ready for integration with:

- **EmailJS**: Direct email sending (configured)
- **Formspree**: Form handling service
- **Custom API**: Backend integration

### EmailJS Setup
1. Create EmailJS account
2. Update service details in `app/contact/page.tsx`
3. Configure email templates

---

## 🏆 Certifications Featured

- **Oracle Cloud Infrastructure AI Foundations Associate**
- **Palo Alto Networks Cybersecurity Foundation**
- **Forage Cybersecurity Analyst Job Simulation**
- **NPTEL Cryptography & Network Security**
- **Null Vadodara Diving Deep in Cyber Security**
- **EC-Council Cloud Computing** (Ongoing)

---

## 🔮 Future Enhancements

- [ ] **Dark/Light Theme Toggle**
- [ ] **Blog Section** for security articles
- [ ] **Interactive Terminal** with commands
- [ ] **3D Elements** and advanced animations
- [ ] **Multi-language Support**
- [ ] **PWA Functionality**
- [ ] **Advanced Security Tools Integration**
- [ ] **Real-time Portfolio Analytics**

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Test responsive design
- Ensure accessibility compliance

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Social Links

<div align="center">

**Abhinav Singh**  
*Cybersecurity Student & Ethical Hacker*

[![Email](https://img.shields.io/badge/Email-abhinavsingh14371@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:abhinavsingh14371@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhinav_Singh-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abhinav-singh-959603293/)
[![GitHub](https://img.shields.io/badge/GitHub-abhinavRajput1-black?style=for-the-badge&logo=github)](https://github.com/abhinavRajput1)

</div>

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p>Made with ❤️ by <strong>Abhinav Singh</strong></p>
</div>
