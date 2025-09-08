import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FuturisticRegister = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    photo: null,
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', { accountType, ...formData });
    // Handle registration logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] to-[#FF6F61]/10 flex flex-col items-center justify-center p-4 md:p-8 mt-5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FF6F61]/10 blur-xl"></div>
        <div className="absolute top-1/4 -right-20 w-48 h-48 rounded-full bg-[#006D77]/10 blur-xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#FF6F61]/5 blur-xl"></div>
      </div>

      {/* Geometric Decorative Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 border-2 border-[#FF6F61] rotate-45 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-2 border-[#006D77] rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#FF6F61] rotate-45 opacity-40"></div>

      {/* Progress Indicator - Circular */}
      <div className="relative mb-10">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-[#006D77]/20 stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <motion.circle
              className="text-[#FF6F61] stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (step / 3) * 251.2}
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (step / 3) * 251.2 }}
              transition={{ duration: 0.5 }}
              strokeLinecap="round"
            ></motion.circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-[#006D77]">{step}/3</span>
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 text-center text-sm text-[#333333]/80">
          {step === 1 && 'Account'}
          {step === 2 && 'Basic Info'}
          {step === 3 && 'Profile Setup'}
        </div>
      </div>

      {/* Registration Container - Hexagonal Design */}
      <div className="relative w-full max-w-2xl">
        {/* Hexagon Outline */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#006D77] to-[#FF6F61] rounded-xl opacity-20 blur-md"></div>
        
        <div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Account Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="p-8 mt-3"
              >
                <h2 className="text-3xl font-bold text-[#006D77] mb-2 text-center">Join Market<span className="text-[#FF6F61]"></span></h2>
                <p className="text-[#333333]/80 mb-8 text-center">Choose your journey path</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setAccountType('buyer')}
                    className={`relative p-8 ${accountType === 'buyer' ? 'bg-gradient-to-br from-white to-[#FFF6E5] border-2 border-[#FF6F61]' : 'bg-white/80 border border-[#006D77]/20'} rounded-xl cursor-pointer transition-all overflow-hidden`}
                  >
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF6F61]/10 rounded-full"></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-4">🛍️</div>
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Explorer</h3>
                      <p className="text-[#333333]/70 text-sm">Discover unique items from global creators</p>
                    </div>
                    {accountType === 'buyer' && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-6 h-6 bg-[#FF6F61] rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setAccountType('seller')}
                    className={`relative p-8 ${accountType === 'seller' ? 'bg-gradient-to-br from-white to-[#FFF6E5] border-2 border-[#FF6F61]' : 'bg-white/80 border border-[#006D77]/20'} rounded-xl cursor-pointer transition-all overflow-hidden`}
                  >
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#006D77]/10 rounded-full"></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-4">🚀</div>
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Creator</h3>
                      <p className="text-[#333333]/70 text-sm">Share your creations with the world</p>
                    </div>
                    {accountType === 'seller' && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-6 h-6 bg-[#FF6F61] rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ 
                    boxShadow: '0 10px 25px -5px rgba(255, 111, 97, 0.4)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  disabled={!accountType}
                  className={`w-full py-4 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-xl font-semibold text-lg relative overflow-hidden ${!accountType ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="relative z-10">Continue Journey</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#006D77] to-[#FF6F61] opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Basic Info - Card Layout */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="p-8"
              >
                <h2 className="text-3xl font-bold text-[#006D77] mb-2 text-center">Your Identity</h2>
                <p className="text-[#333333]/80 mb-8 text-center">Tell us about yourself</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                        <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Password</label>
                      <div className="relative">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                          placeholder="Create a secure password"
                        />
                        <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Confirm Password</label>
                      <div className="relative">
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                          placeholder="Confirm your password"
                        />
                        <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <div className="h-2 bg-[#006D77]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6F61] transition-all duration-500" style={{ width: '60%' }}></div>
                      </div>
                      <p className="text-xs text-[#333333]/60 mt-2">Password strength: Medium</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <motion.button
                    whileHover={{ backgroundColor: "#006D77", color: "#FFF" }}
                    onClick={handleBack}
                    className="px-6 py-3 border border-[#006D77] text-[#006D77] rounded-xl transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      boxShadow: '0 10px 25px -5px rgba(255, 111, 97, 0.4)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-xl font-semibold flex items-center"
                  >
                    Continue
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Profile Setup - Circular Design */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="p-8"
              >
                <h2 className="text-3xl font-bold text-[#006D77] mb-2 text-center">Final Touch</h2>
                <p className="text-[#333333]/80 mb-8 text-center">Personalize your experience</p>
                
                <div className="flex flex-col items-center mb-8">
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#FFF6E5] to-[#006D77]/10 mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                    {formData.photo ? (
                      <img 
                        src={URL.createObjectURL(formData.photo)} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-12 h-12 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    )}
                    
                    <motion.label 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-2 right-2 w-8 h-8 bg-[#FF6F61] rounded-full flex items-center justify-center cursor-pointer shadow-md"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.files[0] }))}
                        className="hidden"
                      />
                    </motion.label>
                  </div>
                  
                  <motion.button
                    whileHover={{ backgroundColor: "#006D77", color: "#FFF" }}
                    className="px-4 py-2 text-[#006D77] text-sm rounded-full border border-[#006D77]/30 transition-colors"
                  >
                    Choose Avatar
                  </motion.button>
                </div>
                
                <div className="relative mb-8">
                  <label className="block text-sm font-medium text-[#333333] mb-2 ml-1">Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-[#006D77]/20 rounded-xl focus:border-[#FF6F61] focus:ring-0 transition-all"
                      placeholder="Where are you based?"
                    />
                    <div className="absolute right-3 top-3 w-6 h-6 bg-[#006D77]/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-[#333333]/60 text-center mb-6">
                  By joining, you agree to our <a href="#" className="text-[#006D77] hover:underline">Terms</a> and <a href="#" className="text-[#006D77] hover:underline">Privacy Policy</a>.
                </div>
                
                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ backgroundColor: "#006D77", color: "#FFF" }}
                    onClick={handleBack}
                    className="px-6 py-3 border border-[#006D77] text-[#006D77] rounded-xl transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      boxShadow: '0 10px 25px -5px rgba(255, 111, 97, 0.4)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-xl font-semibold flex items-center"
                  >
                    Complete Journey
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FuturisticRegister;