# Innovaas Website

A modern, professional Next.js application for Innovaas Solutions, featuring server-side rendering, authentication, and an internal employee resources portal.

## 🚀 Project Overview

The Innovaas Website is built with **Next.js 14** using the App Router, providing a fast, SEO-friendly web experience with server-side rendering capabilities. The project includes public-facing pages for clients and an internal employee resources dashboard.

## 📁 Directory Structure & Purpose

```
innovaasWebsite/
├── public/                          # Static assets served directly by Next.js
│   ├── favicon.ico                  # Website favicon
│   ├── favicon-16x16.png           # Small favicon for browsers
│   ├── favicon-32x32.png           # Standard favicon size
│   ├── favicon-48x48.png           # Larger favicon for bookmarks
│   ├── apple-touch-icon.png        # Icon for iOS devices
│   ├── android-chrome-192x192.png  # Android app icon (small)
│   ├── android-chrome-512x512.png  # Android app icon (large)
│   ├── site.webmanifest           # Web app manifest for PWA features
│   ├── innovaas_logo_orange_and_white.png  # Company logo
│   └── UNSRevolution.webp          # Hero image for internal pages
├── src/
│   ├── app/                        # Next.js App Router (all routes and pages)
│   │   ├── layout.tsx              # Root layout (applies to all pages)
│   │   ├── page.tsx                # Homepage (/)
│   │   ├── about/page.tsx          # About page (/about)
│   │   ├── services/page.tsx       # Services page (/services)
│   │   ├── partners/page.tsx       # Partners page (/partners)
│   │   ├── blog/page.tsx           # Blog page (/blog)
│   │   ├── login/page.tsx          # Login page (/login)
│   │   ├── apply/page.tsx          # Application page (/apply)
│   │   ├── legal/page.tsx          # Legal information (/legal)
│   │   ├── privacy/page.tsx        # Privacy policy (/privacy)
│   │   ├── team/page.tsx           # Employee Resources Dashboard (/team)
│   │   └── api/                    # API routes (serverless functions)
│   │       └── [route]/route.ts    # Dynamic API endpoints
│   ├── components/                 # Reusable React components
│   │   ├── Header.tsx              # Site header with navigation
│   │   ├── Hero.tsx                # Hero section for pages
│   │   ├── ClientLayout.tsx        # Layout wrapper for client pages
│   │   ├── LogoutButton.tsx        # Authentication logout component
│   │   └── ProtectedRoute.tsx      # Route protection component
│   ├── hooks/                      # Custom React hooks
│   │   └── [hook files]            # Reusable state and logic
│   └── utils/                      # Utility functions and configurations
│       └── supabase/               # Supabase database configuration
│           └── client.ts           # Supabase client initialization
├── middleware.ts                   # Next.js middleware for route protection
├── package.json                    # Project dependencies and scripts
├── package-lock.json              # Locked dependency versions
└── README.md                      # This documentation file
```

## 🔧 Key Components Explained

### **Public Directory (`/public`)**
**Purpose**: Stores static assets that are served directly by Next.js without processing.

**Why it exists**: 
- **Performance**: Static files are served directly from the server, reducing load times
- **SEO**: Favicons and web manifests help with search engine optimization
- **User Experience**: Proper icons ensure your site looks professional across all devices

**Key files**:
- `favicon.ico` - The main website icon that appears in browser tabs
- `site.webmanifest` - Enables Progressive Web App (PWA) features
- `innovaas_logo_orange_and_white.png` - Your company branding
- `UNSRevolution.webp` - Hero image used on internal pages

### **App Directory (`/src/app`)**
**Purpose**: Contains all the routes and pages of your website using Next.js 14's App Router.

**Why it exists**:
- **File-based routing**: Each folder becomes a route automatically
- **Server-side rendering**: Pages are rendered on the server for better SEO
- **Layout system**: Shared layouts reduce code duplication

**Key pages**:
- `page.tsx` - Your homepage (accessible at `/`)
- `about/page.tsx` - About page (accessible at `/about`)
- `services/page.tsx` - Services offered (accessible at `/services`)
- `partners/page.tsx` - Partner information (accessible at `/partners`)
- `blog/page.tsx` - Blog content (accessible at `/blog`)
- `login/page.tsx` - User authentication (accessible at `/login`)
- `apply/page.tsx` - Application forms (accessible at `/apply`)
- `legal/page.tsx` - Legal documents (accessible at `/legal`)
- `privacy/page.tsx` - Privacy policy (accessible at `/privacy`)
- `team/page.tsx` - **Employee Resources Dashboard** (accessible at `/team`)

