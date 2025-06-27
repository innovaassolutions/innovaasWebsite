# ⚡ Quick Reference Guide

This is your go-to reference for the most important information about the Innovaas Website project and KMS development.

## 🚀 Quick Start Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code style
npm run type-check   # TypeScript validation
```

## 🧠 KMS Project Overview

### **What is KMS?**
Knowledge Management System with LLM integration for Innovaas Solutions Pte. Ltd.

### **Key Features**
- 📄 Document upload (PDF, DOCX, TXT)
- 🎵 Audio/Video transcription
- 🔍 Vector-based search
- 🤖 AI-powered Q&A interface
- 👥 Role-based access control

### **Tech Stack**
- **Frontend**: Next.js 14 with App Router
- **Backend**: Supabase (PostgreSQL + Storage)
- **AI**: OpenAI (Whisper + GPT-4o + Embeddings)
- **Search**: pgvector for vector similarity

## 📋 Implementation Phases

### **Phase 1: Core Structure** ✅
- [ ] Supabase database schema
- [ ] Storage bucket setup
- [ ] Upload UI

### **Phase 2: Processing** 🔄
- [ ] Text parsing
- [ ] Audio/video transcription
- [ ] Embedding generation

### **Phase 3: Search** 📝
- [ ] Search UI
- [ ] Vector search API
- [ ] Filtering system

### **Phase 4: LLM Integration** 📝
- [ ] Chat interface
- [ ] Prompt engineering
- [ ] OpenAI integration

### **Phase 5: Polish** 📝
- [ ] UI improvements
- [ ] Role-based access
- [ ] Admin controls

## 🔧 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Key File Locations

```
src/app/team/page.tsx          # Employee dashboard
src/components/                # Reusable components
src/utils/supabase/client.ts   # Database connection
docs/kms-build-plan.md         # Complete KMS guide
```

## 🐛 Common Issues

### **Development Server Won't Start**
```bash
# Check if port 3000 is in use
lsof -ti:3000 | xargs kill -9
```

### **Supabase Connection Issues**
- Verify environment variables
- Check Supabase project status
- Ensure RLS policies are configured

### **Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Getting Help

1. **Documentation**: [Full Docs](./README.md)
2. **KMS Guide**: [Build Plan](./kms-build-plan.md)
3. **Setup Guide**: [Development Setup](./development-setup.md)
4. **Issues**: Check project repository

## 🔗 Important Links

- **Supabase Dashboard**: https://supabase.com/dashboard
- **OpenAI API**: https://platform.openai.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Project Repository**: GitHub (private)

---

*Last updated: December 2024* 