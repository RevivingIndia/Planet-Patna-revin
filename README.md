# Planet Patna - Museum Website

A modern, responsive museum website built with Next.js, showcasing the rich heritage and culture of Patna, one of India's oldest cities.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Hero Slider**: Auto-rotating hero section with smooth transitions
- **Modern UI Components**: Clean and professional design with smooth animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Interactive contact form for visitor inquiries
- **Service Showcase**: Highlighting museum services including interactive exhibits, guided tours, café, and gift shop
- **Exhibits Gallery**: Comprehensive display of museum collections and artifacts

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)
- **Icons**: SVG-based custom icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd planet-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
planet-website/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero slider section
│   ├── About.tsx           # About section
│   ├── Exhibits.tsx        # Exhibits showcase
│   ├── Services.tsx        # Services section
│   └── Contact.tsx         # Contact form
└── public/                 # Static assets
```

## 🎨 Sections

1. **Hero Section**: Eye-catching slider with museum highlights
2. **About Section**: Information about Planet Patna museum
3. **Exhibits Section**: Showcase of museum collections
4. **Services Section**: Museum amenities and offerings
5. **Contact Section**: Contact form and information

## 🛠️ Customization

### Updating Content

- **Hero Slides**: Edit `components/Hero.tsx` to modify slider content
- **Services**: Update `components/Services.tsx` to change service offerings
- **Exhibits**: Modify `components/Exhibits.tsx` to update exhibit information
- **Contact Info**: Edit `components/Footer.tsx` and `components/Contact.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes in each component

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact: contact@planetpatna.com

---

Built with ❤️ using Next.js and Tailwind CSS
# PatnaPlanet
