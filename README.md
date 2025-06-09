This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

The recommended way to deploy this Next.js app is to use [Netlify](https://www.netlify.com/).

### Netlify Deployment Instructions

1. **Push your code to GitHub.**
2. **Go to [Netlify](https://app.netlify.com/) and log in or create an account.**
3. **Click "Add new site" > "Import an existing project".**
4. **Connect your GitHub account and select your repository.**
5. **Configure the build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **(Optional) Set environment variable:**
     - `NEXT_PUBLIC_` variables as needed for your project
     - For Next.js 13+ with the app directory, you may need to set `NODE_VERSION` to match your local Node.js version
6. **Click "Deploy site".**
7. **Netlify will build and deploy your site.**
8. **After deployment, you will get a live URL to access your site.**

For more details, see the [Netlify Next.js documentation](https://docs.netlify.com/integrations/frameworks/next-js/overview/).
