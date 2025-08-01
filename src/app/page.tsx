'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaTruck, FaLeaf, FaHeart } from 'react-icons/fa';

// Lazy load components to reduce initial bundle size
const ProductCard = lazy(() => import('@/components/ProductCard'));
const ComboCard = lazy(() => import('@/components/ComboCard'));

// Import data
import productsData from '@/data/products.json';
import combosData from '@/data/combos.json';

// Optimized background images with smaller sizes
const backgroundImages = [
  {
    src: '/images/julia-zolotova-M_xIaxQE3Ms-unsplash.webp',
    alt: 'Fresh fruits and vegetables display',
    priority: true
  },
  {
    src: '/images/pexels-solodsha-8605817.webp',
    alt: 'Healthy food preparation',
    priority: false
  },
  {
    src: '/images/pexels-jeshoots-4972.webp',
    alt: 'Colorful fruit basket',
    priority: false
  },
  {
    src: '/images/pexels-david-disponett-1118410-2161650.webp',
    alt: 'Fresh produce market',
    priority: false
  },
  {
    src: '/images/pexels-mehranb-86649.webp',
    alt: 'Organic vegetables',
    priority: false
  },
];

// Loading component for lazy-loaded components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="loading-spinner"></div>
  </div>
);

export default function HomePage() {
  const [products, setProducts] = useState<any>(null);
  const [combos, setCombos] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
    setProducts(productsData);
    setCombos(combosData);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = "Hi! I'm interested in FrutNut products. Can you help me?";
    const whatsappUrl = `https://wa.me/919876303139?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Optimized Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden" role="banner" aria-label="Hero section">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={backgroundImages[currentImageIndex].src}
                alt={backgroundImages[currentImageIndex].alt}
                fill
                priority={backgroundImages[currentImageIndex].priority}
                quality={85}
                sizes="100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true"></div>
          
          {/* Gradient overlay for additional styling */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20" aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            >
              Healthy Living Starts Here
              <span className="block gradient-text">– with FrutNut 🍉</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg"
            >
              From Nature&apos;s Basket, to Everyone&apos;s Heart. Fresh fruits, sprouts, and healthy snacks delivered to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={handleWhatsAppOrder}
                className="btn-primary flex items-center space-x-2 focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Order now via WhatsApp"
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                <span>Order Now</span>
              </motion.button>
              
              <Link href="/menu">
                <motion.button
                  className="btn-outline flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-white text-gray-800 hover:bg-white focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View our menu"
                >
                  <span>View Menu</span>
                  <FaArrowRight size={16} aria-hidden="true" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" role="tablist" aria-label="Background image navigation">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                role="tab"
                aria-selected={index === currentImageIndex}
                aria-label={`Go to background image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" role="region" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="sr-only">Our Features</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Freshness ✔</h3>
              <p className="text-gray-600">Daily fresh preparation with premium quality ingredients</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health ✔</h3>
              <p className="text-gray-600">Nutritious and healthy options for your well-being</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery across Chandigarh & Mohali</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 section-gradient" role="region" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular healthy snacks and fresh fruit combinations
            </p>
          </motion.div>

          {products && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {Object.entries(products).map(([category, categoryProducts]: [string, any]) => {
                const product = categoryProducts[0]; // Get first product from each category
                return (
                  <motion.div key={category} variants={itemVariants}>
                    <Suspense fallback={<LoadingSpinner />}>
                    <ProductCard product={product} category={category} />
                    </Suspense>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <motion.button
                className="btn-secondary flex items-center space-x-2 mx-auto focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View all our products"
              >
                <span>View All Products</span>
                <FaArrowRight size={16} aria-hidden="true" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Combo Packs Section */}
      <section className="py-16 bg-white" role="region" aria-labelledby="combos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="combos-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Premium Combo Packs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our curated combo packs - perfect for daily health routines
            </p>
          </motion.div>

          {combos && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {combos.combos.map((combo: any, index: number) => (
                <motion.div key={combo.id} variants={itemVariants}>
                  <Suspense fallback={<LoadingSpinner />}>
                  <ComboCard combo={combo} />
                  </Suspense>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <motion.button
                className="btn-outline flex items-center space-x-2 mx-auto focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View our menu and combo packs"
              >
                <span>View Menu & Combos</span>
                <FaArrowRight size={16} aria-hidden="true" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white" role="region" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Healthy Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of customers who trust FrutNut for their daily dose of health and freshness
            </p>
            
            <motion.button
              onClick={handleWhatsAppOrder}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 mx-auto focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Order on WhatsApp"
            >
              <FaWhatsapp size={24} aria-hidden="true" />
              <span>Order on WhatsApp</span>
            </motion.button>
            
            <p className="text-sm opacity-75 mt-4">
              Customization also available as per demand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Order Button for Mobile */}
      <motion.button
        onClick={handleWhatsAppOrder}
        className="sticky-order-btn bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus-ring"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        aria-label="Quick order via WhatsApp"
      >
        <FaWhatsapp size={24} aria-hidden="true" />
      </motion.button>
    </div>
  );
}
