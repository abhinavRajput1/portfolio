@echo off
echo 🚀 Setting up Abhinav Singh's Cybersecurity Portfolio...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create public directories if they don't exist
echo 📁 Creating public directories...
if not exist "public\certificates" mkdir "public\certificates"
if not exist "public\images" mkdir "public\images"

REM Create .env.local template
echo 🔧 Creating environment template...
(
echo # EmailJS Configuration ^(Optional^)
echo NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
echo NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
echo NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
echo.
echo # Formspree Configuration ^(Optional^)
echo NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
echo.
echo # Analytics ^(Optional^)
echo NEXT_PUBLIC_GA_ID=your_google_analytics_id
) > .env.local.template

echo ✅ Setup complete!
echo.
echo 🎯 Next steps:
echo 1. Copy .env.local.template to .env.local and configure your services
echo 2. Add your resume.pdf to the public folder
echo 3. Add certificate images to public\certificates\
echo 4. Run 'npm run dev' to start the development server
echo 5. Visit http://localhost:3000 to see your portfolio
echo.
echo 📚 For more information, check the README.md file
echo 🔗 Happy coding! 🚀
pause
