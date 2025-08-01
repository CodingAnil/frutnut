export default {
  titleTemplate: '%s | FrutNut',
  defaultTitle: 'FrutNut - The Fresh Fruit Store',
  description: 'Healthy Living Starts Here – with FrutNut! Fresh fruits, sprouts, boiled items, and dry fruits in Mohali & Chandigarh. Free delivery and customizable packs.',
  canonical: 'https://frutnut.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frutnut.com',
    siteName: 'FrutNut',
    title: 'FrutNut - The Fresh Fruit Store',
    description: 'Healthy Living Starts Here – with FrutNut! Fresh fruits, sprouts, and healthy snacks.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FrutNut - Fresh Fruits and Healthy Snacks',
      },
    ],
  },
  twitter: {
    handle: '@frutnut2025',
    site: '@frutnut',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'fresh fruits, healthy snacks, sprouts, dry fruits, Mohali, Chandigarh, home delivery, FrutNut, healthy living',
    },
    {
      name: 'author',
      content: 'FrutNut',
    },
    {
      name: 'theme-color',
      content: '#D32F2F',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
}; 