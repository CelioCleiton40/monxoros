# 🏜️ Monxoros Expedition

> **An exclusive photography workshop experience through Northeast Brazil's stunning Sertão region**

A modern, responsive web application built for showcasing and managing registrations for an intimate 7-day photography expedition through Brazil's Northeast. This project combines cutting-edge web technologies with beautiful design to create an immersive experience for potential participants.

## 🌟 Features

### 🎯 Core Functionality
- **Responsive Landing Page** - Fully optimized for all devices
- **Interactive Timeline** - Detailed 7-day expedition itinerary
- **Photo Gallery** - Stunning landscape and cultural photography showcase
- **Newsletter Integration** - Google Sheets-powered subscription system
- **Application Form** - Complete registration system for participants
- **Testimonials** - Video testimonials from previous expedition members

### 🎨 Design & UX
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Framer Motion** - Engaging animations and transitions
- **Tailwind CSS** - Utility-first styling for rapid development
- **Mobile-First** - Optimized for mobile devices with desktop enhancements
- **SEO Optimized** - Complete meta tags, structured data, and sitemap

### 🔧 Technical Features
- **TypeScript** - Type-safe development
- **React 18** - Latest React features with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Form Validation** - Zod schema validation with React Hook Form
- **Google Sheets API** - Direct integration for data collection
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd segundo-projeto
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   VITE_GOOGLE_SHEETS_API_URL=your_google_apps_script_url
   VITE_DEV_MODE=true
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── AboutPhotographer.tsx
│   ├── ApplicationForm.tsx
│   ├── ElementsGallery.tsx
│   ├── FloatingWidget.tsx
│   ├── HeroSection.tsx
│   ├── InvitationSection.tsx
│   ├── ItineraryTimeline.tsx
│   ├── Newsletter.tsx
│   └── TestimonialsSection.tsx
├── config/              # Configuration files
├── constants/           # Application constants
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── schemas/             # Zod validation schemas
├── services/            # API services
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 🛠️ Built With

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Form & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### State Management
- **Zustand** - Lightweight state management

### Icons & UI
- **Lucide React** - Beautiful icons
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class merging

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile** (320px+) - Optimized touch interface
- **Tablet** (768px+) - Enhanced layout with more content
- **Desktop** (1024px+) - Full-featured experience with advanced interactions

## 🔗 Google Sheets Integration

The newsletter system integrates directly with Google Sheets:

1. **Google Apps Script** - Handles form submissions
2. **CORS Configuration** - Proper headers for web requests
3. **Data Validation** - Server-side email validation
4. **Error Handling** - Graceful error management

### Setting up Google Sheets Integration

1. Create a Google Sheet with columns: `Email`, `Date`, `Status`
2. Create a Google Apps Script with the provided code
3. Deploy as web app with public access
4. Add the deployment URL to your `.env` file

## 🎯 Expedition Details

**Monxoros Expedition** is an exclusive photography workshop featuring:
- **Duration**: 7 days (January 15-21, 2026)
- **Group Size**: Limited to 6 photographers
- **Locations**: Portalegre, São Rafael, Galinhos (Northeast Brazil)
- **Focus**: Landscape, cultural, and documentary photography

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Responsive images with lazy loading

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
The project includes Vercel configuration (`vercel.json`) for easy deployment.

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run check` - TypeScript type checking

### Code Quality
- **ESLint** - Code linting with React-specific rules
- **TypeScript** - Static type checking
- **Prettier** - Code formatting (via editor integration)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Developed by [Célio Cleiton](https://github.com/celiocleiton40), Software Engineer**

Passionate about creating exceptional web experiences that combine beautiful design with robust functionality. Specialized in React, TypeScript, and modern web technologies.

---

<div align="center">
  <p>Made with ❤️ for photography enthusiasts exploring Brazil's Northeast</p>
  <p>
    <a href="#top">Back to top</a>
  </p>
</div>
