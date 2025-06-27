# 🧠 Innovaas Knowledge Management System (KMS) Build Plan

This document outlines the full build plan for implementing a Knowledge Management System (KMS) with LLM integration for Innovaas Solutions Pte. Ltd., including support for audio and video files.

---

## ✅ Current Status

- Supabase project is live with Authentication enabled
- Login and Team Dashboard pages are functional
- "SOP Directory" icon will be renamed to "KMS" and linked to the KMS interface

---

## 🧱 Phase 1: Core KMS Structure & Upload Interface

### 🔹 Task 1: Supabase Database Schema

Create `documents` table:

```sql
id UUID PRIMARY KEY
title TEXT
type TEXT CHECK (type IN ('strategy', 'meeting', 'email', 'sop', 'idea', 'audio', 'video'))
tags TEXT[]
file_path TEXT
uploaded_by UUID REFERENCES auth.users
created_at TIMESTAMP DEFAULT NOW()
content_text TEXT
media_type TEXT CHECK (media_type IN ('text', 'audio', 'video'))
transcription TEXT
transcription_status TEXT CHECK (transcription_status IN ('pending', 'completed', 'error'))
embedding VECTOR (optional via pgvector)
```

### 🔹 Task 2: Supabase Storage Setup

- Create a `documents` storage bucket
- Enable Row-Level Security (RLS)
- Restrict access to authenticated users

### 🔹 Task 3: Document Upload UI (Next.js)

- Upload form to support:
  - `.pdf`, `.docx`, `.txt`
  - `.mp3`, `.wav`, `.mp4`, `.mov`
- Upload file to Supabase Storage
- Store metadata (title, type, tags)
- Mark `transcription_status = 'pending'` if audio/video

---

## 🧪 Phase 2: Ingestion, Transcription & Embeddings

### 🔹 Task 4: Document Text Parsing (Textual Files)

- Use `pdfplumber`, `python-docx`, etc.
- Extract plain text for embedding

### 🔹 Task 5: Audio/Video Transcription

- Use OpenAI Whisper (API or self-hosted)
- Script to:
  - Poll for files with `transcription_status = 'pending'`
  - Transcribe file
  - Update `transcription` and `status = 'completed'`

### 🔹 Task 6: Generate Embeddings

- Use OpenAI's `text-embedding-3-small`
- Embed `content_text` or `transcription`
- Store embedding in Supabase (`pgvector`) or external DB (e.g., Pinecone)

---

## 🔍 Phase 3: Search & Retrieval

### 🔹 Task 7: Build KMS Search UI

- Input field with tag/type filters
- Display previews with title, snippet, file type
- Include "source: audio/video" if applicable

### 🔹 Task 8: Search API

- Accept user query
- Convert to vector
- Search for matching documents
- Return top 3–5 matches with metadata

---

## 🤖 Phase 4: LLM-Powered Interface

### 🔹 Task 9: Build LLM Chat UI

- Text input + result display
- "Ask a question about our company documents"
- Show document excerpts used as sources

### 🔹 Task 10: Compose Prompt for ChatGPT

- Structure prompt using retrieved documents:
```text
You are an assistant for Innovaas.
Based on the following internal documents:
[...]
Answer this question:
[user question]
```

- Call OpenAI API (gpt-4o recommended)

### 🔹 Task 11: Log Query + Response (optional)

- Save user questions and LLM responses to Supabase
- Track usage or enable conversation history

---

## 🎨 Phase 5: UI Improvements & Integration

### 🔹 Task 12: Rename SOP Directory to "KMS"

- Update icon label on Team page
- Link to `/team/kms` or similar path

### 🔹 Task 13: Role-Based Access (Optional)

- Use Supabase Auth roles
- Restrict document visibility by department or team

### 🔹 Task 14: Admin-Only Upload Feature

- Hide upload controls from regular users
- Add access condition based on user metadata

---

## 🚀 Future Enhancements

| Feature             | Description                                              |
|---------------------|----------------------------------------------------------|
| Auto-tagging        | Use GPT to suggest tags & summaries on upload            |
| Email ingestion     | Parse emails into database (Gmail/IMAP integration)      |
| ChatGPT plugin      | Allow ChatGPT to directly access Innovaas KMS            |
| Slack/Teams bot     | Ask the KMS via corporate chat                           |
| OCR support         | Parse scanned PDFs using Tesseract                       |
| Multi-language      | Translate content before embedding (optional)            |
| Versioning          | Add version control to documents                         |

---

## 🔧 Tooling

| Component       | Tool/Service             |
|------------------|--------------------------|
| Backend DB       | Supabase (PostgreSQL)    |
| File Storage     | Supabase Storage         |
| Auth             | Supabase Auth            |
| Transcription    | OpenAI Whisper API       |
| Embeddings       | OpenAI `text-embedding-3-small` |
| UI               | Next.js                  |
| Vector Search    | pgvector / Pinecone      |
| LLM              | OpenAI `gpt-4o`          |

---

## 📋 Implementation Checklist

### Phase 1: Core Structure
- [ ] Create Supabase database schema
- [ ] Set up Supabase storage bucket
- [ ] Build document upload UI
- [ ] Test file upload functionality

### Phase 2: Processing
- [ ] Implement text parsing for documents
- [ ] Set up audio/video transcription pipeline
- [ ] Configure embedding generation
- [ ] Test end-to-end processing

### Phase 3: Search
- [ ] Build search UI components
- [ ] Implement vector search API
- [ ] Add filtering and sorting
- [ ] Test search accuracy

### Phase 4: LLM Integration
- [ ] Create chat interface
- [ ] Implement prompt engineering
- [ ] Connect to OpenAI API
- [ ] Add source attribution

### Phase 5: Polish
- [ ] Update navigation and branding
- [ ] Implement role-based access
- [ ] Add admin controls
- [ ] Performance optimization

---

## 🔗 Related Documentation

- [Development Setup](./development-setup.md)
- [Database Schema](./database-schema.md)
- [API Documentation](./api-documentation.md)

---

*Last updated: December 2024* 