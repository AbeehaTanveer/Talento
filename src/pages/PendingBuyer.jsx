import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const PendingBuyer = () => {
  const [daysRemaining, setDaysRemaining] = useState(7);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Countdown timer (simulated)
    const timer = setInterval(() => {
      setDaysRemaining(prev => {
        if (prev <= 0.1) {
          clearInterval(timer);
          return 0;
        }
        return Math.max(0, prev - 0.01);
      });
    }, 1000);



    
    return () => clearInterval(timer);
  }, []);


useEffect(() => {
  const timer = setTimeout(() => {
    navigate('/review');
  }, 3000);

  return () => clearTimeout(timer); // Cleanup timeout on unmount
}, [navigate]);


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9FAFB] to-[#FFFDFC] font-sans mt-11">


      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        
        {/* Title */}
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#006D77] text-center mb-6"
        >
          ⏳ Waiting for Seller Response
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-[#222] text-center max-w-2xl mb-10 leading-relaxed"
        >
          Your order with <span className="font-semibold">Jane Smith Photography</span> is awaiting seller confirmation. 
          If there’s no response within <span className="font-semibold">7 days</span>, you’ll be able to tags to the Seller directly.  
          Your purchase is fully protected.
        </motion.p>

        {/* Reminder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-3xl mb-10"
        >
          <div className="bg-[#FDF6F2] rounded-2xl p-6 text-center border border-[#FF6F61]/20 shadow-sm">
            <h3 className="text-xl font-semibold text-[#006D77] mb-3">Patience ensures trust.</h3>
            <p className="text-[#333] mb-2">
              Please allow the seller time to respond.
            </p>
            <p className="text-[#333]">
              Your transaction is safe. If needed, we’ll step in to support you.
            </p>
          </div>
        </motion.div>

        {/* Countdown & Button */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-4xl mb-10"
        >
          <div className="bg-gradient-to-r from-[#006D77] to-[#008292] text-white py-4 rounded-xl flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl font-semibold">
              {Math.ceil(daysRemaining)} days remaining
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: daysRemaining <= 0 ? 1.02 : 1 }}
            whileTap={{ scale: daysRemaining <= 0 ? 0.98 : 1 }}
            disabled={daysRemaining > 0}
            className={`w-full mt-5 py-3 rounded-xl font-semibold text-lg transition-all ${
              daysRemaining > 0 
                ? 'bg-[#F9FAFB] border-2 border-[#FF6F61] text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#FF6F61] to-[#ff8c7a] text-white shadow-lg hover:opacity-95'
            }`}
          >
       Tags Seller
          </motion.button>
        </motion.div>

        {/* Buyer Protection */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Secure</h3>
            <p className="text-sm text-[#444]">Your payment is fully protected by our security systems.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Supported</h3>
            <p className="text-sm text-[#444]">Our support team is here to assist you anytime.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#EAEAEA]">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold text-[#006D77] mb-1">Fair</h3>
            <p className="text-sm text-[#444]">We ensure fair treatment for both buyers and sellers.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PendingBuyer;
