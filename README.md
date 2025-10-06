# OmniHarvestGlobal Exports - Static Website

A modern, responsive static website for OmniHarvestGlobal Exports, showcasing premium Indian agricultural produce exports.

## 🌾 About

OmniHarvestGlobal Exports is an Indian agricultural export company specializing in premium quality produce including potatoes, garlic, green chilli, ladyfinger, lauki, carrot, and sweet corn. This website serves as a digital showcase for their export capabilities and services.

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with earthy theme
- **Interactive Elements**: 
  - Hero image carousel with auto-rotation
  - Product showcase carousel
  - Mobile-friendly navigation
  - Smooth scrolling navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, minimal dependencies
- **Accessibility**: ARIA labels, keyboard navigation, screen reader friendly

## 🚀 Quick Start

### Option A: Direct Upload to GitHub (Recommended for beginners)

1. **Create a new GitHub repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `omni-harvest-global-website` or similar
   - Make it public for free hosting

2. **Upload files directly**
   - Inside your new repo, click **Add file** → **Upload files**
   - Drag and drop all files from this project:
     - `index.html`
     - `assets/` folder (with all subfolders)
     - `README.md`
   - Click **Commit changes**

3. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Scroll to **Pages** section
   - Select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Your site will be live at `https://yourusername.github.io/repository-name`

### Option B: Git Command Line

```bash
# Clone or initialize repository
git init
git add .
git commit -m "Initial commit: OmniHarvestGlobal website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## 📁 Project Structure

```
omni-harvest-global-website/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── .gitignore              # Git ignore file
└── assets/
    ├── css/
    │   └── styles.css      # All CSS styles
    ├── js/
    │   └── script.js       # JavaScript functionality
    └── images/             # Image assets
        ├── OmniHarvestGlobalLogo.png
        ├── v1.jpg          # Hero images
        ├── v2.jpg
        ├── v3.jpg
        ├── v4.jpg
        └── v5.jpg
```

## 🖼️ Image Assets

**Required Images:**
- `OmniHarvestGlobalLogo.png` - Company logo (used in header and footer)
- `v1.jpg` to `v5.jpg` - Hero carousel images (agricultural showcases)

**Image Requirements:**
- Logo: Square format, PNG with transparent background recommended
- Hero images: Landscape format, high resolution (1920x1080 recommended)
- All images should be optimized for web (compressed but high quality)

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming. Main colors are defined in `assets/css/styles.css`:

```css
:root{
  --brand:#1f7a4c;      /* Primary green */
  --brand-2:#2ea86b;    /* Secondary green */
  --accent:#f0b429;     /* Golden yellow */
  --ink:#132016;        /* Dark text */
  --bg:#fffdf7;         /* Background */
}
```

### Content
- Update company information in `index.html`
- Modify product portfolio in the products section
- Update contact information and form endpoint
- Customize FAQ section with relevant questions

### Form Integration
The contact form currently points to Formspree. To set up:
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `your-id` in the form action URL with your Formspree form ID

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in your web browser
3. For live reload during development, use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

### File Structure Best Practices
- Keep HTML semantic and accessible
- Use relative paths for assets
- Optimize images before adding to the project
- Test responsive design on multiple devices

## 📄 License

This project is created for OmniHarvestGlobal Exports. All rights reserved.

## 🤝 Contributing

This is a client project. For updates or modifications, please contact the development team.

## 📞 Support

For technical support or questions about this website:
- Email: contact@omniharvestglobal.com
- Check the GitHub Issues section for known issues

---

**Made with ❤️ for OmniHarvestGlobal Exports**
