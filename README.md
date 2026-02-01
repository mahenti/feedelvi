# Feed Elvi Inkeri

Premium animal feed pellets for livestock and poultry. Modern website built with React, Vite, and TailwindCSS.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahenti/feedelvi.git
cd feedelvi

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for production

```bash
npm run build
```

## Deployment Setup

### 1. Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote origin
git remote add origin https://github.com/mahenti/feedelvi.git

# Push to main branch
git push -u origin main
```

### 2. Setup Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite - just click "Deploy"
5. Your site will be live at `https://feed-elvi-inkeri.vercel.app`

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 3. Setup GitHub Actions (Auto-deploy)

For automatic deployments on every push:

1. Get Vercel tokens:
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create new token, copy it
   
2. Get Project ID:
   - Run `vercel link` in project folder
   - Or check `.vercel/project.json`

3. Add secrets to GitHub:
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN` - Your token from step 1
     - `VERCEL_ORG_ID` - From `.vercel/project.json`
     - `VERCEL_PROJECT_ID` - From `.vercel/project.json`

4. Push to GitHub - deployment workflow will run automatically!

## Project Structure

```
feed-elvi-inkeri/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions for auto-deploy
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   └── ProductsSection.tsx
│   │   ├── ui/              # UI components
│   │   └── ProductCard.tsx  # Product card component
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + CSS variables
├── vercel.json              # Vercel configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Features

- Responsive design
- Modern, premium agricultural color scheme
- Smooth animations and transitions
- Accessible components
- Optimized for performance

## License

MIT
