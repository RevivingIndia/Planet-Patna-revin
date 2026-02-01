# Deployment Guide - Planet Patna Website

## 🚀 Quick Start (Local Development)

The development server is already running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.5:3000

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Planet Patna website"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., planetpatna.com)
   - Follow DNS configuration instructions

**Deployment Time**: ~2-3 minutes
**Cost**: Free for personal projects

---

### Option 2: Netlify

#### Steps:

1. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository
   - Configure build settings
   - Deploy

**Deployment Time**: ~3-5 minutes
**Cost**: Free tier available

---

### Option 3: AWS Amplify

#### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**
   - Review settings and deploy

**Deployment Time**: ~5-7 minutes
**Cost**: Pay-as-you-go

---

### Option 4: Docker Deployment

#### Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run

```bash
# Build Docker image
docker build -t planet-patna .

# Run container
docker run -p 3000:3000 planet-patna
```

---

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

#### Steps:

1. **Server Setup**
   ```bash
   # SSH into your server
   ssh user@your-server-ip

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2 (Process Manager)
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone <your-repo-url>
   cd planet-website

   # Install dependencies
   npm install

   # Build application
   npm run build

   # Start with PM2
   pm2 start npm --name "planet-patna" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name planetpatna.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔒 Environment Variables

If you add environment variables in the future, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://planetpatna.com
NEXT_PUBLIC_API_URL=https://api.planetpatna.com
```

**Note**: Never commit `.env.local` to version control!

---

## ✅ Pre-Deployment Checklist

- [ ] Test all pages and components locally
- [ ] Run `npm run build` successfully
- [ ] Check for console errors
- [ ] Test responsive design on multiple devices
- [ ] Verify all links work correctly
- [ ] Update contact information
- [ ] Add real images (if needed)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Test contact form functionality

---

## 📊 Post-Deployment

### Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Add analytics (Google Analytics, Plausible)

### Performance

- Test with Google PageSpeed Insights
- Check Core Web Vitals
- Optimize images if needed
- Enable caching

### SEO

- Submit sitemap to Google Search Console
- Add meta descriptions
- Configure Open Graph tags
- Set up robots.txt

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support

For deployment issues or questions:
- Email: contact@planetpatna.com
- Check Next.js documentation: https://nextjs.org/docs

---

**Happy Deploying! 🚀**

