# k72

A fast, minimal starter template for building React apps with Vite and modern tooling.

## 🛠 Features

- React + Vite for super-fast development and build times  
- Hot Module Replacement (HMR) so you see updates instantly  
- ESLint configured out of the box for code quality  
- GSAP animations for smooth transitions
- Tailwind CSS for styling
- React Router for navigation
- Clean folder structure:
  - `public/` — Static assets (fonts, videos)
  - `src/` — Your application code  
- Build script ready for production deployment on Vercel, Render, or Netlify

## 🚀 Getting Started

### Prerequisites  
- Node.js (>= 14.0)  
- npm or Yarn  

### Installation  
```bash
git clone https://github.com/saarthack/k72.git
cd k72
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel automatically detects Vite and sets the build command to `npm run build`
4. Deploy!

### Render
1. Push your code to GitHub
2. Go to [render.com](https://render.com) and create a new Static Site
3. Connect your repository
4. Set build command: `npm install && npm run build`
5. Set publish directory: `dist`
6. Deploy!

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and drag-and-drop your repo
3. Netlify auto-detects the configuration from `netlify.toml`
4. Deploy!

## ✅ What Was Fixed for Hosting

1. **Fixed import paths** - Corrected case-sensitive imports for VideoGame component
2. **Fixed asset paths** - Changed from `src/` prefixed paths to root-relative paths (`/assets/`, `/fonts/`)
3. **Updated vite.config.js** - Changed base path from `/K72/` to `/` for proper hosting
4. **Added public folder** - Moved static assets (fonts, videos) to `public/` for correct serving
5. **Fixed BrowserRouter** - Added explicit `basename="/"` for proper routing
6. **Created deployment configs** - Added `vercel.json`, `render.yaml`, and `netlify.toml` for seamless hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Stairs)
│   ├── home/            # Home page components
│   ├── Navigation/      # Navigation components
│   └── projects/        # Project display components
├── context/             # React Context (NavContext)
├── pages/               # Page components
├── assets/              # Image and video assets
├── fonts/               # Custom fonts
├── App.jsx
├── index.css
└── main.jsx

public/
├── fonts/               # Font files (copied here for hosting)
└── assets/              # Video and media files
```

## 📝 License

This project is open source and available under the MIT License.
