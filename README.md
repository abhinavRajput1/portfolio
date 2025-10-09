# Abhinav Singh - Cybersecurity Portfolio

A modern, interactive portfolio website for Abhinav Singh, a cybersecurity student and aspiring ethical hacker. Built with Next.js, Tailwind CSS, and Framer Motion for a sleek, hacker-inspired design.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com)

## ✨ Features

- **Dark, Hacker-Inspired Theme**: Neon blue/green accents with cyber aesthetics
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Components**: Hover effects, typing animations, and matrix background
- **Multi-Page Structure**: Comprehensive sections covering all aspects of the portfolio
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 📱 Pages

- **Home**: Hero section with typing animation and terminal-style interface
- **About**: Bio, skills, and education timeline with animated progress bars
- **Experience**: Professional experience with detailed internship information
- **Projects**: Interactive project cards with modal details and GitHub links
- **Certificates**: Grid layout with lightbox preview for certifications
- **Events**: Timeline of workshops, competitions, and cybersecurity events
- **Studies**: Learning journey, coursework, and current learning goals
- **Contact**: Contact form with animated icons and availability information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 🎨 Design Features

- **Matrix Background**: Animated falling code effect
- **Neon Glows**: Subtle glowing effects on hover and focus
- **Glassmorphism**: Modern glass-like components
- **Terminal Aesthetics**: Command-line inspired elements
- **Smooth Scrolling**: Enhanced user experience
- **Custom Animations**: Typing effects, progress bars, and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/abhinav-singh-portfolio.git
cd abhinav-singh-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── certificates/      # Certificates page
│   ├── events/            # Events page
│   ├── studies/           # Studies page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── MatrixBackground.tsx # Animated background
│   ├── TypingAnimation.tsx # Typing effect component
│   ├── ProjectCard.tsx    # Project card component
│   └── CertificateCard.tsx # Certificate card component
├── public/                # Static assets
└── README.md              # This file
```

## 🎯 Key Components

### MatrixBackground
Animated falling code effect using HTML5 Canvas for authentic hacker aesthetic.

### TypingAnimation
Custom typing effect component for dynamic text display.

### ProjectCard
Interactive project cards with modal details and hover effects.

### CertificateCard
Certificate display with lightbox functionality and verification links.

## 🎨 Customization

### Colors
The theme uses custom CSS variables defined in `tailwind.config.js`:
- `neon-blue`: #00f5ff
- `neon-green`: #39ff14
- `cyber-dark`: #0a0a0a
- `cyber-gray`: #1a1a1a

### Content
Update the following files to customize content:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About section
- `app/projects/page.tsx` - Projects data
- `app/certificates/page.tsx` - Certificates data
- `app/contact/page.tsx` - Contact information

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Update `next.config.js` for static export
2. Build and deploy to GitHub Pages

## 📧 Contact Integration

The contact form is set up for integration with:
- **EmailJS**: For direct email sending
- **Formspree**: For form handling
- **Custom API**: For backend integration

Update the form submission logic in `app/contact/page.tsx` to integrate with your preferred service.

## 🔧 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section for security articles
- [ ] Interactive terminal with commands
- [ ] 3D elements and animations
- [ ] Multi-language support
- [ ] PWA functionality
- [ ] Advanced animations and effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Abhinav Singh**
- Email: abhinavsingh14371@gmail.com
- LinkedIn: [linkedin.com/in/abhinav-singh](https://linkedin.com/in/abhinav-singh)
- GitHub: [github.com/abhinav-singh](https://github.com/abhinav-singh)

---

Made with ❤️ by Abhinav Singh
