# Quick Start Guide

## 🚀 Get Running in 60 Seconds

### 1. Navigate to Project
```bash
cd zerogravity-photography
```

### 2. Install Dependencies (First Time Only)
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Visit: **http://localhost:5173**

---

## 🎨 First Customizations

### Change Studio Name
1. Open `src/config.js`
2. Find `studioName: "Kanna Photography"`
3. Replace with your studio name
4. Save (auto-reloads in browser)

### Add Your Logo
1. Put your logo in `public/` folder (e.g., `public/logo.png`)
2. In `src/config.js`, set:
   ```javascript
   logo: {
     imageUrl: "/logo.png",
     width: "120px",
   }
   ```

### Update Contact Info
In `src/config.js`:
```javascript
contact: {
  email: "your@email.com",
  phone: "your-phone",
  address: "your-address",
}
```

### Add Portfolio Images
1. Add images to `public/images/` folder
2. In `src/config.js`:
   ```javascript
   images: {
     portfolioImages: [
       "/images/photo1.jpg",
       "/images/photo2.jpg",
       // ...
     ],
   }
   ```

---

## 📋 Common Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/config.js` | **⭐ Main configuration - edit this!** |
| `src/index.css` | Colors and styling |
| `src/components/` | Page sections |
| `public/images/` | Your images go here |

---

## 🔥 Pro Tips

1. **Keep dev server running** - Changes auto-reload
2. **Start with config.js** - Easiest customizations
3. **Use WebP images** - Better performance
4. **Compress images** - Use TinyPNG or Squoosh
5. **Test mobile** - Use browser DevTools (Cmd+Opt+I)

---

## 🆘 Need Help?

- **Detailed setup**: See [README.md](README.md)
- **Customization**: See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
- **Project info**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🚢 Deploy to Production

### Option 1: Netlify
1. Push code to GitHub
2. Connect repo on Netlify
3. Done! (auto-deploys)

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Build First
```bash
npm run build
# Output in dist/ folder
```

---

**That's it! You're ready to go!** 🎉
