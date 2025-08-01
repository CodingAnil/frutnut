'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Combos', href: '/combos' },
    { name: 'Subscribe', href: '/subscribe' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/frutnut2025',
      icon: FaInstagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876303139?text=Hi! I\'m interested in FrutNut products. Can you help me?',
      icon: FaWhatsapp,
      color: 'bg-green-500',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Free Delivery Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2"
          >
            <span className="text-2xl">🚚</span>
            <span className="font-bold text-lg">FREE DELIVERY</span>
            <span className="text-2xl">🚚</span>
          </motion.div>
          <p className="text-sm mt-1">Chandigarh & Mohali - We're Here to Serve You!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">FrutNut</h3>
                  <p className="text-sm text-green-400">THE FRESH FRUIT STORE</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                From Nature's Basket, to Everyone's Heart. Healthy living starts here with FrutNut!
              </p>
              <p className="text-sm text-gray-400">
                Sweet, Salty & A Little Nutty - Just Like You Like It
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-400" />
                  <div>
                    <p className="text-gray-300">98763-03139</p>
                    <p className="text-gray-300">80597-91712</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-green-400" />
                  <p className="text-gray-300">Mohali, Chandigarh</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">📧</span>
                  <p className="text-gray-300">Just One Call Away!</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-full hover:scale-110 transition-transform duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Follow us on:</p>
                <p className="text-sm text-gray-300">@frutnut2025</p>
                <p className="text-sm text-gray-300">@frutnut</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} FrutNut. All rights reserved. | 
            <span className="text-yellow-400 ml-1">CUSTOMIZATION ALSO AVAILABLE AS PER DEMAND</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 