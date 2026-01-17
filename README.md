# New Look Paving & Masonry Website

A modern, responsive website for New Look Paving & Masonry built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful, professional design with smooth animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Proper meta tags, structured data, and sitemap
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Contact Form**: Validated form with spam protection
- **Interactive Gallery**: Before/after slider, lightbox, and category filtering
- **Service Pages**: Dynamic routing for individual service pages
- **Testimonials Carousel**: Auto-rotating customer reviews
- **Promotional Section**: Coupon-style cards for special offers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd newlook
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services pages
│   │   └── [slug]/        # Dynamic service pages
│   ├── terms/             # Terms of service
│   ├── error.tsx          # Error boundary
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form section
│   ├── CookieConsent.tsx  # Cookie consent banner
│   ├── Footer.tsx         # Site footer
│   ├── Gallery.tsx        # Project gallery
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Promotions.tsx     # Promotional coupons
│   ├── ServicePageContent.tsx # Service page template
│   ├── Services.tsx       # Services section
│   ├── Stats.tsx          # Statistics counter
│   └── Testimonials.tsx   # Testimonials carousel
└── public/
    └── images/            # Static images
```

## 🖼️ Adding Images

Place your images in the `public/images/` directory:

- `hero-driveway.jpg` - Hero section background
- `about-bg.jpg` - About section background
- `about-team.jpg` - Team photo
- `google-logo.png` - Google logo for reviews
- `gallery/` - Gallery images
  - `driveway-1.jpg`, `driveway-1-before.jpg`, etc.
  - `patio-1.jpg`, `patio-2.jpg`, etc.
  - `roofing-1.jpg`, `roofing-2.jpg`, etc.
  - `siding-1.jpg`, `siding-2.jpg`, etc.
- `services/` - Service page hero images
  - `driveways-hero.jpg`
  - `patios-hero.jpg`
  - `roofing-hero.jpg`
  - etc.
- `testimonials/` - Customer photos
  - `customer-1.jpg`, `customer-2.jpg`, etc.

## ⚙️ Environment Variables

Create a `.env.local` file for environment variables:

```env
# Email service (optional - for contact form)
RESEND_API_KEY=your_resend_api_key

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

## 📧 Contact Form Setup

The contact form is ready to use. To enable email sending:

1. Sign up for [Resend](https://resend.com)
2. Add your API key to `.env.local`
3. Uncomment the email sending code in `src/app/api/contact/route.ts`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```ts
colors: {
  primary: "#1e3a8a",   // Main blue
  accent: "#16a34a",    // Green accent
  dark: "#1f2937",      // Dark gray
  light: "#f3f4f6",     // Light gray
  gold: "#fbbf24",      // Gold/yellow
}
```

### Contact Information

Update company info in:
- `src/app/layout.tsx` (structured data)
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`
- `src/components/Header.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Alt text for images
- [x] Heading hierarchy

## 🧪 Testing Checklist

- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check responsive design on all devices
- [ ] Test gallery lightbox and before/after slider
- [ ] Verify smooth scroll behavior
- [ ] Test mobile navigation
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse performance audit

## 📄 License

© 2026 New Look Paving & Masonry. All rights reserved.
