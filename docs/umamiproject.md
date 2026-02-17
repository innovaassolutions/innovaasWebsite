# Deploy Umami Analytics to Railway

## Context
We need self-hosted analytics across all 6 Innovaas websites. Umami (v3.0.3) is already cloned locally but never configured or deployed. Railway will host the Umami app container, and the existing Supabase PostgreSQL database (shared with NovaCRM) will be used for storage.

## Approach: Pre-built Docker Image
Use `ghcr.io/umami-software/umami:latest` rather than building from the cloned source. No customization is needed — this is the simplest, fastest path. Migrations run automatically on boot.

## Current Status
- **Step 4 (tracking scripts) is DONE** — all 6 layout files have the Umami `<Script>` tag with placeholder `WEBSITE_ID_FROM_UMAMI` values.
- **Steps 1-3 are BLOCKED** — Railway requires a plan upgrade before a new project can be deployed.

---

## Step 1: Railway Setup (Manual — Dashboard)

These steps must be done interactively:

1. **Authenticate Railway CLI**: `railway login`
2. **Create new Railway project** called `umami-analytics` (via dashboard or `railway init`)
3. **Add Docker image service**: `ghcr.io/umami-software/umami:latest`
4. **Set environment variables** on the Umami service:
   - `DATABASE_URL` = Supabase **direct** connection string (port `5432`, NOT the pooled `6543` port). Format: `postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres`. Find this in Supabase Dashboard → Settings → Database → Connection string → URI (use "Direct" mode).
   - `APP_SECRET` = random 32+ char string (generate with `openssl rand -hex 32`)
   - `PORT` = `3000`
5. **Set health check path**: `/api/heartbeat`
6. **Generate a public domain** to test initially (`*.up.railway.app`)

> **Note on shared database**: Umami creates its own tables (`website`, `session`, `website_event`, etc.) which won't conflict with NovaCRM's tables. Prisma migrations run automatically on first boot. Using Supabase's direct connection (not pooled) is required because Prisma needs a direct connection for migrations.

## Step 2: Custom Domain

1. Add custom domain `analytics.innovaas.co` in Railway service settings → Networking
2. Add CNAME DNS record at your DNS provider:
   ```
   Type: CNAME
   Name: analytics
   Value: <railway-provided-value>.up.railway.app
   ```
3. Railway auto-provisions SSL via Let's Encrypt (1-5 min after DNS propagates)

## Step 3: First Login & Website Setup

1. Visit `https://analytics.innovaas.co`
2. Login with default credentials: `admin` / `umami`
3. **Change password immediately** (Settings → Profile)
4. Add all 6 websites (Settings → Websites → Add website):
   - Innovaas (Main) → `innovaas.co`
   - FlowForge → `flowforge.innovaas.co`
   - NovaCRM → `novacrm.innovaas.co`
   - NovaVoice → `novavoice.innovaas.co`
   - NovaKMS → `novakms.innovaas.co`
   - NovaPredict → `novapredict.innovaas.co`
5. Record the generated website ID (UUID) for each site

## Step 4: Add Umami Tracking Script to All 6 Sites ✅ DONE

Tracking scripts have been added to all 6 root `layout.tsx` files with placeholder website IDs.

### Files modified:

| Site | File |
|------|------|
| innovaas.co | `innovaasWebsite/src/app/layout.tsx` |
| flowforge.innovaas.co | `innovaasflowforge/app/layout.tsx` |
| novacrm.innovaas.co | `novacrm/novacrm/app/layout.tsx` |
| novavoice.innovaas.co | `novavoice/src/app/layout.tsx` |
| novakms.innovaas.co | `kms/src/app/layout.tsx` |
| novapredict.innovaas.co | `unssmartmaintenance/src/app/layout.tsx` |

Each has:

```tsx
<Script
  src="https://analytics.innovaas.co/script.js"
  data-website-id="WEBSITE_ID_FROM_UMAMI"
  strategy="afterInteractive"
/>
```

**After Step 3**, replace `WEBSITE_ID_FROM_UMAMI` in each file with the real UUID from Umami, then commit and deploy each site.

## Step 5: Verification

For each site:
1. Open browser DevTools → Network tab
2. Filter for `script.js` — should see 200 from `analytics.innovaas.co`
3. Filter for `api/send` — should see POST requests as you navigate
4. Check Umami dashboard — real-time visitors should appear within seconds

## Cost Estimate
- Umami container on Railway: ~$5-7/mo
- Database: $0 (using existing Supabase)
- **Total: ~$5-7/mo**

## Notes
- CORS is pre-configured in Umami (`Access-Control-Allow-Origin: *`) — cross-origin tracking works out of the box
- Ad blockers may block `script.js` — can optionally rename via `TRACKER_SCRIPT_NAME` env var later
- The cloned umami-analytics repo at `/documents/coding/projects/umami-analytics/` is not needed for this deployment (we're using the pre-built image)