### **Team Page - Employee Resources Dashboard**
**Purpose**: Internal company portal for Innovaas employees to access work tools and resources.

**Why it exists**:
- **Centralized Access**: Single point of entry for all company tools
- **Resource Management**: Easy access to time tracking, HR portal, IT support, etc.
- **Employee Productivity**: Streamlines access to daily work tools

**Features**:
- Time Tracking system (live at `http://3.0.115.144:8001/en`)
- Employee Contract documents
- SOP Directory
- HR Portal
- IT Support
- Company Calendar
- Expense Reporting
- Benefits Information
- Authentication required (logout functionality included)

### **API Routes (`/src/app/api`)**
**Purpose**: Serverless functions that handle backend logic without a separate server.

**Why it exists**:
- **Backend functionality**: Handle form submissions, data processing, external API calls
- **Database operations**: Connect to Supabase or other databases
- **Authentication**: Handle login/logout logic
- **File uploads**: Process file uploads and storage

### **Components Directory (`/src/components`)**
**Purpose**: Reusable React components that can be used across multiple pages.

**Why it exists**:
- **Code reusability**: Write once, use everywhere
- **Maintainability**: Changes to a component update everywhere it's used
- **Consistency**: Ensures UI elements look and behave the same across the site

**Key components**:
- `Header.tsx` - Navigation bar that appears on all pages
- `Hero.tsx` - Eye-catching section for pages
- `ClientLayout.tsx` - Wrapper for pages that need special layout
- `LogoutButton.tsx` - Handles user logout functionality
- `ProtectedRoute.tsx` - Prevents unauthorized access to certain pages

### **Hooks Directory (`/src/hooks`)**
**Purpose**: Custom React hooks that encapsulate reusable state and logic.

**Why it exists**:
- **State management**: Share state between components
- **API calls**: Centralize data fetching logic
- **Authentication**: Manage user login state
- **Form handling**: Reusable form validation and submission logic

### **Utils Directory (`/src/utils`)**
**Purpose**: Helper functions and configurations that don't belong in components.

**Why it exists**:
- **Database connections**: Supabase client configuration
- **Helper functions**: Date formatting, data validation, etc.
- **Constants**: App-wide configuration values
- **Type definitions**: TypeScript type definitions

**Key files**:
- `supabase/client.ts` - Initializes connection to Supabase database

### **Middleware (`/middleware.ts`)**
**Purpose**: Runs before each request to handle authentication, redirects, and security.

**Why it exists**:
- **Route protection**: Prevent unauthorized access to certain pages
- **Authentication checks**: Verify user login status
- **Redirects**: Automatically redirect users based on their status
- **Security**: Add security headers and validate requests

## 🛠️ How to Run the Project

### **Prerequisites**
- Node.js 18+ installed on your machine
- npm or yarn package manager
- Git for version control

### **Installation Steps**

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/innovaassolutions/innovaasWebsite.git
   cd innovaasWebsite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

### **Available Scripts**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### **Other Platforms**
- **Netlify**: Connect repository and set build command to `npm run build`
- **AWS Amplify**: Connect repository and configure build settings
- **DigitalOcean App Platform**: Connect repository and set Node.js environment

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Contact Form
CONTACT_EMAIL=your_contact_email
```

## 📝 Contributing

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and test thoroughly
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request** on GitHub

## 🐛 Troubleshooting

### **Common Issues**

1. **"Module not found" errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check that file paths are correct (case-sensitive)

2. **Build errors**:
   - Check that all environment variables are set
   - Ensure all imports are correct
   - Run `npm run lint` to check for code issues

3. **Database connection issues**:
   - Verify Supabase credentials in `.env.local`
   - Check that your Supabase project is active

### **Getting Help**

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Supabase documentation](https://supabase.com/docs)
- Create an issue in the GitHub repository

## 📄 License

This project is proprietary to Innovaas Solutions. All rights reserved.

## 🤝 Support

For support or questions:
- Email: [your-email@innovaas.com]
- GitHub Issues: [Create an issue](https://github.com/innovaassolutions/innovaasWebsite/issues)

---

**Last Updated**: December 2024
**Version**: 1.0.0
