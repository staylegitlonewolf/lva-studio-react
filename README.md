# LVA Studio React

**LIVING VICTORIOUS ALWAYS™** - A modern, full-service digital solutions company helping businesses and individuals succeed in the modern world.

![LVA Studio](https://img.shields.io/badge/LVA-Studio-blue)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.3-purple)

## 🚀 Features

### Core Services
- **🌐 Web Development** - Custom websites with modern technologies
- **☀️ Solar Solutions** - Connect with trusted solar providers
- **🏥 Health Insurance** - Comprehensive coverage solutions
- **🤝 NIL Partnerships** - Name, Image, and Likeness opportunities

### Technical Features
- ⚡ **Vite** - Lightning-fast development server
- 🔄 **Hot Module Replacement (HMR)** - Instant updates during development
- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light themes
- 📱 **Mobile-First** - Fully responsive across all devices
- 🎯 **Smooth Navigation** - Scroll arrows and smooth scrolling
- 🔍 **SEO Optimized** - Built for search engine visibility
- 📦 **TypeScript** - Type-safe development
- 🎭 **Font Awesome Icons** - Professional iconography

### User Experience
- 🌓 **Theme Toggle** - Switch between light and dark modes
- ⬇️ **Smart Scroll Navigation** - Context-aware scroll arrows
- ⬆️ **Scroll to Top** - Quick return to page top
- 🖼️ **Image Lightbox** - Enhanced image viewing
- 📄 **PDF Downloads** - Direct access to certifications

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/staylegitlonewolf/lva-studio-react.git
   cd lva-studio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
lva-studio-react/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Main navigation with theme toggle
│   │   ├── ScrollArrow.tsx     # Smart scroll navigation
│   │   └── ScrollToTop.tsx     # Scroll to top functionality
│   ├── pages/
│   │   ├── Home.tsx           # Landing page with services
│   │   ├── Team.tsx           # Team member profiles
│   │   └── Certifications.tsx # State licenses & certifications
│   ├── App.tsx                # Main application component
│   ├── App.css               # Global styles and theming
│   └── main.tsx              # Application entry point
├── public/
│   ├── media/                # Images, videos, and assets
│   └── favicon.ico          # Site favicon
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build locally

# Building
npm run build        # Create production build
npm run typecheck    # TypeScript type checking
```

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

The build process creates optimized static files in the `build/client/` directory.

## 🚀 Deployment

### GitHub Pages (Recommended)
This project is configured for GitHub Pages deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push to main branch
   - GitHub Actions will automatically deploy

### Other Deployment Options
- **Netlify** - Drag and drop `build/client/` folder
- **Vercel** - Connect GitHub repository
- **AWS S3 + CloudFront** - Upload to S3 bucket
- **Firebase Hosting** - Use Firebase CLI

## 🎯 Services Overview

### Web Development
- Custom Design & Development
- SEO Optimization
- Mobile-First Responsive
- E-commerce Solutions

### Solar Solutions
- Residential & Commercial
- Expert Consultation
- Installation Support
- Financing Options

### Health Insurance
- Individual & Family Plans
- Business Group Coverage
- Medicare Supplements
- Dental & Vision Plans
- Prescription Drug Coverage
- Mental Health Services

### NIL Partnerships
- Brand Development
- Sponsorship Deals
- Marketing Strategy
- Legal Guidance

## 👥 Team

**David Brown** - Founder & CEO, Licensed Health Coverage Expert
- Access to all health insurance options
- Leading mission to connect clients with best solutions

**Christina James** - Lead Developer
- Expert in modern web technologies
- Creating responsive, user-friendly applications

**Braeden LLauro** - Development Specialist
- Specializing in modern web development
- Creating innovative digital solutions

**Chauntel Bender** - Client Relations Manager
- Ensuring exceptional client experiences
- Building lasting partnerships

## 📜 Licenses & Certifications

David Brown is licensed to provide health insurance services across multiple states:
- Florida, Georgia, Texas, Colorado
- Maryland, Nevada, Ohio, Tennessee
- Utah, Virginia

## 🎨 Theming

The application supports both light and dark themes:
- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Modern, eye-friendly interface
- **Automatic**: Theme preference is saved in localStorage

## 🔧 Customization

### Adding New Services
1. Update `src/pages/Home.tsx` with new service card
2. Add appropriate Font Awesome icon
3. Update navigation if needed

### Modifying Styles
- Main styles: `src/App.css`
- Theme variables: CSS custom properties in `:root`
- Component-specific styles: Inline or separate CSS files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to LVA Studio™. All rights reserved.

## 📞 Contact

**David Brown** - Founder & CEO
- Phone: (813) 521-6137
- Email: elevatedhealthdavid@gmail.com

**LVA Studio™**
- Website: [lva-studio.com](https://lva-studio.com)
- Mission: Living Victorious Always™

---

Built with ❤️ by the LVA Studio team using React, TypeScript, and Vite.
