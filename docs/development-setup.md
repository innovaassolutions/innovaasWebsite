# 🔧 Development Setup Guide

This guide will walk you through setting up the Innovaas Website project for local development.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

### **Required Software**
- **Node.js 18+** - JavaScript runtime
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** - Package manager (comes with Node.js)
  - Verify installation: `npm --version`
- **Git** - Version control
  - Download from: https://git-scm.com/
  - Verify installation: `git --version`

### **Recommended Tools**
- **VS Code** - Code editor with excellent Next.js support
  - Download from: https://code.visualstudio.com/
- **GitHub Desktop** - Visual Git interface (optional)
  - Download from: https://desktop.github.com/

## 🚀 Step-by-Step Setup

### **Step 1: Clone the Repository**

1. **Open your terminal/command prompt**
2. **Navigate to your projects directory**:
   ```bash
   cd ~/projects  # or wherever you keep your projects
   ```
3. **Clone the repository**:
   ```bash
   git clone https://github.com/innovaassolutions/innovaasWebsite.git
   ```
4. **Navigate into the project directory**:
   ```bash
   cd innovaasWebsite
   ```

### **Step 2: Install Dependencies**

1. **Install all required packages**:
   ```bash
   npm install
   ```
2. **Wait for installation to complete** (this may take a few minutes)
3. **Verify installation** by checking for `node_modules` folder

### **Step 3: Environment Configuration**

1. **Create environment file**:
   ```bash
   cp .env.example .env.local
   ```
   *Note: If `.env.example` doesn't exist, create `.env.local` manually*

2. **Add your Supabase credentials** to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   **How to get these values**:
   - Go to your Supabase project dashboard
   - Navigate to Settings → API
   - Copy the "Project URL" and "anon public" key

### **Step 4: Start Development Server**

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

3. **Verify the site loads** - You should see the Innovaas homepage

## 🛠️ Available Commands

### **Development Commands**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### **Useful Development Tips**

1. **Hot Reload**: The development server automatically reloads when you save files
2. **Error Overlay**: Errors appear in the browser with helpful debugging information
3. **Fast Refresh**: React components update without losing state
4. **Console Logs**: Check browser console and terminal for debugging information

## 🔍 Troubleshooting

### **Common Issues and Solutions**

#### **Port 3000 Already in Use**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

#### **Node Modules Issues**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Environment Variables Not Working**
- Ensure `.env.local` is in the root directory
- Restart the development server after adding environment variables
- Check that variable names start with `NEXT_PUBLIC_` for client-side access

#### **Supabase Connection Issues**
- Verify your Supabase URL and API key are correct
- Check that your Supabase project is active
- Ensure Row Level Security (RLS) policies are configured correctly

## 📁 Project Structure Overview

```
innovaasWebsite/
├── docs/                    # 📚 Project documentation
│   ├── README.md           # Documentation index
│   ├── kms-build-plan.md   # KMS implementation guide
│   └── development-setup.md # This file
├── src/
│   ├── app/                # Next.js pages and routes
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # Main project README
```

## 🔗 Next Steps

After setting up your development environment:

1. **Read the [KMS Build Plan](./kms-build-plan.md)** to understand upcoming features
2. **Explore the codebase** starting with `src/app/page.tsx`
3. **Check the [Project Overview](./project-overview.md)** for high-level architecture
4. **Review [API Documentation](./api-documentation.md)** for backend integration

## 🆘 Getting Help

If you encounter issues:

1. **Check this documentation** first
2. **Search existing issues** in the project repository
3. **Create a new issue** with detailed error information
4. **Contact the development team** for urgent matters

---

*Last updated: December 2024* 