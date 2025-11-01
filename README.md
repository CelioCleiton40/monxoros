# 🏜️ Monxoros Expedition

> **An exclusive photography workshop experience through Northeast Brazil's stunning Sertão region**

A modern, responsive web application built for showcasing and managing registrations for an intimate 7-day photography expedition through Brazil's Northeast. This project combines cutting-edge web technologies with beautiful design to create an immersive experience for potential participants.

## 🌟 Features

### 🎯 Core Functionality
- **Responsive Landing Page** - Fully optimized for all devices
- **Interactive Timeline** - Detailed 7-day expedition itinerary
- **Photo Gallery** - Stunning landscape and cultural photography showcase
- **Automated Newsletter System** - Complete subscription workflow with Google Sheets integration
- **Email Automation** - Automated welcome emails via Gmail integration
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
- **Google Sheets API** - Direct integration for subscriber data management
- **Gmail API Integration** - Automated email delivery system
- **Email Validation** - Advanced validation including disposable email detection
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
   # Note: Gmail API credentials are configured server-side for security
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

## 📧 Newsletter System & Email Automation

### Overview
The application features a complete automated newsletter system that handles subscriber management and welcome email delivery:

### 🔄 Workflow Process
1. **User Subscription** - Users subscribe via the newsletter form on the website
2. **Data Validation** - Advanced email validation including disposable email detection
3. **Google Sheets Storage** - Subscriber data is automatically stored in Google Sheets
4. **Automated Welcome Email** - Gmail integration sends personalized welcome emails
5. **Error Handling** - Comprehensive error management with user feedback

### 📊 Data Management
- **Google Sheets Integration** - All subscriber data is stored securely
- **Real-time Updates** - Instant data synchronization
- **Data Validation** - Server-side validation for data integrity
- **Privacy Compliant** - No sensitive data exposed in client-side code

### 📬 Email Features
- **Automated Delivery** - Welcome emails sent immediately upon subscription
- **Gmail Integration** - Reliable email delivery through Gmail API
- **Personalized Content** - Dynamic email content based on subscriber data
- **Delivery Tracking** - Success/failure status tracking

### 🔧 Technical Implementation
- **Google Apps Script** - Server-side processing and Gmail integration
- **RESTful API** - Clean API endpoints for data operations
- **Error Handling** - Graceful error management with user notifications
- **Security** - API credentials secured server-side, no exposure in frontend

### 🛡️ Security & Privacy
- **No Exposed Credentials** - All API keys and sensitive data kept server-side
- **Data Validation** - Multiple layers of validation for data integrity
- **CORS Configuration** - Proper security headers and access control
- **Privacy First** - Minimal data collection, secure storage practices
- **CSRF Protection** - Cross-Site Request Forgery protection on all forms
- **Input Sanitization** - Advanced input filtering and XSS prevention
- **HTTP Security Headers** - Comprehensive security headers implementation
- **Rate Limiting** - Server-side rate limiting to prevent abuse

## 🔗 Google Sheets Integration

The newsletter and email system integrates with Google services:

1. **Google Apps Script** - Handles form submissions and email automation
2. **Google Sheets API** - Stores subscriber data securely
3. **Gmail API** - Sends automated welcome emails
4. **Data Validation** - Server-side email validation and spam protection
5. **Error Handling** - Graceful error management with user feedback

### Setting up the Integration

1. **Google Sheets Setup**
   - Create a Google Sheet with columns: `Email`, `Date`, `Status`, `Source`
   - Configure proper permissions for the Apps Script

2. **Google Apps Script Configuration**
   - Create a new Apps Script project
   - Enable Gmail API and Sheets API
   - Configure OAuth scopes for email sending
   - Deploy as web app with appropriate permissions

3. **Environment Configuration**
   - Add the Apps Script deployment URL to your `.env` file
   - Ensure proper CORS configuration
   - Test the integration in development mode

4. **Security Considerations**
   - All API credentials are stored server-side
   - No sensitive information exposed in frontend code
   - Proper error handling prevents data leakage

## 🎯 Expedition Details

**Monxoros Expedition** is an exclusive photography workshop featuring:
- **Duration**: 7 days (March 15-21, 2026)
- **Group Size**: Limited to 6 photographers
- **Locations**: Portalegre, São Rafael, Galinhos (Northeast Brazil)
- **Focus**: Landscape, cultural, and documentary photography

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Responsive images with lazy loading

## 🔒 Security Implementation

### Frontend Security
- **CSRF Protection**: All forms include CSRF tokens to prevent cross-site request forgery attacks
- **Input Sanitization**: Advanced filtering removes dangerous characters and prevents XSS attacks
- **Content Security Policy**: Strict CSP headers prevent unauthorized script execution
- **HTTP Security Headers**: Comprehensive security headers including X-Frame-Options, X-Content-Type-Options
- **Form Validation**: Client-side and server-side validation with Zod schemas

### Backend Security
- **Rate Limiting**: Server-side rate limiting prevents abuse and DoS attacks
- **Origin Validation**: Requests validated against allowed domains
- **Data Sanitization**: All inputs sanitized before processing
- **Secure Token Management**: CSRF tokens with expiration and one-time use
- **Email Validation**: Advanced email validation including disposable email detection

### Privacy & Data Protection
- **Minimal Data Collection**: Only necessary information is collected
- **Secure Storage**: All data stored securely with proper access controls
- **No Client-Side Secrets**: API keys and sensitive data kept server-side only
- **GDPR Compliance**: Privacy-first approach with user consent management
- **Data Encryption**: Sensitive data encrypted in transit and at rest

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
