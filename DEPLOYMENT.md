# Deployment Guide

This guide covers different deployment options for the Abhinav Singh Portfolio website.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**One-click deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abhinavRajput1/portfolio)

**Manual deployment:**
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
6. Deploy!

### 2. Netlify

**One-click deploy:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abhinavRajput1/portfolio)

**Manual deployment:**
1. Build the project: `npm run build`
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Drag and drop the `out` folder
4. Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : ''
}
```

2. Create GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in repository settings

## 🔧 Environment Variables

### EmailJS Integration
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Formspree Integration
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

### Analytics
```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📁 Pre-deployment Checklist

- [ ] Update contact information in `app/contact/page.tsx`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Add certificate images to `public/certificates/`
- [ ] Update social media links in footer and contact page
- [ ] Configure environment variables
- [ ] Test all forms and links
- [ ] Optimize images and assets
- [ ] Update README.md with your information

## 🎨 Customization Before Deployment

### Update Personal Information
1. **Name and Title**: Update in `app/page.tsx` and `components/Navbar.tsx`
2. **Bio**: Modify in `app/about/page.tsx`
3. **Experience**: Update in `app/experience/page.tsx`
4. **Projects**: Add your projects in `app/projects/page.tsx`
5. **Certificates**: Update in `app/certificates/page.tsx`
6. **Contact**: Update email and social links in `app/contact/page.tsx`

### Customize Design
1. **Colors**: Modify in `tailwind.config.js`
2. **Fonts**: Update in `app/globals.css`
3. **Animations**: Adjust in Framer Motion components
4. **Matrix Background**: Customize in `components/MatrixBackground.tsx`

## 🔍 Post-deployment Tasks

1. **Test all pages and functionality**
2. **Check mobile responsiveness**
3. **Verify contact form works**
4. **Test download links**
5. **Check social media links**
6. **Validate SEO meta tags**
7. **Set up analytics tracking**
8. **Configure custom domain (optional)**

## 📊 Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before adding
- Add proper alt tags
- Use Next.js Image component

### Code Optimization
- Enable gzip compression
- Minify CSS and JavaScript
- Use CDN for static assets
- Implement lazy loading

## 🛡️ Security Considerations

- Validate all form inputs
- Use HTTPS in production
- Implement CSP headers
- Regular dependency updates
- Secure environment variables

## 📱 Mobile Optimization

- Test on various devices
- Optimize touch interactions
- Ensure readable text sizes
- Test landscape orientation
- Verify navigation works on mobile

## 🔄 Continuous Deployment

Set up automatic deployments:
1. **Vercel**: Automatic on git push
2. **Netlify**: Automatic on git push
3. **GitHub Pages**: Using GitHub Actions

## 📞 Support

If you encounter issues during deployment:
1. Check the console for errors
2. Verify environment variables
3. Ensure all dependencies are installed
4. Check build logs
5. Review the documentation

---

Happy deploying! 🚀
