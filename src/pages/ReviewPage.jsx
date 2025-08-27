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
 <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-12">
  {/* Main Content */}
  <main className="max-w-6xl mx-auto px-5 py-12">
    {/* Headline Section */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#006D77] via-[#009688] to-[#FF6F61] bg-clip-text text-transparent mb-6 drop-shadow-sm">
        Share Your Experience
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Your feedback builds trust on <span className="font-semibold text-[#006D77]">Talento</span> and helps buyers & sellers grow together.
      </p>
    </motion.div>

    {/* Review Form Card */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-xl p-10 mb-20 border border-gray-100"
    >
      {/* Seller Info */}
      <div className="flex items-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-r from-[#006D77] to-[#009688] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md mr-5">
          A
        </div>
        <div>
          <h3 className="font-semibold text-xl text-gray-800">Ali – Graphic Designer</h3>
          <p className="text-gray-500 text-sm">Completed your project on March 15, 2025</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-10">
        <h4 className="font-medium text-gray-700 mb-4">How would you rate your experience?</h4>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              onClick={() => setRating(star)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-4xl focus:outline-none transition"
            >
              {star <= rating ? (
                <span className="text-yellow-400 drop-shadow-sm">★</span>
              ) : (
                <span className="text-gray-300">☆</span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Review Text Area */}
      <div className="mb-10">
        <h4 className="font-medium text-gray-700 mb-3">Share details of your experience</h4>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="What impressed you? What could be better?"
          className="w-full h-44 p-5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent resize-none bg-gray-50"
        />
      </div>

      {/* Tags */}
      <div className="mb-10">
        <h4 className="font-medium text-gray-700 mb-4">Add tags (optional)</h4>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <motion.button
              key={tag.id}
              onClick={() => toggleTag(tag.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-colors ${
                selectedTags.includes(tag.value)
                  ? 'bg-gradient-to-r from-[#006D77] to-[#009688] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.label}
            </motion.button>
          ))}
        </div>
      </div>

 
      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-gradient-to-r from-[#FF6F61] to-[#FF8C7A] text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-lg"
      >
        Submit Review
      </motion.button>
    </motion.div>

    {/* Trust Psychology Section */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
    >
      {[
        { icon: "🛡️", title: "Trusted Platform", text: "All reviews are verified to ensure fairness.", color: "bg-blue-50" },
        { icon: "🤝", title: "Respectful Feedback", text: "Reviews should be constructive, respectful, and honest.", color: "bg-green-50" },
        { icon: "⭐", title: "Build Reputation", text: "Your reviews help others trust and sellers improve.", color: "bg-yellow-50" }
      ].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className={`${card.color} rounded-2xl p-8 text-center shadow-sm transition`}
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="font-semibold text-[#006D77] text-lg mb-2">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </main>
</div>

  );
};

export default TalentoReviewSystem;