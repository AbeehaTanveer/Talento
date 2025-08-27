import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TagsSeller = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tags = [
    { id: 1, label: "🚫 Fake / Misleading Listing", value: "fake_listing" },
    { id: 2, label: "⚠️ Seller Not Cooperative", value: "not_cooperative" },
    { id: 3, label: "❌ Item Not Available", value: "item_not_available" },
    { id: 4, label: "💰 Price Changed After Deal", value: "price_changed" },
    { id: 5, label: "⏳ Seller Delayed / Wasted Time", value: "delayed" },
    { id: 6, label: "📵 Seller Not Responding", value: "not_responding" },
    { id: 7, label: "📦 Wrong / Different Item", value: "wrong_item" },
    { id: 8, label: "🗑️ Poor Product Quality", value: "poor_quality" },
    { id: 9, label: "🛑 Scam / Fraudulent Behavior", value: "scam" },
  ];

  const toggleTag = (tagValue) => {
    if (selectedTags.includes(tagValue)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagValue));
    } else {
      setSelectedTags([...selectedTags, tagValue]);
    }
  };

  const handleSubmit = () => {
    if (selectedTags.length === 0) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#FFF6E5] mt-9">
 {/* Left side - branding / illustration */}
<div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 to-teal-600 text-white p-12 relative overflow-hidden">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl font-extrabold mb-4 z-20"
  >
  Talento
  </motion.h1>


  {/* Decorative circles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
  <div className="absolute bottom-16 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

  {/* Floating random thoughts */}
  {[
    "Don’t be desperate, be smart 💡",
    "Trust builds business 🤝",
    "Report bad actors, save the community 🔒",
    "If the seller cheats, we’ve got your back ✅",
    "Your safety is our priority 🛡️",
    "Fair deals. Happy people 🌈",
    "Be confident. Be creative. 🚀",
    "We stand against scams 🚫",
  ].map((thought, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.4, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className={`absolute text-sm font-medium opacity-70`}
      style={{
        top: `${15 + i * 10}%`,
        left: i % 2 === 0 ? "10%" : "60%",
        color: "rgba(255,255,255,0.85)"
      }}
    >
      {thought}
    </motion.span>
  ))}
</div>


      {/* Right side - form */}
      <div className="flex flex-col justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-[#333333] mb-2">
                Report an Issue
              </h2>
              <p className="text-[#555] mb-8">
                Help us keep Talento safe by reporting problems with sellers.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {tags.map((tag) => (
                  <motion.button
                    key={tag.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleTag(tag.value)}
                    className={`p-4 rounded-lg border text-left ${
                      selectedTags.includes(tag.value)
                        ? "bg-[#006D77] text-white border-[#006D77]"
                        : "bg-white border-gray-300 hover:bg-gray-100 text-[#333]"
                    }`}
                  >
                    {tag.label}
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={selectedTags.length === 0}
                className={`w-full py-4 mt-8 rounded-lg font-semibold transition-all ${
                  selectedTags.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#FF6F61] hover:bg-[#e85c50] text-white shadow-lg"
                }`}
              >
                Submit Report
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="w-full max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-[#333] mb-4">
                Thank You!
              </h2>
              <p className="text-[#555] mb-6">
                Your report has been submitted successfully. Together we’re
                keeping Talento safe.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedTags([]);
                  setIsSubmitted(false);
                }}
                className="w-full max-w-xs mx-auto py-3 bg-[#006D77] text-white rounded-lg hover:bg-[#00525a]"
              >
                Submit Another Report
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TagsSeller;
