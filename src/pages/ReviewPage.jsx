import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiSend, FiCheckCircle, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate processing delay to build anticipation
    setTimeout(() => {
      setIsSubmitted(true);
      console.log({ rating, reviewText });
    }, 800);
  };

  // Dark Psychology Techniques:
  // 1. Social Proof (showing others are doing it)
  // 2. Scarcity (limited time/opportunity)
  // 3. Authority (trust signals)
  // 4. Reciprocity (giving something first)
  // 5. Commitment (small yes leading to bigger yes)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 w-full lg:mt-2">
      <div className="max-w-7xl mx-auto w-full">
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200 w-full"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <FiCheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Review!</h2>
              <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                Your feedback has been recorded and will help <span className="font-semibold">87 students</span> make better decisions today.
              </p>
              
              {/* Social Proof Trigger */}
              <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto mb-6">
                <div className="flex items-center justify-center gap-2">
                  <FiUsers className="text-blue-600" />
                  <span className="text-blue-800 font-medium">Your review is now visible to the community</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setRating(0);
                  setReviewText('');
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#006D77] to-[#008891] text-white rounded-xl hover:shadow-lg transition-all font-medium"
              >
                Write Another Review
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Header with Social Proof */}
              <div className="bg-gradient-to-r from-[#006D77] to-[#008891] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h1 className="text-3xl font-bold mb-2">Share Your Experience</h1>
                  <p className="text-white/90 text-lg">Join <span className="font-semibold">1,247 students</span> who've helped improve our community</p>
                  
                  {/* Scarcity & Social Proof Bar */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FiTrendingUp className="text-amber-300" />
                      <span className="text-sm">87% completion rate today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-amber-300" />
                      <span className="text-sm">Takes just 2 minutes</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Progress Indicator (Commitment) */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Review Progress</span>
                    <span className="text-sm text-gray-500">{rating > 0 ? '50%' : '0%'} Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#006D77] h-2 rounded-full transition-all duration-500" 
                      style={{ width: rating > 0 ? '50%' : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="mb-8">
                  <label className="block text-xl font-semibold text-gray-900 mb-6">
                    How would you rate your experience with Sarah?
                  </label>
                  
                  {/* Authority & Social Proof */}
                  <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <FiStar className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-amber-800 text-sm">
                        <span className="font-semibold">4.8 average rating</span> from 347 reviews. Your opinion matters!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 justify-center py-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-3 transform hover:scale-110 transition-all duration-200 focus:outline-none"
                      >
                        <FiStar
                          className={`w-12 h-12 ${
                            star <= (hoverRating || rating)
                              ? 'text-amber-400 fill-amber-400 drop-shadow-lg'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  
                  <div className="text-center mt-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {rating > 0 ? `${rating}.0/5.0` : 'Select your rating'}
                    </span>
                    {rating > 0 && (
                      <p className="text-green-600 font-medium mt-2">✓ Thank you for your feedback!</p>
                    )}
                  </div>
                </div>

                {/* Review Text Section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-xl font-semibold text-gray-900">
                      Share details of your experience
                    </label>
                    <span className="text-sm text-gray-500">{reviewText.length}/500</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    What did you enjoy about working with Sarah? What made their creative approach stand out?
                  </p>
                  
                  <textarea
                    value={reviewText}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) {
                        setReviewText(e.target.value);
                        setShowSocialProof(e.target.value.length > 50);
                      }
                    }}
                    placeholder="Describe your experience in detail... (The community finds detailed reviews most helpful!)"
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#006D77]/30 focus:border-[#006D77] resize-none transition-all duration-200 text-lg"
                    required
                  />
                  
                  {/* Social Proof Popup */}
                  <AnimatePresence>
                    {showSocialProof && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <FiUsers className="w-5 h-5 text-green-600" />
                          </div>
                          <p className="text-green-800 text-sm font-medium">
                            Students find reviews like yours most helpful! Keep going...
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Reciprocity Section */}
                <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3 text-lg">Your Review Helps Others</h3>
                  <p className="text-blue-700 mb-4">
                    By sharing your experience, you're helping fellow students make informed decisions and 
                    creating a more transparent community.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-900">92%</div>
                      <div className="text-sm text-blue-700">of students find reviews helpful</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-900">3x</div>
                      <div className="text-sm text-blue-700">more likely to trust peer reviews</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-900">47</div>
                      <div className="text-sm text-blue-700">students helped by each review</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={rating === 0 || !reviewText.trim()}
                  className="w-full bg-gradient-to-r from-[#006D77] to-[#008891] text-white py-5 px-6 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FiSend className="w-6 h-6" />
                  Publish Your Review to the Community
                </motion.button>

                {/* Trust Signals */}
                <div className="text-center mt-6">
                  <p className="text-gray-500 text-sm">
                    🔒 Your information is secure and anonymous • ✓ Verified students only
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Reviews Counter */}
        {!isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                <span className="text-[#006D77] font-bold">3</span> reviews submitted in the last hour
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;