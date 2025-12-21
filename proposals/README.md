# Client Proposals System

This folder contains HTML proposals for clients, secured with unique access tokens.

## How It Works

1. Each client has their own folder in `/proposals/[client-name]/`
2. Place the proposal HTML file as `index.html` in their folder
3. Each client gets a unique, secret access token
4. They access their proposal via: `yourdomain.com/proposal/[token]`

## Security Features

- ✅ Files are NOT in the `public/` directory (not directly accessible)
- ✅ Each proposal requires a unique token to access
- ✅ Tokens can have expiration dates
- ✅ Invalid tokens return 404 (proposal not found)
- ✅ Search engines are blocked from indexing proposals

## Adding a New Client Proposal

### Step 1: Create Client Folder
```bash
mkdir -p proposals/client-name
```

### Step 2: Add HTML File
Place the proposal HTML as `index.html`:
```
proposals/client-name/index.html
```

### Step 3: Generate a Secure Token
Run this command to generate a random token:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

Example output: `7a3f2d9e1c5b8a4f6e2d9c1b7a3f2e5d`

### Step 4: Add Token to Configuration
Edit `src/config/proposal-tokens.ts` and add:
```typescript
{
  token: 'your-generated-token-here',
  clientFolder: 'client-name',
  clientName: 'Client Display Name',
  createdAt: '2025-12-21',
  expiresAt: '2026-01-21', // Optional - remove if no expiration
},
```

### Step 5: Share the Link
Send the client their unique URL:
```
https://yourdomain.com/proposal/your-generated-token-here
```

## Current Proposals

| Client | Folder | Token | Created |
|--------|--------|-------|---------|
| Leaning with Meaning | `leaningwithmeaning` | `a7f3k9m2p5w8x1v6n4b9` | 2025-12-21 |

## Important Notes

⚠️ **Keep tokens secret!** Anyone with the token can view the proposal.

⚠️ **This folder is in Git** - If your repository is public, proposals will be visible on GitHub. Consider:
- Making your repository private, OR
- Adding `proposals/` to `.gitignore` (but proposals won't deploy to production)

## Folder Structure

```
proposals/
├── README.md (this file)
├── leaningwithmeaning/
│   └── index.html
└── [other-clients]/
    └── index.html
```
