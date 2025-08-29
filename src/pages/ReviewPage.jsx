import { useState } from 'react';
import { motion } from 'framer-motion';

const TalentoReviewSystem = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const tags = [
    { id: 1, label: '✅ Professional', value: 'professional' },
    { id: 2, label: '⏱️ On-Time', value: 'on_time' },
    { id: 3, label: '💬 Good Communication', value: 'good_communication' },
    { id: 4, label: '🎨 Creative', value: 'creative' },
    { id: 5, label: '❌ Needs Improvement', value: 'needs_improvement' }
  ];

  const pastReviews = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: 'SM',
      rating: 5,
      text: 'Ali delivered exceptional work ahead of schedule. Communication was clear throughout the project.',
      tags: ['professional', 'on_time', 'good_communication'],
      date: '2 days ago'
    },
    {
      id: 2,
      user: 'Michael T.',
      avatar: 'MT',
      rating: 4,
      text: 'Good quality work but missed the initial deadline by a day. Would still recommend.',
      tags: ['creative', 'professional'],
      date: '1 week ago'
    },
    {
      id: 3,
      user: 'Jessica L.',
      avatar: 'JL',
      rating: 5,
      text: 'Absolutely stunning designs! Exceeded all my expectations. Will definitely work with again.',
      tags: ['creative', 'professional', 'good_communication'],
      date: '2 weeks ago'
    }
  ];

  const toggleTag = (tagValue) => {
    if (selectedTags.includes(tagValue)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagValue));
    } else {
      setSelectedTags([...selectedTags, tagValue]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload here
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#FFF6E5] mt-8">


  {/* Main Content - Split Layout */}
  <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 py-10">
    {/* Left Column - Review Form */}
    <div className="lg:col-span-3">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 h-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-3">
            Share Your Experience
          </h2>
          <p className="text-[#006D77]">
            Your feedback helps build trust in our creative community
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#006D77] to-[#FF6F61] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Seller Info */}
        <div className="flex items-center mb-8 pb-6 border-b border-gray-100">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-[#006D77] to-[#009688] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md mr-5">
              A
            </div>
          
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#333333]">Ali – Graphic Designer</h3>
            <p className="text-gray-500 text-sm">Completed your project on March 15, 2025</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="mb-8">
          <h4 className="font-medium text-[#333333] mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#FF6F61] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            How would you rate your experience?
          </h4>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                onClick={() => setRating(star)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl focus:outline-none transition-transform"
              >
                {star <= rating ? (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-yellow-400"
                  >
                    ★
                  </motion.span>
                ) : (
                  <span className="text-gray-300">☆</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Review Text Area */}
        <div className="mb-8">
          <h4 className="font-medium text-[#333333] mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#006D77] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Share details of your experience
          </h4>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="What did you enjoy about working with Ali? What made their creative approach stand out?"
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent resize-none bg-gray-50 transition-colors"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#FF6F61] to-[#FF8C7A] text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Submit Review
        </motion.button>
      </motion.div>
    </div>

    {/* Right Column - Trust Section & Guidelines */}
    <div className="lg:col-span-2 space-y-8">
      {/* Trust Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold text-[#333333] text-lg mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#006D77] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Why Your Review Matters
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                <span className="text-lg">🛡️</span>
              </div>
              <div>
                <h4 className="font-medium text-[#333333]">Builds Trust</h4>
                <p className="text-gray-600 text-sm">Help others make informed decisions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                <span className="text-lg">🤝</span>
              </div>
              <div>
                <h4 className="font-medium text-[#333333]">Supports Growth</h4>
                <p className="text-gray-600 text-sm">Constructive feedback helps professionals improve</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mr-3 flex-shrink-0">
                <span className="text-lg">⭐</span>
              </div>
              <div>
                <h4 className="font-medium text-[#333333]">Recognizes Excellence</h4>
                <p className="text-gray-600 text-sm">Highlight outstanding work in our community</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Guidelines */}
        <div className="bg-[#FFF6E5] rounded-2xl p-6 border border-[#FF6F61] border-opacity-20">
          <h3 className="font-semibold text-[#333333] text-lg mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#FF6F61] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Review Guidelines
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-[#006D77] mr-2">•</span>
              <span>Be specific about what you liked or would improve</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006D77] mr-2">•</span>
              <span>Focus on the work quality and communication</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006D77] mr-2">•</span>
              <span>Keep feedback constructive and professional</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006D77] mr-2">•</span>
              <span>Your review will be publicly visible</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Stats Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-[#006D77] to-[#009688] rounded-2xl p-6 text-white shadow-lg"
      >
        <h3 className="font-semibold text-lg mb-4">Community Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">92%</div>
            <div className="text-sm opacity-80">Positive Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.8/5</div>
            <div className="text-sm opacity-80">Average Rating</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-sm opacity-80">Your review contributes to our trusted community of creative professionals</p>
        </div>
      </motion.div>
    </div>
  </main>

 
</div>

  );
};

export default TalentoReviewSystem;