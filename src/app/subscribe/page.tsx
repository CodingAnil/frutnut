'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheck, FaCalendar, FaTruck, FaLeaf, FaHeart } from 'react-icons/fa';
import subscriptionsData from '@/data/subscriptions.json';

export default function SubscribePage() {
  const [subscriptions, setSubscriptions] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSubscriptions(subscriptionsData);
    setIsLoading(false);
  }, []);

  const handleWhatsAppOrder = (subscription: any) => {
    const message = subscription.whatsappMessage;
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Subscription Plans</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              30-day healthy eating plans with daily fresh fruits delivered to your doorstep
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Subscribe to FrutNut?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience and health benefits of daily fresh fruits with our subscription plans
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Daily Delivery</h3>
              <p className="text-gray-600">Fresh fruits delivered to your doorstep every day</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Quality</h3>
              <p className="text-gray-600">Premium quality fruits prepared fresh daily</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery included with all subscription plans</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health Benefits</h3>
              <p className="text-gray-600">Improve your health with daily vitamin intake</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect subscription plan that fits your daily fruit consumption needs
            </p>
          </motion.div>

          {subscriptions && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {subscriptions.subscriptions.map((subscription: any) => (
                <motion.div key={subscription.id} variants={itemVariants}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{subscription.name}</h3>
                          <p className="text-lg opacity-90">{subscription.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">₹{subscription.price}</div>
                          <div className="text-sm opacity-75">/ {subscription.duration}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{subscription.description}</p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {subscription.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <FaCheck className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {subscription.benefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <span className="text-yellow-500 mr-2 mt-1">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <motion.button
                        onClick={() => handleWhatsAppOrder(subscription)}
                        className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaWhatsapp size={16} />
                        <span>Subscribe Now</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your healthy fruit subscription journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Choose Your Plan</h3>
              <p className="text-gray-600">Select from our 200gm or 400gm daily fruit plans</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Place Your Order</h3>
              <p className="text-gray-600">Order via WhatsApp and we'll confirm your subscription</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Daily Delivery</h3>
              <p className="text-gray-600">Receive fresh fruits at your doorstep every day</p>
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
              Start Your Healthy Fruit Journey Today!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our subscription family and experience the benefits of daily fresh fruits
            </p>
            
            <motion.button
              onClick={() => handleWhatsAppOrder(subscriptions?.subscriptions[0])}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={24} />
              <span>Subscribe on WhatsApp</span>
            </motion.button>
            
            <p className="text-sm opacity-75 mt-4">
              Customization also available as per demand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Order Button for Mobile */}
      <motion.button
        onClick={() => handleWhatsAppOrder(subscriptions?.subscriptions[0])}
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