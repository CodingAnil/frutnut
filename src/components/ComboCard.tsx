'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInfo, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Modal from './Modal';

interface Combo {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  includes: string[];
  benefits: string[];
  delivery: string;
  customization: string;
}

interface ComboCardProps {
  combo: Combo;
}

const ComboCard = ({ combo }: ComboCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ${combo.name} for ₹${combo.price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/919876303139?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        role="article"
        aria-labelledby={`combo-title-${combo.id}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 id={`combo-title-${combo.id}`} className="font-bold text-lg mb-1">{combo.name}</h3>
              <p className="text-sm opacity-90">{combo.duration}</p>
            </div>
            <motion.button
              onClick={openModal}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200 focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View details for ${combo.name}`}
            >
              <FiInfo size={16} aria-hidden="true" />
            </motion.button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
          <span className="text-6xl" role="img" aria-label="Combo meal icon">🥗</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-4">{combo.description}</p>
          
          {/* What's Included */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
            <ul className="space-y-1">
              {combo.includes.map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" size={14} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-2xl font-bold text-red-600">₹{combo.price}</span>
              <span className="text-sm text-gray-500 ml-1">/ {combo.duration}</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-green-600 font-medium">FREE DELIVERY</div>
              <div className="text-xs text-gray-500">Included</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              onClick={openModal}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View detailed information about ${combo.name}`}
            >
              View Details
            </motion.button>
            <motion.button
              onClick={handleWhatsAppOrder}
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm font-medium flex items-center justify-center space-x-2 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Order ${combo.name} via WhatsApp`}
            >
              <FaWhatsapp size={14} aria-hidden="true" />
              <span>Order</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="combo-modal-title">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-5xl" role="img" aria-label="Combo meal icon">🥗</span>
            </div>
            <h2 id="combo-modal-title" className="text-2xl font-bold text-gray-800 mb-2">{combo.name}</h2>
            <p className="text-gray-600">{combo.description}</p>
          </div>

          {/* Price and Duration */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-3xl font-bold text-red-600">₹{combo.price}</span>
                <span className="text-gray-500 ml-2">/ {combo.duration}</span>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold">FREE DELIVERY</div>
                <div className="text-sm text-gray-500">Included</div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">What's Included</h3>
            <ul className="space-y-2">
              {combo.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Benefits</h3>
            <ul className="space-y-2">
              {combo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1" aria-hidden="true">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2" role="img" aria-label="Delivery truck">🚚</span>
                <span className="text-gray-700">{combo.delivery}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2" role="img" aria-label="Settings">⚙️</span>
                <span className="text-gray-700">{combo.customization}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              onClick={closeModal}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Close combo details"
            >
              Close
            </motion.button>
            <motion.button
              onClick={() => {
                handleWhatsAppOrder();
                closeModal();
              }}
              className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Order ${combo.name} via WhatsApp`}
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

export default ComboCard; 