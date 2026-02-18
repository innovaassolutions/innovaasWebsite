# Deploy Umami Analytics to Railway

## Context
We need self-hosted analytics across all 6 Innovaas websites. Umami (v3.0.3) is deployed on Railway using the pre-built Docker image. A dedicated Supabase PostgreSQL database is used for storage (separate from NovaCRM).

## Approach: Pre-built Docker Image
Use `ghcr.io/umami-software/umami:latest` rather than building from the cloned source. No customization is needed — this is the simplest, fastest path. Migrations run automatically on boot.

## Current Status
- **Step 1 (Railway setup) is DONE** — Umami is deployed and running on Railway.
- **Step 3 (first login & website setup) is DONE** — All 6 websites added, UUIDs recorded.
- **Step 4 (tracking scripts) is DONE** — All 6 layout files updated with real website IDs.
- **Step 2 (custom domain) is TODO** — Need to set up `analytics.innovaas.co` CNAME.
- **Step 5 (verification) is TODO** — Verify tracking after custom domain + deploys.

---

## Step 1: Railway Setup ✅ DONE

- Railway project created with `ghcr.io/umami-software/umami:latest` Docker image
- Environment variables set:
  - `DATABASE_URL` = Supabase **Session mode pooler** connection string (port `5432`). Uses dedicated Supabase project `grhlyjbhdxhuzmmlokod` (not shared with NovaCRM).
  - `APP_SECRET` = random 64-char hex string
- Umami listens on port `8080` (auto-detected by Railway)

> **Note on database**: A dedicated Supabase project was created for Umami to avoid Prisma migration conflicts with existing schemas. The Session mode pooler (not Direct) is required because Railway containers cannot reach Supabase's direct connection over IPv6.

## Step 2: Custom Domain — TODO

1. Add custom domain `analytics.innovaas.co` in Railway service settings → Networking
2. Add CNAME DNS record at your DNS provider:
   ```
   Type: CNAME
   Name: analytics
   Value: <railway-provided-value>.up.railway.app
   ```
3. Railway auto-provisions SSL via Let's Encrypt (1-5 min after DNS propagates)

## Step 3: First Login & Website Setup ✅ DONE

1. Logged in with default credentials and changed password
2. All 6 websites added with UUIDs:

| Site | Domain | Website ID (UUID) |
|------|--------|-------------------|
| Innovaas (Main) | `innovaas.co` | `8703e9d2-01a7-4301-9700-f1362c9bda40` |
| FlowForge | `flowforge.innovaas.co` | `38c8edc6-dece-4a73-ac23-54b7a12b6234` |
| NovaCRM | `novacrm.innovaas.co` | `26d1334e-443a-40f3-9912-e40d409c02dc` |
| NovaVoice | `novavoice.innovaas.co` | `970d2eb8-3a71-4ec5-9221-be48bbc00058` |
| NovaKMS | `novakms.innovaas.co` | `6342c379-c6a4-47d7-877b-e351404c73a1` |
| NovaPredict | `novapredict.innovaas.co` | `d9d3bbb4-8829-493c-b799-36117cfc7959` |

## Step 4: Add Umami Tracking Script to All 6 Sites ✅ DONE

Tracking scripts have been added to all 6 root `layout.tsx` files with real website IDs.

### Files modified:

| Site | File | Website ID |
|------|------|------------|
| innovaas.co | `innovaasWebsite/src/app/layout.tsx` | `8703e9d2-01a7-4301-9700-f1362c9bda40` |
| flowforge.innovaas.co | `innovaasflowforge/app/layout.tsx` | `38c8edc6-dece-4a73-ac23-54b7a12b6234` |
| novacrm.innovaas.co | `NovaCRM/novacrm/app/layout.tsx` | `26d1334e-443a-40f3-9912-e40d409c02dc` |
| novavoice.innovaas.co | `novavoice/src/app/layout.tsx` | `970d2eb8-3a71-4ec5-9221-be48bbc00058` |
| novakms.innovaas.co | `kms/src/app/layout.tsx` | `6342c379-c6a4-47d7-877b-e351404c73a1` |
| novapredict.innovaas.co | `UnsSmartMaintenance/src/app/layout.tsx` | `d9d3bbb4-8829-493c-b799-36117cfc7959` |

Each has:

```tsx
<Script
  src="https://analytics.innovaas.co/script.js"
  data-website-id="<UUID>"
  strategy="afterInteractive"
/>
```

## Step 5: Verification — TODO

For each site (after custom domain setup + deploy):
1. Open browser DevTools → Network tab
2. Filter for `script.js` — should see 200 from `analytics.innovaas.co`
3. Filter for `api/send` — should see POST requests as you navigate
4. Check Umami dashboard — real-time visitors should appear within seconds

## Cost Estimate
- Umami container on Railway: ~$5-7/mo
- Database: Supabase free tier (dedicated project)
- **Total: ~$5-7/mo**

## Notes
- CORS is pre-configured in Umami (`Access-Control-Allow-Origin: *`) — cross-origin tracking works out of the box
- Ad blockers may block `script.js` — can optionally rename via `TRACKER_SCRIPT_NAME` env var later
- The cloned umami-analytics repo at `/documents/coding/projects/umami-analytics/` is not needed for this deployment (we're using the pre-built image)
- Railway containers cannot reach Supabase Direct connections over IPv6 — must use Session mode pooler
