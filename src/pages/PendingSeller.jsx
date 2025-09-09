import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PendingSeller = () => {
  const [daysRemaining, setDaysRemaining] = useState(7);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDaysRemaining(prev => Math.max(0, prev - 0.01));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
  const timer = setTimeout(() => {
    navigate('/review');
  }, 5000);

  return () => clearTimeout(timer); // Cleanup timeout on unmount
}, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9FAFB] to-[#FFFDFC] font-sans">
      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 mt-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#006D77] mb-3">
            ⏳ Waiting for Your Response
          </h2>
          <p className="text-lg text-[#333] max-w-2xl">
            A buyer has requested your review. You have up to 7 days to respond.
          </p>
        </motion.div>

        {/* Body Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base text-[#555] text-center max-w-2xl mb-10 leading-relaxed px-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          If you don't reply within 7 days, your chance to give a review will expire, and you also won't receive a review from the buyer. This ensures that all reviews are honest, fair, and voluntary — never forced.
        </motion.p>

        {/* Reminder Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md mb-10"
        >
          <div className="bg-[#FDF6F2] rounded-2xl p-6 text-center border border-[#FF6F61]/20 shadow-sm">
            <h3 className="text-xl font-semibold text-[#006D77] mb-3">Fairness matters.</h3>
            <p className="text-[#333]">
              Take your time, but please try to respond. Balanced feedback helps keep Flick trusted.
            </p>
          </div>
        </motion.div>

        {/* Countdown Component */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-md mb-10"
        >
          <div className="bg-gradient-to-r from-[#006D77] to-[#008292] text-white py-4 rounded-xl flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl font-semibold">
              {Math.ceil(daysRemaining)} days remaining to reply
            </span>
          </div>
        </motion.div>

        {/* No Action Button (Disabled Style) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-md mb-10"
        >
          <div className="bg-gray-100 border border-gray-200 text-gray-500 py-3 rounded-xl text-center font-semibold">
            Awaiting your decision
          </div>
        </motion.div>

        {/* Seller Protection Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Secure</h3>
            <p className="text-sm text-[#444]">Your account and reviews are protected.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Supported</h3>
            <p className="text-sm text-[#444]">Our team is here if you need help.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Fair</h3>
            <p className="text-sm text-[#444]">Both buyers and sellers are treated equally.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PendingSeller;