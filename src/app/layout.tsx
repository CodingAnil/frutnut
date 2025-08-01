import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FrutNut - The Fresh Fruit Store | Healthy Living Starts Here',
  description: 'FrutNut offers fresh fruits, sprouts, boiled items, and dry fruits in Mohali & Chandigarh. Free delivery, customizable packs, and healthy snacking options. Order now!',
  keywords: 'fresh fruits, healthy snacks, sprouts, dry fruits, Mohali, Chandigarh, home delivery, FrutNut',
  authors: [{ name: 'FrutNut' }],
  creator: 'FrutNut',
  publisher: 'FrutNut',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://frutnut.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FrutNut - The Fresh Fruit Store',
    description: 'Healthy Living Starts Here – with FrutNut! Fresh fruits, sprouts, and healthy snacks in Mohali & Chandigarh.',
    url: 'https://frutnut.com',
    siteName: 'FrutNut',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FrutNut - Fresh Fruits and Healthy Snacks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrutNut - The Fresh Fruit Store',
    description: 'Healthy Living Starts Here – with FrutNut! Fresh fruits, sprouts, and healthy snacks.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "FrutNut",
              "description": "The Fresh Fruit Store - Healthy Living Starts Here",
              "url": "https://frutnut.com",
              "telephone": "+919876303139",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mohali",
                "addressRegion": "Chandigarh",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.7046",
                "longitude": "76.7179"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "servesCuisine": ["Fresh Fruits", "Healthy Snacks", "Sprouts", "Dry Fruits"],
              "priceRange": "₹₹",
              "sameAs": [
                "https://instagram.com/frutnut2025",
                "https://instagram.com/frutnut"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
