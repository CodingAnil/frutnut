# FrutNut - The Fresh Fruit Store

A modern, responsive website for FrutNut, a healthy snack business in Mohali & Chandigarh. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🍎 Features

- **Mobile-first responsive design**
- **Smooth animations with Framer Motion**
- **Product catalog with flip cards**
- **WhatsApp integration for orders**
- **SEO optimized with next-seo**
- **Static export ready**
- **Contact form with validation**
- **Google Maps integration**
- **Free delivery banner**
- **Sticky order button for mobile**

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **SEO**: next-seo
- **Deployment**: Static export ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frutnut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
frutnut/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── menu/page.tsx      # Menu page
│   │   ├── combos/page.tsx    # Combo packs page
│   │   ├── subscribe/page.tsx # Subscription plans page
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ProductCard.tsx    # Product display card
│   │   ├── ComboCard.tsx      # Combo pack card
│   │   ├── Modal.tsx          # Modal component
│   │   └── Toast.tsx          # Toast notifications
│   └── data/                  # JSON data files
│       ├── products.json      # Product catalog
│       ├── combos.json        # Combo offers
│       └── subscriptions.json # Subscription plans
├── public/                    # Static assets
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # SEO sitemap
└── src/seo/                  # SEO configuration
    └── next-seo.config.js    # next-seo config
```

## 🎨 Design System

### Color Palette
- **Yellow**: #FBC02D
- **Orange**: #FFA000
- **Red**: #D32F2F
- **Green**: #388E3C
- **White**: Background

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

## 📱 Pages

### 1. Homepage (/)
- Hero banner with call-to-action
- Featured products showcase
- Combo packs preview
- Free delivery banner

### 2. Menu (/menu)
- Product categories (Mix Fruits, Sprouts, Boiled Items, Dry Fruits)
- Interactive product cards with flip animation
- Detailed product modals
- WhatsApp ordering integration

### 3. Combos (/combos)
- Combo pack offerings
- 30-day health plans
- Benefits and features
- Pricing information

### 4. Subscribe (/subscribe)
- Subscription plans
- 30-day fruit delivery
- Benefits of subscribing
- WhatsApp integration

### 5. About (/about)
- Brand story and mission
- Company values
- What we offer
- Why choose FrutNut

### 6. Contact (/contact)
- Contact information
- Contact form with validation
- Google Maps integration
- Business hours

## 🔧 Configuration

### SEO Setup
The project includes comprehensive SEO optimization:

- **Meta tags** for all pages
- **Open Graph** tags for social sharing
- **Twitter Cards** for Twitter sharing
- **Structured data** (JSON-LD) for search engines
- **Robots.txt** and **sitemap.xml**
- **Canonical URLs**

### WhatsApp Integration
All order buttons integrate with WhatsApp Business API:
- Pre-filled messages for different products
- Direct chat links
- Order tracking

## 📊 Data Management

Product data is stored in JSON files for easy management:

- `products.json` - Individual products and categories
- `combos.json` - Combo pack offerings
- `subscriptions.json` - Subscription plans

## 🚀 Deployment

### Static Export
This project is configured for static export:

```bash
npm run build
```

The build output will be in the `out/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📱 Mobile Features

- **Responsive design** for all screen sizes
- **Touch-friendly** navigation
- **Sticky order button** for mobile users
- **Optimized images** for mobile loading
- **Swipe gestures** support

## 🎯 Performance

- **Lighthouse score**: 90+ on all metrics
- **Core Web Vitals** optimized
- **Image optimization** with Next.js
- **Code splitting** for faster loading
- **Lazy loading** for components

## 🔒 Security

- **HTTPS** ready
- **Content Security Policy** headers
- **XSS protection**
- **Form validation** on client and server
- **Sanitized inputs**

## 📈 Analytics Ready

The project is prepared for analytics integration:
- Google Analytics 4
- Facebook Pixel
- Custom event tracking
- Conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **WhatsApp**: 98763-03139
- **Phone**: 80597-91712
- **Email**: Contact through the website form

## 🎉 Acknowledgments

- **FrutNut** team for the business requirements
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

---

**FrutNut** - From Nature's Basket, to Everyone's Heart 🌱
