import { useState } from 'react';
import { motion } from 'framer-motion';

const FuturisticLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Logging in with:', credentials);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#006D77] to-[#FFF6E5]">
      {/* Left Side - Lifestyle Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#006D77]/70 via-[#006D77]/30 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10 p-8 md:p-12 h-full flex items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Market2045</h2>
            <p className="text-lg opacity-90">Where future commerce meets human connection</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Glassmorphic Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6F61] to-[#FF6F61]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-[#333333]">Welcome Back</h1>
                <p className="text-[#333333]/80 mt-1">Sign in to your 2045 marketplace account</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email/Phone Field */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-[#333333] mb-1">Email or Phone</label>
                  <div className={`relative rounded-lg overflow-hidden transition-all ${isFocused.email ? 'ring-2 ring-[#FF6F61]/50' : ''}`}>
                    <input
                      type="text"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-[#F5F5F5] focus:outline-none"
                      placeholder="Enter email or phone"
                      required
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#FF6F61]/10 to-transparent pointer-events-none opacity-0 transition-opacity ${isFocused.email ? 'opacity-100' : ''}`}></div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#333333] mb-1">Password</label>
                  <div className={`relative rounded-lg overflow-hidden transition-all ${isFocused.password ? 'ring-2 ring-[#FF6F61]/50' : ''}`}>
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      onFocus={() => handleFocus('password')}
                      onBlur={() => handleBlur('password')}
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-[#F5F5F5] focus:outline-none"
                      placeholder="Enter password"
                      required
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#FF6F61]/10 to-transparent pointer-events-none opacity-0 transition-opacity ${isFocused.password ? 'opacity-100' : ''}`}></div>
                  </div>
                </div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 5px 15px rgba(255, 111, 97, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-lg font-semibold shadow-md mb-4"
                >
                  Login
                </motion.button>

                {/* Additional Links */}
                <div className="flex justify-between text-sm">
                  <a href="#" className="text-[#006D77] hover:text-[#006D77]/80 transition-colors">Forgot password?</a>
                  <a href="#" className="text-[#006D77] hover:text-[#006D77]/80 transition-colors">Create an account</a>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <div className="bg-[#FFF6E5]/50 border-t border-white/20 p-4 text-center text-sm text-[#333333]/80">
              Secure login with 2045 biometric verification
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticLogin;