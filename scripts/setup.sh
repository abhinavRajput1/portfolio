#!/bin/bash

# Abhinav Singh Portfolio Setup Script
echo "🚀 Setting up Abhinav Singh's Cybersecurity Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public directories if they don't exist
echo "📁 Creating public directories..."
mkdir -p public/certificates
mkdir -p public/images

# Copy placeholder files
echo "📄 Setting up placeholder files..."
if [ ! -f "public/resume.pdf" ]; then
    echo "⚠️  Please add your resume.pdf to the public folder"
fi

# Create .env.local template
echo "🔧 Creating environment template..."
cat > .env.local.template << EOF
# EmailJS Configuration (Optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Formspree Configuration (Optional)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
EOF

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Copy .env.local.template to .env.local and configure your services"
echo "2. Add your resume.pdf to the public folder"
echo "3. Add certificate images to public/certificates/"
echo "4. Run 'npm run dev' to start the development server"
echo "5. Visit http://localhost:3000 to see your portfolio"
echo ""
echo "📚 For more information, check the README.md file"
echo "🔗 Happy coding! 🚀"
