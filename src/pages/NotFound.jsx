import { motion } from 'framer-motion';
import { FiHome, FiSearch, FiArrowLeft, FiFrown, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen mt-3 bg-gradient-to-br from-[#ebe9e7] to-[#FF6F61]/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6F61] to-[#FF8E7F] rounded-full flex items-center justify-center text-white text-4xl">
                <FiFrown />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#006D77] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg">
                404
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl font-bold text-[#333333] mb-4"
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[#333333]/80 mb-6"
            >
              Oops! The page you're looking for seems to have been moved, deleted, or doesn't exist.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm text-[#333333]/60"
            >
              Maybe what you need is back on campus?
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            <Link to="/">
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 5px 15px rgba(255, 111, 97, 0.3)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-[#FF6F61] to-[#FF8E7F] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <FiHome className="text-lg" />
                Go Home
              </motion.button>
            </Link>
            
            <Link to="/listings">
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-[#333333] border border-[#F5F5F5] py-3 rounded-xl font-medium flex items-center justify-center gap-2"
              >
                <FiShoppingBag className="text-lg" />
                Browse Listings
              </motion.button>
            </Link>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm text-[#333333]/70 mb-3 text-center">Or search for what you need:</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search textbooks, notes, electronics..."
                className="w-full bg-[#F5F5F5] border border-[#F5F5F5] rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]/30 focus:border-[#FF6F61]/30"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF6F61] text-white p-2 rounded-lg">
                <FiSearch className="text-lg" />
              </button>
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="border-t border-[#F5F5F5] pt-6"
          >
            <p className="text-sm text-[#333333]/60 mb-3 text-center">Quick links that might help:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/help" className="text-[#006D77] text-sm hover:underline">Help Center</Link>
              <Link to="/contact" className="text-[#006D77] text-sm hover:underline">Contact Support</Link>
              <Link to="/faq" className="text-[#006D77] text-sm hover:underline">FAQ</Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-8 text-[#333333]/40"
        >
          <div className="flex items-center">
            <span className="text-sm">CampusMarket</span>
            <span className="mx-2">•</span>
            <span className="text-xs">For LCWU Students</span>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#FF6F61]/10 rounded-lg"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-[#006D77]/10 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#FF6F61]/5 rounded-lg"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;