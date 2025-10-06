# Deployment Instructions

## Quick GitHub Upload (Option A - Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name your repository: `omni-harvest-global-website`
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 2: Upload Files
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop these files/folders:
   - `index.html`
   - `README.md`
   - `DEPLOYMENT.md`
   - `.gitignore`
   - `assets/` folder (with all its contents)
3. Add a commit message: `"Initial upload: OmniHarvestGlobal website"`
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to your repository **"Settings"** tab
2. Scroll down to **"Pages"** section (left sidebar)
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Select **"/ (root)"** folder
6. Click **"Save"**
7. Your site will be live at: `https://yourusername.github.io/omni-harvest-global-website`

### Step 4: Add Images (Important!)
You need to add these image files to the `assets/images/` folder:
- `OmniHarvestGlobalLogo.png` (company logo)
- `v1.jpg`, `v2.jpg`, `v3.jpg`, `v4.jpg`, `v5.jpg` (hero carousel images)

**How to add images:**
1. Go to `assets/images/` folder in your repository
2. Click **"Add file"** → **"Upload files"**
3. Upload all your image files
4. Commit the changes

## Alternative: Git Command Line (Option B)

If you prefer using Git commands:

```bash
# Navigate to your project folder
cd omni-harvest-global-website

# Initialize Git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: OmniHarvestGlobal website"

# Add your GitHub repository as remote (replace with your actual URL)
git remote add origin https://github.com/yourusername/omni-harvest-global-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Custom Domain (Optional)

To use a custom domain like `omniharvestglobal.com`:

1. In repository Settings → Pages
2. Enter your custom domain in the "Custom domain" field
3. Add a `CNAME` file to your repository with just your domain name
4. Update your DNS settings to point to GitHub Pages

## Troubleshooting

**Images not showing?**
- Make sure all image files are in the `assets/images/` folder
- Check that file names match exactly (case-sensitive)
- Ensure images are uploaded to the correct repository folder

**Site not updating?**
- GitHub Pages can take a few minutes to update
- Check the Actions tab for any deployment errors
- Make sure you're looking at the correct URL

**Styling issues?**
- Verify that `assets/css/styles.css` is properly linked in `index.html`
- Check browser developer tools for any 404 errors

## Next Steps

After deployment:
1. Test your website thoroughly on different devices
2. Update the contact form endpoint (Formspree setup)
3. Add Google Analytics if needed
4. Consider setting up a custom domain
5. Regularly update content as needed
