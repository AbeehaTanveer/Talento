import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiShield, FiZap } from 'react-icons/fi';

const BoostListing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const boostPlans = [
    { id: 1, days: 7, price: '₿0.015', popular: false },
    { id: 2, days: 14, price: '₿0.025', popular: true },
    { id: 3, days: 30, price: '₿0.04', popular: false }
  ];

  const paymentMethods = [
    { id: 1, name: 'JazzCash', logo: '/jazzcash-logo.png' },
    { id: 2, name: 'EasyPaisa', logo: '/easypaisa-logo.png' }
  ];

  const handleBoost = () => {
    // Simulate payment processing
    setTimeout(() => setIsSuccess(true), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF6E5] to-[#FFF6E5]/90 p-4 md:p-6">
      <AnimatePresence>
        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-[#006D77] mb-2 flex items-center">
                <FiZap className="mr-2 text-[#FF6F61]" />
                Boost Your Listing
              </h1>
              <p className="text-[#333333]/90">
                Get 3-5x more views with our secure boosting system. Your item stays at the top of search results.
              </p>
            </motion.div>

            {/* Boost Plans */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {boostPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-5 border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-[#FF6F61] bg-[#FF6F61]/5'
                      : 'border-[#006D77]/20 hover:border-[#006D77]/40'
                  } ${plan.popular ? 'ring-2 ring-[#FF6F61]/30' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[#006D77]">
                      {plan.days} Days
                    </h3>
                    {plan.popular && (
                      <span className="text-xs bg-[#FF6F61] text-white px-2 py-1">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-bold text-[#333333] mt-2">
                    {plan.price}
                  </p>
                  <div className="h-px bg-[#006D77]/10 my-3"></div>
                  <ul className="text-sm text-[#333333]/80 space-y-1">
                    <li>• Top search placement</li>
                    <li>• Priority in recommendations</li>
                    <li>• {plan.days === 30 ? 'Weekly' : 'Daily'} performance reports</li>
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-lg font-bold text-[#006D77] mb-3">
                Select Payment Method
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 border-2 flex items-center cursor-pointer ${
                      paymentMethod === method.id
                        ? 'border-[#FF6F61] bg-[#FF6F61]/5'
                        : 'border-[#006D77]/20 hover:border-[#006D77]/40'
                    }`}
                  >
                    <div className="w-10 h-10 bg-white p-2 flex items-center justify-center mr-3">
                      <img 
                        src={method.logo} 
                        alt={method.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="font-medium text-[#333333]">
                      {method.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Safety Panel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-4 border border-[#006D77]/20 bg-white/50 backdrop-blur-sm mb-8 flex items-start"
            >
              <FiShield className="text-[#006D77] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#006D77] mb-1">
                  Secure Payment
                </h3>
                <p className="text-sm text-[#333333]/90">
                  Your payment is encrypted and secure. Seller will receive an email confirmation once the listing is boosted.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(255, 111, 97, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBoost}
              disabled={!selectedPlan || !paymentMethod}
              className={`w-full py-3 px-6 text-lg font-bold rounded-none ${
                selectedPlan && paymentMethod
                  ? 'bg-[#FF6F61] text-white'
                  : 'bg-[#F5F5F5] text-[#333333]/40 cursor-not-allowed'
              }`}
            >
              Pay & Boost
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-12"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ['0 0 0 rgba(255, 111, 97, 0)', '0 0 20px rgba(255, 111, 97, 0.4)', '0 0 0 rgba(255, 111, 97, 0)']
              }}
              transition={{ duration: 1 }}
              className="w-20 h-20 bg-[#FF6F61] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FiCheck className="text-white text-3xl" />
            </motion.div>
            <h2 className="text-2xl font-bold text-[#006D77] mb-3">
              Boost Successful!
            </h2>
            <p className="text-[#333333]/90 mb-6">
              Your listing has been boosted. You will receive an email confirmation shortly with performance details.
            </p>
            <button
              onClick={() => {
                setSelectedPlan(null);
                setPaymentMethod(null);
                setIsSuccess(false);
              }}
              className="px-6 py-2 border-2 border-[#006D77] text-[#006D77] font-medium hover:bg-[#006D77]/10"
            >
              Boost Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoostListing;