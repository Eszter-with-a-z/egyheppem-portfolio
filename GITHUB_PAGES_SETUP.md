# GitHub Pages Deployment Guide

## Step-by-Step Deployment Instructions

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

