import { motion } from 'framer-motion';
import { FiBook, FiDollarSign, FiUsers, FiArrowRight, FiShield, FiTrendingUp } from 'react-icons/fi';

const HeroBanner = () => {
  return (
    <div className="relative w-full min-h-[20vh] overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#006D77]/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDZENzciIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#006D77]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#FF6F61]/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Better balanced */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-gradient-to-r from-[#006D77] to-[#008891] text-white px-5 py-2.5 rounded-full mb-8 shadow-md"
            >
              <FiBook className="mr-2" />
              <span className="text-sm font-semibold">LCWU MARKETPLACE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Connect with Your <span className="text-[#006D77]">Campus</span> Community
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md"
            >
              Buy, sell, and trade textbooks, notes, and supplies with verified LCWU students. Save money and build a sustainable campus community.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 8px 20px rgba(0, 109, 119, 0.2)'
                }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gradient-to-r from-[#006D77] to-[#008891] text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                Start  <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: '#f8fafc' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium shadow-sm"
              >
                Browse Listings
              </motion.button>
            </motion.div>

   
          </motion.div>

          {/* Visual Content - Better proportioned */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students trading books" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#006D77] to-[#008891] text-white px-4 py-2 rounded-lg shadow-md">
                <span className="font-semibold text-sm">TRENDING</span>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -left-5 top-1/4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-28"
            >
              <div className="text-[#FF6F61] text-2xl mb-1 text-center">📚</div>
              <p className="text-xs font-semibold text-gray-700 text-center">Textbooks</p>
              <p className="text-[#006D77] font-bold text-xs text-center mt-1">Save 60%</p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute -right-5 bottom-1/4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 w-28"
            >
              <div className="text-[#006D77] text-2xl mb-1 text-center">💻</div>
              <p className="text-xs font-semibold text-gray-700 text-center">Tech</p>
              <p className="text-[#FF6F61] font-bold text-xs text-center mt-1">40% Off</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - More subtle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs font-medium mb-1">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;