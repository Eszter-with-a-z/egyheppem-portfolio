# GitHub Pages Deployment Guide

## Features Lost with Static Export

### ❌ What You'll Lose:

1. **Server Components & Server-Side Rendering (SSR)**
   - All pages are pre-rendered at build time
   - No dynamic data fetching on the server
   - Cannot use `async` components that fetch data server-side

2. **Dynamic Routes with Server Data**
   - Routes like `/projects/[id]` still work, but all possible paths must be known at build time
   - Need to use `generateStaticParams` to pre-generate all dynamic routes
   - Cannot create new routes dynamically after deployment

3. **API Routes**
   - No `/api` endpoints
   - Cannot handle form submissions server-side
   - Cannot use Server Actions

4. **Image Optimization**
   - Next.js automatic image optimization is disabled
   - Images are served as-is without resizing/optimization
   - Larger file sizes and slower loading

5. **Incremental Static Regeneration (ISR)**
   - Cannot update pages after build without redeploying
   - No on-demand revalidation

6. **Middleware**
   - No request/response manipulation
   - No redirects or rewrites at runtime

7. **Environment Variables**
   - Only `NEXT_PUBLIC_*` variables work (client-side only)
   - No server-side environment variables

### ✅ What Still Works:

- Client-side routing and navigation
- Client-side React components and hooks
- Static pages and layouts
- CSS and styling
- Client-side JavaScript interactions
- Image galleries and animations
- Forms (with client-side handling or external services)

---

## Step-by-Step Deployment Instructions

### Option 1: Using GitHub Actions (Recommended)

#### Step 1: Prepare Your Repository

1. **Extract the ZIP file** you downloaded from v0
2. **Update the repository name** in `next.config.mjs`:
   \`\`\`js
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   \`\`\`
   Replace `your-repo-name` with your actual GitHub repository name

3. **Initialize Git** (if not already done):
   \`\`\`bash
   cd your-project-folder
   git init
   git add .
   git commit -m "Initial commit"
   \`\`\`

#### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Important**: Name it exactly as you set in `basePath` above
3. Don't initialize with README, .gitignore, or license (you already have these)

#### Step 3: Push to GitHub

\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
git branch -M main
git push -u origin main
\`\`\`

#### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run and deploy your site

#### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the deployment workflow run (takes 2-5 minutes)
3. Once complete, your site will be live at:
   \`\`\`
   https://YOUR_USERNAME.github.io/your-repo-name/
   \`\`\`

#### Step 6: Update Links (if needed)

If images or links don't work, make sure all paths in your code use relative paths or include the base path.

---

### Option 2: Manual Deployment (Without GitHub Actions)

#### Step 1: Build the Static Site

1. **Extract the ZIP file**
2. **Update `next.config.mjs`** with your repo name (see Option 1, Step 1)
3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
4. **Build the site**:
   \`\`\`bash
   npm run build
   \`\`\`
   This creates an `out` folder with static files

#### Step 2: Create GitHub Repository

Same as Option 1, Step 2

#### Step 3: Deploy the `out` Folder

You have two approaches:

**Approach A: Using gh-pages branch**

1. Install gh-pages package:
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. Add to `package.json` scripts:
   \`\`\`json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   \`\`\`

3. Deploy:
   \`\`\`bash
   npm run deploy
   \`\`\`

**Approach B: Manual gh-pages branch**

1. Create and switch to gh-pages branch:
   \`\`\`bash
   git checkout --orphan gh-pages
   \`\`\`

2. Remove all files:
   \`\`\`bash
   git rm -rf .
   \`\`\`

3. Copy contents of `out` folder:
   \`\`\`bash
   cp -r out/* .
   \`\`\`

4. Add .nojekyll file:
   \`\`\`bash
   touch .nojekyll
   \`\`\`

5. Commit and push:
   \`\`\`bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   \`\`\`

#### Step 4: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **gh-pages** branch and **/ (root)** folder
4. Click **Save**

#### Step 5: Access Your Site

Your site will be available at:
\`\`\`
https://YOUR_USERNAME.github.io/your-repo-name/
\`\`\`

---

## Troubleshooting

### Images Not Loading
- Make sure all image paths start with `/` or use relative paths
- Check that `basePath` in `next.config.mjs` matches your repo name

### 404 Errors
- Ensure `trailingSlash: true` is set in `next.config.mjs`
- Check that `.nojekyll` file exists in the output

### Styles Not Loading
- Verify `basePath` is correctly set
- Check browser console for 404 errors on CSS files

### Deployment Failed
- Check the Actions tab for error messages
- Ensure GitHub Pages is enabled in repository settings
- Verify you have the correct permissions

---

## Important Notes

1. **Every time you make changes**, you need to:
   - Rebuild: `npm run build`
   - Redeploy (push to main for GitHub Actions, or run deploy script)

2. **The site is completely static** - no server-side processing

3. **All data must be included at build time** - you cannot fetch new data after deployment

4. **For this portfolio**, the main impact is:
   - All project data must be in the mock-data.ts file
   - Cannot add new projects without rebuilding and redeploying
   - No contact form backend (need external service like Formspree)
   - No dynamic image optimization

---

## Alternative: Keep Full Features with Vercel

If you want to keep all Next.js features, deploy to Vercel instead:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel is free for personal projects and supports all Next.js features.
