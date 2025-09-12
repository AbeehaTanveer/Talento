import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiSend, FiCheckCircle, FiUsers, FiArrowLeft, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('write');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate processing delay for psychological satisfaction
    setTimeout(() => setIsSubmitted(true), 800);
  };

  // Psychology: Social proof data
  const reviewsData = [
    {
      id: 1,
      user: "Sarah Khan",
      rating: 5,
      comment: "The textbook was in perfect condition and arrived faster than expected. Seller was very professional!",
      date: "2 days ago",
      helpful: 12,
      userCourse: "Computer Science",
      avatar: "SK"
    },
    {
      id: 2,
      user: "Ali Ahmed",
      rating: 4,
      comment: "Good quality notes, just as described. Minor highlighting but doesn't affect readability.",
      date: "1 week ago",
      helpful: 8,
      userCourse: "Business Administration",
      avatar: "AA"
    },
    {
      id: 3,
      user: "Fatima Noor",
      rating: 5,
      comment: "Excellent seller! The study materials were comprehensive and helped me ace my finals. Highly recommend!",
      date: "3 days ago",
      helpful: 15,
      userCourse: "Psychology",
      avatar: "FN"
    }
  ];

  // Psychology: Progress indicators
  const ratingDistribution = [
    { stars: 5, percentage: 72, count: 18 },
    { stars: 4, percentage: 20, count: 5 },
    { stars: 3, percentage: 4, count: 1 },
    { stars: 2, percentage: 2, count: 0 },
    { stars: 1, percentage: 2, count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/30">
      {/* Header */}
  <div className="bg-white shadow-sm lg:mt-18">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <FiArrowLeft className="text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Share Your Experience</h1>
          <p className="text-gray-600 text-sm">
            Your review helps other students make better choices
          </p>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <FiUsers className="mr-2" />
        <span>24 students found this helpful</span>
      </div>
    </div>
  </div>
</div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
                <FiCheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Review Published!</h2>
              <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                Thank you for helping the student community. Your review will be seen by 
                <span className="font-semibold text-[#006D77]"> 150+ students</span> this week.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl max-w-md mx-auto mb-6">
                <div className="flex items-center justify-center text-blue-800">
                  <FiTrendingUp className="mr-2" />
                  <span className="font-medium">Your review is now trending</span>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-gradient-to-r from-[#006D77] to-[#008891] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Write Another Review
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left Column - Product Info & Stats */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
                  <div className="text-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&auto=format&fit=crop&q=80"
                      alt="Product"
                      className="w-20 h-20 rounded-xl object-cover mx-auto mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-900">Calculus: Early Transcendentals</h2>
                    <p className="text-gray-600 text-sm">8th Edition • Like New Condition</p>
                  </div>

                  {/* Rating Summary - Psychology: Social proof */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-3xl font-bold text-gray-900 mr-2">4.8</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-gray-600 text-sm">Based on 24 reviews</p>
                  </div>

                  {/* Rating Distribution - Psychology: Visual persuasion */}
                  <div className="space-y-2 mb-6">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center">
                        <div className="flex items-center w-12">
                          <span className="text-sm text-gray-600 w-4">{item.stars}</span>
                          <FiStar className="w-4 h-4 text-amber-400 ml-1" />
                        </div>
                        <div className="flex-1 mx-2">
                          <div className="bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#006D77] h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievement - Psychology: Gamification */}
                  <div className="bg-[#006D77]/5 p-4 rounded-xl">
                    <div className="flex items-center">
                      <FiAward className="text-[#006D77] mr-2" />
                      <span className="text-sm font-medium text-[#006D77]">Reviewer Level: Expert</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Your reviews help 50+ students monthly</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Review Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Tabs */}
                  <div className="border-b border-gray-200">
                    <nav className="flex">
                      <button
                        onClick={() => setActiveTab('write')}
                        className={`px-8 py-4 font-medium text-sm border-b-2 transition-colors ${
                          activeTab === 'write'
                            ? 'text-[#006D77] border-[#006D77]'
                            : 'text-gray-500 hover:text-gray-700 border-transparent'
                        }`}
                      >
                        Write Review
                      </button>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className={`px-8 py-4 font-medium text-sm border-b-2 transition-colors ${
                          activeTab === 'reviews'
                            ? 'text-[#006D77] border-[#006D77]'
                            : 'text-gray-500 hover:text-gray-700 border-transparent'
                        }`}
                      >
                        All Reviews (24)
                      </button>
                    </nav>
                  </div>

                  <div className="p-8">
                    <AnimatePresence mode="wait">
                      {activeTab === 'write' ? (
                        <motion.div
                          key="write"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">How was your experience?</h3>
                              <p className="text-gray-600">Your honest review helps fellow students</p>
                            </div>

                            {/* Rating - Psychology: Emotional engagement */}
                            <div className="mb-8">
                              <label className="block text-lg font-semibold text-gray-900 mb-4 text-center">
                                How would you rate this item?
                              </label>
                              <div className="flex justify-center space-x-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="p-2 transform hover:scale-110 transition-transform duration-200"
                                  >
                                    <FiStar
                                      className={`w-10 h-10 ${
                                        star <= (hoverRating || rating)
                                          ? 'text-amber-400 fill-amber-400 drop-shadow-lg'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                              <div className="text-center">
                                <span className="text-lg font-semibold text-gray-900">
                                  {rating > 0 ? (
                                    <span className="text-[#006D77]">Thank you for your feedback!</span>
                                  ) : (
                                    'Select your rating'
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* Review Form - Psychology: Guidance */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                              <div>
                                <label className="block text-lg font-semibold text-gray-900 mb-4">
                                  Share your experience
                                </label>
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                  <p className="text-blue-800 text-sm">
                                    💡 <strong>Tip:</strong> Mention condition, seller communication, and delivery time
                                  </p>
                                </div>
                                <textarea
                                  value={reviewText}
                                  onChange={(e) => setReviewText(e.target.value)}
                                  placeholder="What was the item condition? How was the seller's communication? Was delivery prompt?"
                                  rows={5}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent resize-none transition-all duration-200"
                                  required
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                  {reviewText.length}/500 characters • Detailed reviews get more attention
                                </p>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={rating === 0 || !reviewText.trim()}
                                className="w-full bg-gradient-to-r from-[#006D77] to-[#008891] text-white py-4 px-6 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3"
                              >
                                <FiSend className="w-5 h-5" />
                                Publish Review
                              </motion.button>
                            </form>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="reviews"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="space-y-6">
                            {reviewsData.map((review) => (
                              <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#006D77] to-[#008891] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                      {review.avatar}
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900">{review.user}</h4>
                                      <p className="text-sm text-gray-500">{review.userCourse}</p>
                                    </div>
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                
                                <div className="flex items-center mb-3">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <FiStar
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                
                                <p className="text-gray-700 mb-4">{review.comment}</p>
                                
                                <div className="flex items-center justify-between">
                                  <button className="flex items-center text-sm text-gray-500 hover:text-[#006D77] transition-colors">
                                    <FiHeart className="mr-1" />
                                    Helpful ({review.helpful})
                                  </button>
                                  <span className="text-xs text-gray-400">Verified Purchase</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReviewPage;