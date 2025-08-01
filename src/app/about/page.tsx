'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaTruck, FaUsers, FaStar, FaAward } from 'react-icons/fa';

export default function AboutPage() {
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

  const values = [
    {
      icon: FaLeaf,
      title: 'Freshness',
      description: 'We ensure every product is prepared fresh daily with premium quality ingredients.',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: FaHeart,
      title: 'Health First',
      description: 'Your health is our priority. We provide nutritious and balanced healthy snacks.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaTruck,
      title: 'Free Delivery',
      description: 'Convenient free delivery across Chandigarh & Mohali for your comfort.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaUsers,
      title: 'Customer Focus',
      description: 'We believe in building lasting relationships with our valued customers.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const milestones = [
    { year: '2025', title: 'Founded', description: 'FrutNut was established with a vision to promote healthy living' },
    { year: '2025', title: 'First Customer', description: 'Started serving our first customers in Mohali & Chandigarh' },
    { year: '2025', title: 'Growing', description: 'Expanding our product range and customer base' },
    { year: 'Future', title: 'Vision', description: 'Aiming to become the leading healthy snack provider in the region' }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About FrutNut</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              From Nature's Basket, to Everyone's Heart
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey of FrutNut began with a simple yet powerful vision - to make healthy eating accessible, convenient, and delicious for everyone.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To promote healthy living by providing fresh, nutritious, and delicious fruit-based snacks that make healthy eating a daily habit rather than a chore.
                </p>
                <p className="text-gray-700">
                  We believe that everyone deserves access to quality nutrition, and we're committed to making healthy choices both affordable and convenient.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To become the most trusted and preferred healthy snack provider in Chandigarh and Mohali, known for our commitment to quality, freshness, and customer satisfaction.
                </p>
                <p className="text-gray-700">
                  We envision a community where healthy eating is the norm, and FrutNut is the go-to choice for nutritious daily snacks.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at FrutNut
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive range of healthy snacks and services designed for your well-being
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Mix Fruits</h3>
              <p className="text-gray-600">Daily fresh assortment of seasonal fruits including kiwi, berries, oranges, and grapes.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Healthy Sprouts</h3>
              <p className="text-gray-600">Protein-rich moong and channa sprouts with fresh vegetables and herbs.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🥚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Boiled Items</h3>
              <p className="text-gray-600">Freshly boiled eggs and potatoes served with healthy accompaniments.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🥜</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Dry Fruits</h3>
              <p className="text-gray-600">High-quality almonds, cashews, walnuts, and raisins for brain health.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Combo Packs</h3>
              <p className="text-gray-600">Curated 30-day combo packs combining multiple healthy options.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Convenient free delivery service across Chandigarh & Mohali.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 section-gradient-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The milestones that mark our commitment to healthy living
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose FrutNut?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for healthy snacking
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Quality Assurance</h3>
              </div>
              <p className="text-gray-700">
                We maintain the highest standards of quality in all our products. Every item is carefully selected and prepared fresh daily to ensure you get the best nutrition possible.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaAward className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Customer Satisfaction</h3>
              </div>
              <p className="text-gray-700">
                Your satisfaction is our top priority. We go above and beyond to ensure every customer has a positive experience with our products and service.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Health Focus</h3>
              </div>
              <p className="text-gray-700">
                Every product is designed with your health in mind. We focus on providing nutritious options that support your well-being and healthy lifestyle.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaTruck className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Convenience</h3>
              </div>
              <p className="text-gray-700">
                We make healthy eating convenient with our free delivery service and easy ordering process. Your healthy snacks are just a message away.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the FrutNut Family Today!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the difference that fresh, healthy, and delicious snacks can make in your daily life
            </p>
            
            <motion.a
              href="https://wa.me/919876303139?text=Hi! I'm interested in FrutNut products. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Healthy Journey</span>
            </motion.a>
            
            <p className="text-sm opacity-75 mt-4">
              Sweet, Salty & A Little Nutty - Just Like You Like It
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 