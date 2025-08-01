'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import ProductCard from '@/components/ProductCard';
import ComboCard from '@/components/ComboCard';

// Import data directly
const productsData = {
  "mixFruits": [
    {
      "id": "mf1",
      "name": "Mix Fruits",
      "description": "Fresh assortment of seasonal fruits including kiwi, berries, orange segments, and grapes",
      "image": "/images/mix-fruits.jpg",
      "quantities": [
        {
          "amount": "200gm",
          "price": 60
        },
        {
          "amount": "400gm",
          "price": 120
        }
      ],
      "healthBenefits": [
        "Rich in vitamins and antioxidants",
        "Boosts immune system",
        "Natural energy source",
        "Supports digestive health"
      ],
      "nutrition": {
        "calories": "80-120 kcal",
        "fiber": "3-5g",
        "vitaminC": "High",
        "antioxidants": "Rich"
      }
    }
  ],
  "sprouts": [
    {
      "id": "sp1",
      "name": "Sprouts (Moong & Channa)",
      "description": "Fresh green sprouts with chopped vegetables, onions, tomatoes, and cilantro",
      "image": "/images/sprouts.jpg",
      "quantities": [
        {
          "amount": "200gm",
          "price": 40,
          "note": "Moong & channa"
        }
      ],
      "healthBenefits": [
        "High protein content",
        "Rich in enzymes",
        "Supports weight loss",
        "Improves digestion"
      ],
      "nutrition": {
        "calories": "60-80 kcal",
        "protein": "8-10g",
        "fiber": "4-6g",
        "vitamins": "B-complex"
      }
    }
  ],
  "boiledItems": [
    {
      "id": "bi1",
      "name": "Boiled Egg",
      "description": "Freshly boiled egg served with green chutney",
      "image": "/images/boiled-egg.jpg",
      "quantities": [
        {
          "amount": "1 Pcs",
          "price": 12
        }
      ],
      "healthBenefits": [
        "Complete protein source",
        "Rich in essential amino acids",
        "Supports muscle building",
        "Good for brain health"
      ],
      "nutrition": {
        "calories": "70-80 kcal",
        "protein": "6-7g",
        "fat": "5-6g",
        "vitamins": "A, D, B12"
      }
    },
    {
      "id": "bi2",
      "name": "Boiled Potato",
      "description": "Freshly boiled potato cubes served with green chutney",
      "image": "/images/boiled-potato.jpg",
      "quantities": [
        {
          "amount": "250gm",
          "price": 30
        }
      ],
      "healthBenefits": [
        "Good source of complex carbohydrates",
        "Rich in potassium",
        "Supports heart health",
        "Provides sustained energy"
      ],
      "nutrition": {
        "calories": "200-250 kcal",
        "carbs": "45-50g",
        "fiber": "4-5g",
        "potassium": "High"
      }
    }
  ],
  "dryFruits": [
    {
      "id": "df1",
      "name": "Dry Fruits + Mix Fruits",
      "description": "Premium mix of almonds, kismis (raisins), kaju (cashews), walnuts with fresh fruits",
      "image": "/images/dry-fruits-mix.jpg",
      "quantities": [
        {
          "amount": "200gm",
          "price": 229,
          "note": "Almonds, Kismis, Kaju, Walnut Mix FRUITS"
        }
      ],
      "healthBenefits": [
        "Rich in healthy fats and proteins",
        "Excellent source of antioxidants",
        "Supports brain health",
        "Boosts energy levels"
      ],
      "nutrition": {
        "calories": "300-400 kcal",
        "protein": "8-12g",
        "healthyFats": "20-25g",
        "antioxidants": "Very High"
      }
    }
  ]
};

const combosData = {
  "combos": [
    {
      "id": "combo1",
      "name": "30 Days Combo - Mix Fruits + Sprouts",
      "description": "Perfect combination of fresh mix fruits and healthy sprouts for 30 days",
      "image": "/images/combo-mix-sprouts.jpg",
      "price": 2499,
      "duration": "30 days",
      "includes": [
        "200GM MIX FRUITS",
        "SPROUTS (Moong & Channa)"
      ],
      "benefits": [
        "Daily dose of vitamins and minerals",
        "High protein content from sprouts",
        "Supports weight management",
        "Improves overall health"
      ],
      "delivery": "Free delivery included",
      "customization": "Available as per demand"
    },
    {
      "id": "combo2",
      "name": "Premium Combo - Dry Fruits + Mix Fruits + Sprouts",
      "description": "Ultimate health package with premium dry fruits, fresh fruits, and sprouts",
      "image": "/images/combo-premium.jpg",
      "price": 5999,
      "duration": "30 days",
      "includes": [
        "ALMONDS, KISMIS, KAJU, WALNUT (200GM)",
        "MIX FRUITS",
        "SPROUTS (Moong & Channa)"
      ],
      "benefits": [
        "Premium dry fruits for brain health",
        "Fresh fruits for vitamins",
        "Sprouts for protein",
        "Complete nutrition package"
      ],
      "delivery": "Free delivery included",
      "customization": "Available as per demand"
    }
  ]
};

