import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden bg-[#FFF6E5]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF6E5] via-transparent to-[#FFF6E5]/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 py-12"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4 leading-tight"
            >
              Refresh your life with unique finds
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-[#333333]/80 mb-8 max-w-lg"
            >
              Discover handcrafted treasures and premium goods from creators worldwide. The future of shopping is here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 5px 15px rgba(255, 111, 97, 0.4)'
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-xl text-lg font-semibold shadow-md"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Showcase (visible on desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block lg:w-1/2 h-full"
        >
          <div className="relative h-full flex items-center justify-center ml-3">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#006D77]/20 to-[#FF6F61]/10 rounded-full filter blur-xl animate-float"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" 
                alt="Featured product" 
                className="w-full h-auto rounded-xl shadow-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#006D77] text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-medium">Featured Today</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#006D77]/10 via-transparent to-[#FF6F61]/10 animate-gradient-shift opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroBanner;