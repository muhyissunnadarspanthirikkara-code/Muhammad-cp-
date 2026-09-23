# Muhammad CP - Personal Website 🌐

A modern, responsive, and animated personal profile card website for Muhammad CP.

## ✨ Features Included
- **Smooth Page Fade-In**: Fluid entrance animations with cubic-bezier easing and staggered delays.
- **Micro-Interactions**: Hover animations for buttons (scale, lift, brand glow, and shimmer light sweeps).
- **Responsive Across All Screens**: Fully responsive and optimized for mobile devices (320px+), safe area notches, tablets, and high-res desktop monitors.
- **Theme Switcher**: Dark Mode and Light Mode with system preference detection and `localStorage` persistence.
- **One-Click Actions**: Quick links to WhatsApp, Instagram, direct calling, and a copy phone number button with instant clipboard feedback.
- **Zero Build Tools Required**: Pure static HTML5, CSS3, and JavaScript — ready for instant GitHub Pages deployment.

---

## 🚀 How to Deploy to GitHub Pages

You can deploy this website to GitHub Pages in less than 2 minutes using either method below.

### Method 1: Using the GitHub Web Interface (Easiest - No Git required)

1. Log into your [GitHub Account](https://github.com).
2. Click the **+** (plus icon) at the top-right and select **New repository**.
3. Name your repository (e.g. `muhammadcp` or `muhammadcp.github.io`).
4. Keep it **Public** and leave all checkboxes unchecked (Do not add README or .gitignore yet).
5. Click **Create repository**.
6. On the new repository page, click the link that says **"uploading an existing file"**.
7. Drag and drop all the files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `.nojekyll`
   - `my-photo.jpg` (your profile picture)
8. Click **Commit changes**.
9. Now go to **Settings** > **Pages** (on the left menu under "Code and automation").
10. Under **Build and deployment** > **Branch**:
    - Select branch: `main`
    - Folder: `/ (root)`
    - Click **Save**.
11. Within 1–2 minutes, your website will be live at:
    `https://<your-username>.github.io/<repository-name>/`

---

### Method 2: Using Git Command Line

Open your terminal or PowerShell in this project folder and run:

```bash
# 1. Initialize git repository
git init -b main

# 2. Add all production files
git add .

# 3. Commit the changes
git commit -m "Initial release of Muhammad CP personal website"

# 4. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push files to GitHub
git push -u origin main
```

Next:
1. Open your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.

---

## 📸 Profile Photo Tip
To display your picture:
- Add a square photo of yourself named `my-photo.jpg` in the root folder.
- If no photo is added yet, a stylish fallback avatar icon will display automatically without any broken image errors.
