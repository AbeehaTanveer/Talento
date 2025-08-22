import { motion } from 'framer-motion';
import { FiCompass, FiHome, FiSearch } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-[#FFF6E5] to-[#FFF6E5]/80 flex flex-col items-center justify-center p-6 text-center">
      {/* Animated 404 Graphic */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 bg-white/90 backdrop-blur-sm border-2 border-[#006D77]/20 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              x: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="text-[#FF6F61] text-6xl md:text-8xl font-bold"
          >
            404
          </motion.div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FF6F61] border-2 border-white"></div>
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#006D77] border-2 border-white"></div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#006D77] mb-3">
          Lost in the Metaverse
        </h1>
        <p className="text-lg text-[#333333]/90 mb-6">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        {/* Search Bar */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <input
            type="text"
            placeholder="Search the marketplace..."
            className="w-full p-4 pr-12 border-2 border-[#006D77]/20 focus:border-[#FF6F61] outline-none bg-white/80 backdrop-blur-sm"
          />
          <FiSearch className="absolute right-4 top-4 text-xl text-[#006D77]" />
        </motion.div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(255, 111, 97, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-[#FF6F61] text-white px-6 py-3 font-medium"
        >
          <FiHome />
          Return Home
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 109, 119, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-white border-2 border-[#006D77] text-[#006D77] px-6 py-3 font-medium"
        >
          <FiCompass />
          Explore Listings
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-sm text-[#333333]/60 flex items-center gap-2"
      >
        <FiCompass className="text-[#FF6F61]" />
        <span>Need help? Contact our support team</span>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;