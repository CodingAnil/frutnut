'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInfo, FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Modal from './Modal';

interface Quantity {
  amount: string;
  price: number;
  note?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  quantities: Quantity[];
  healthBenefits: string[];
  nutrition: Record<string, string>;
}

interface ProductCardProps {
  product: Product;
  category: string;
}

const ProductCard = ({ product, category }: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleWhatsAppOrder = (quantity: Quantity) => {
    const message = `Hi! I'm interested in ${product.name} - ${quantity.amount} for ₹${quantity.price}. Can you help me?`;
    const whatsappUrl = `https://wa.me/919876303139?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <motion.div
        className="relative w-full h-96 cursor-pointer perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
          }
        }}
      >
        {/* Front of card */}
        <motion.div
          className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
            {/* Product Image */}
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl" role="img" aria-label="Product icon">🍎</span>
              </div>
              <div className="absolute top-2 right-2">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200 focus-ring"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`More information about ${product.name}`}
                >
                  <FiInfo className="text-gray-600" size={16} aria-hidden="true" />
                </motion.button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              {/* Pricing */}
              <div className="space-y-2">
                {product.quantities.map((quantity, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {quantity.amount}
                      {quantity.note && <span className="text-xs text-gray-500 ml-1">({quantity.note})</span>}
                    </span>
                    <span className="font-bold text-lg text-red-600">₹{quantity.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? '' : 'rotate-y-180'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl shadow-lg p-6 h-full flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-center">{product.name}</h3>
            
            {/* Health Benefits */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-yellow-200">Health Benefits:</h4>
              <ul className="space-y-1 text-sm">
                {product.healthBenefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-yellow-200 mr-2" aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
                className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center justify-center space-x-2 focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View detailed information about ${product.name}`}
              >
                <FiInfo size={16} aria-hidden="true" />
                <span>More Info</span>
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppOrder(product.quantities[0]);
                }}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2 focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Order ${product.name} via WhatsApp`}
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>Order Now</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl" role="img" aria-label="Product icon">🍎</span>
            </div>
            <h2 id="product-modal-title" className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Pricing</h3>
            <div className="space-y-2">
              {product.quantities.map((quantity, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800">{quantity.amount}</span>
                    {quantity.note && <span className="text-sm text-gray-500 ml-2">({quantity.note})</span>}
                  </div>
                  <span className="font-bold text-xl text-red-600">₹{quantity.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Benefits */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Health Benefits</h3>
            <ul className="space-y-2">
              {product.healthBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1" aria-hidden="true">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Nutrition Info</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="font-medium text-gray-800">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              onClick={closeModal}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Close product details"
            >
              Close
            </motion.button>
            <motion.button
              onClick={() => {
                handleWhatsAppOrder(product.quantities[0]);
                closeModal();
              }}
              className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Order ${product.name} via WhatsApp`}
            >
              <FaWhatsapp size={16} aria-hidden="true" />
              <span>Order Now</span>
            </motion.button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard; 