const categories = [
  { id: 'mixFruits', name: 'Mix Fruits', icon: '🍎' },
  { id: 'sprouts', name: 'Sprouts', icon: '🌱' },
  { id: 'boiledItems', name: 'Boiled Items', icon: '🥚' },
  { id: 'dryFruits', name: 'Dry Fruits', icon: '🥜' },
];

export default function MenuPage() {
  const [products, setProducts] = useState(productsData);
  const [combos, setCombos] = useState(combosData);
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' or 'combos'
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = "Hi! I'm interested in FrutNut menu items. Can you help me?";
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu & Combos</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our fresh and healthy selection of fruits, sprouts, boiled items, dry fruits, and combo packs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Toggle - Menu vs Combos */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg flex">
              <motion.button
                onClick={() => setActiveTab('menu')}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'menu'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Menu Items
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('combos')}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'combos'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Combo Packs
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'menu' ? (
              // Menu Items Content - All products in one continuous grid
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Collect all products from all categories */}
                {(() => {
                  const allProducts: any[] = [];
                  categories.forEach((category) => {
                    const categoryProducts = products[category.id as keyof typeof products];
                    if (categoryProducts && categoryProducts.length > 0) {
                      allProducts.push(...categoryProducts);
                    }
                  });

                  // Special layout for exactly 5 items: 3 on top, 2 below with wider cards
                  if (allProducts.length === 5) {
                    return (
                      <div className="space-y-8">
                        {/* Top row - 3 items */}
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                          {allProducts.slice(0, 3).map((product: any, index: number) => (
                            <motion.div 
                              key={product.id} 
                              variants={itemVariants}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                              <ProductCard product={product} category={product.category || 'menu'} />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Bottom row - 2 items centered with wider cards */}
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                        >
                          {allProducts.slice(3, 5).map((product: any, index: number) => (
                            <motion.div 
                              key={product.id} 
                              variants={itemVariants}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                              className="transform scale-105 hover:scale-110 transition-transform duration-300"
                            >
                              <ProductCard product={product} category={product.category || 'menu'} />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    );
                  }

                  // Default grid layout for other numbers of items
                  return (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                      {allProducts.map((product: any, index: number) => (
                        <motion.div 
                          key={product.id} 
                          variants={itemVariants}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <ProductCard product={product} category={product.category || 'menu'} />
                        </motion.div>
                      ))}
                    </motion.div>
                  );
                })()}

                {/* Empty State for Menu */}
                {Object.keys(products).every(key => 
                  !products[key as keyof typeof products] || 
                  products[key as keyof typeof products].length === 0
                ) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🍽️</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No products available</h3>
                    <p className="text-gray-600">We&apos;re working on adding more items to our menu.</p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              // Combos Content
              <motion.div
                key="combos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    Combo Packs
                  </h2>
                  <p className="text-gray-600 text-center">
                    Perfect combinations for your daily healthy snacking needs
                  </p>
                </motion.div>

                {combos && (() => {
                  const allCombos = combos.combos || [];
                  
                  // Special layout for exactly 5 items: 3 on top, 2 below with wider cards
                  if (allCombos.length === 5) {
                    return (
                      <div className="space-y-8">
                        {/* Top row - 3 items */}
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                          {allCombos.slice(0, 3).map((combo: any, index: number) => (
                            <motion.div 
                              key={combo.id} 
                              variants={itemVariants}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                              <ComboCard combo={combo} />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Bottom row - 2 items centered with wider cards */}
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                        >
                          {allCombos.slice(3, 5).map((combo: any, index: number) => (
                            <motion.div 
                              key={combo.id} 
                              variants={itemVariants}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                              className="transform scale-105 hover:scale-110 transition-transform duration-300"
                            >
                              <ComboCard combo={combo} />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    );
                  }

                  // Special layout for exactly 2 items: centered
                  if (allCombos.length === 2) {
                    return (
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                      >
                        {allCombos.map((combo: any, index: number) => (
                          <motion.div 
                            key={combo.id} 
                            variants={itemVariants}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <ComboCard combo={combo} />
                          </motion.div>
                        ))}
                      </motion.div>
                    );
                  }

                  // Default grid layout for other numbers of items
                  return (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {allCombos.map((combo: any, index: number) => (
                        <motion.div 
                          key={combo.id} 
                          variants={itemVariants}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <ComboCard combo={combo} />
                        </motion.div>
                      ))}
                    </motion.div>
                  );
                })()}

                {/* Empty State for Combos */}
                {combos && (!combos.combos || combos.combos.length === 0) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No combo packs available</h3>
                    <p className="text-gray-600">We&apos;re working on creating amazing combo packs for you.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer customization as per your demand. Contact us to create your perfect healthy snack pack!
            </p>
            
            <motion.button
              onClick={handleWhatsAppOrder}
              className="btn-primary flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={20} />
              <span>Customize Your Order</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Order Button for Mobile */}
      <motion.button
        onClick={handleWhatsAppOrder}
        className="sticky-order-btn bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <FaWhatsapp size={24} />
      </motion.button>
    </div>
  );
} 