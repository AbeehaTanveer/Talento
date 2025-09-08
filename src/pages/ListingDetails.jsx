import { useState } from 'react';
import { FiHeart, FiMapPin, FiUser, FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar, FiCalendar, FiShoppingBag, FiBook, FiDollarSign, FiTag, FiClock, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ListingDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Mock data for university book listing
  const listing = {
    id: 1,
    title: 'Introduction to Algorithms - Third Edition',
    price: 4500,
    originalPrice: 6500,
    category: 'Computer Science',
    courseCode: 'CS-402',
    condition: 'Like New',
    location: 'Computer Science Department',
    rating: 4.8,
    seller: {
      name: 'Alex Johnson',
      memberSince: 'January 2023',
      totalListings: 12,
      rating: 4.9,
      year: 'Senior',
      major: 'Computer Science'
    },
    details: {
      edition: '3rd',
      author: 'Cormen, Leiserson, Rivest, Stein',
      isbn: '978-0262033848',
      publisher: 'MIT Press',
      year: 2009
    },
    description: `This is the renowned textbook on computer algorithms, widely used in universities worldwide. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.

Key Features:
- Comprehensive coverage of algorithms and data structures
- Clear explanations with pseudocode
- Excellent condition with minimal highlighting
- Includes all chapters with no missing pages

This book is essential for any computer science student, particularly those taking algorithms courses. I'm selling because I've graduated and no longer need it.`,
    images: [
      { id: 1, placeholder: '📘' },
      { id: 2, placeholder: '📖' },
      { id: 3, placeholder: '🔍' },
      { id: 4, placeholder: '📚' },
    ],
    reviews: [
      { id: 1, user: 'Maya Chen', rating: 5, comment: 'The book was in perfect condition as described. Seller was very responsive and delivered quickly.', date: '2 weeks ago' },
      { id: 2, user: 'David Kim', rating: 4, comment: 'Good quality book, just some minor highlighting as mentioned. Fair price for this edition.', date: '1 month ago' },
      { id: 3, user: 'Sarah Williams', rating: 5, comment: 'Exactly what I needed for my algorithms class. Saved me a lot compared to the bookstore price!', date: '3 weeks ago' },
    ],
    similarListings: [
      { id: 101, title: 'Computer Networks (5th Ed)', price: 3800, category: 'Networking', courseCode: 'CS-405', rating: 4.7 },
      { id: 102, title: 'Artificial Intelligence: Modern Approach', price: 5200, category: 'AI', courseCode: 'CS-467', rating: 4.9 },
      { id: 103, title: 'Database System Concepts', price: 2900, category: 'Databases', courseCode: 'CS-415', rating: 4.5 },
      { id: 104, title: 'Clean Code: Handbook of Agile Software', price: 4100, category: 'Software Engineering', courseCode: 'CS-425', rating: 4.8 },
    ]
  };

  const formatPrice = (price) => {
    return `Rs ${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === listing.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? listing.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#006D77]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/textbooks" className="hover:text-[#006D77]">Textbooks</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{listing.title}</span>
        </nav>

        {/* Listing Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center mb-2">
            <span className="bg-[#006D77]/10 text-[#006D77] text-xs font-medium px-2.5 py-1 rounded-full">
              {listing.category}
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full ml-2">
              {listing.courseCode}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{listing.title}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <FiMapPin className="text-[#006D77] mr-1" />
            <span>{listing.location}</span>
          </div>
        </motion.div>

        {/* Image and Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Image Carousel */}
          <div className="lg:w-1/2">
            <motion.div 
              className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="aspect-square flex items-center justify-center text-8xl bg-gradient-to-br from-[#006D77]/10 to-[#FF6F61]/10">
                {listing.images[currentImageIndex].placeholder}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <FiChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <FiChevronRight className="h-5 w-5 text-gray-700" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {listing.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-[#006D77] w-4' : 'bg-white/80'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Details Panel */}
          <div className="lg:w-1/2">
            <motion.div 
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Price and Rating */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#006D77]">{formatPrice(listing.price)}</h2>
                  {listing.originalPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      {formatPrice(listing.originalPrice)}
                    </p>
                  )}
                </div>
                <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
                  <FiStar className="fill-amber-400 text-amber-400 mr-1" />
                  <span className="font-medium text-amber-800">{listing.rating}</span>
                </div>
              </div>

              {/* Condition Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <FiCheckCircle className="mr-1" />
                  {listing.condition}
                </span>
              </div>

              {/* Book Details */}
              <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-sm">
                  <FiBook className="text-[#006D77] mr-2" />
                  <span className="text-gray-600">Edition: </span>
                  <span className="ml-1 font-medium">{listing.details.edition}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FiUser className="text-[#006D77] mr-2" />
                  <span className="text-gray-600">Author: </span>
                  <span className="ml-1 font-medium">{listing.details.author}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FiTag className="text-[#006D77] mr-2" />
                  <span className="text-gray-600">ISBN: </span>
                  <span className="ml-1 font-medium">{listing.details.isbn}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <Link to="/chat" className="flex-grow">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#006D77] to-[#006D77]/90 text-white py-3.5 rounded-xl font-medium flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                  >
                    <FiMessageSquare className="mr-2" />
                    Contact Seller
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <FiHeart className={`h-5 w-5 ${isFavorite ? 'fill-[#FF6F61] text-[#FF6F61]' : 'text-gray-400'}`} />
                </motion.button>
              </div>

              {/* Seller Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium mb-4 text-gray-900">Seller Information</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#006D77] to-[#006D77]/80 flex items-center justify-center text-white">
                    <FiUser className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-900">{listing.seller.name}</h4>
                    <p className="text-sm text-gray-600">{listing.seller.major} • {listing.seller.year}</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mt-1">
                      <div className="flex items-center mr-4">
                        <FiStar className="fill-amber-400 text-amber-400 mr-1" />
                        <span>{listing.seller.rating}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <FiCalendar className="mr-1" />
                        <span>Member since {listing.seller.memberSince}</span>
                      </div>
                      <div className="flex items-center">
                        <FiShoppingBag className="mr-1" />
                        <span>{listing.seller.totalListings} listings</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/seller" className="inline-block mt-3 text-sm text-[#006D77] hover:underline font-medium">
                  View seller profile
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-[#006D77] text-[#006D77]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-[#006D77] text-[#006D77]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Reviews ({listing.reviews.length})
              </button>
              <button
                onClick={() => setActiveTab('qa')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'qa' ? 'border-[#006D77] text-[#006D77]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Q&A (3)
              </button>
            </nav>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Description Section */}
          {activeTab === 'description' && (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
            >
              <h3 className="font-bold text-xl mb-4 text-gray-900">Book Description</h3>
              <div className={`text-gray-700 ${isDescriptionExpanded ? '' : 'line-clamp-6'}`}>
                {listing.description.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
              <button 
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-3 text-[#006D77] font-medium hover:underline text-sm"
              >
                {isDescriptionExpanded ? 'Show less' : 'Read more'}
              </button>
            </motion.div>
          )}

          {/* Reviews Section */}
          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl text-gray-900">Customer Reviews</h3>
                <button className="bg-[#006D77] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006D77]/90 transition-colors">
                  Write a Review
                </button>
              </div>
              
              {listing.reviews.length > 0 ? (
                <div className="space-y-6">
                  {listing.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{review.user}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FiStar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600">No reviews yet. Be the first to review!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Q&A Section */}
          {activeTab === 'qa' && (
            <motion.div
              key="qa"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl text-gray-900">Questions & Answers</h3>
                <button className="bg-[#006D77] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006D77]/90 transition-colors">
                  Ask a Question
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">Ali Khan</h4>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">Is this the latest edition of the book?</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-[#006D77]">Seller</span>
                      <span className="text-sm text-gray-500 ml-2">• 1 day ago</span>
                    </div>
                    <p className="text-gray-700">No, this is the 3rd edition. The latest is the 4th edition, but this one is still widely used and accepted for the course.</p>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">Sara Ahmed</h4>
                    <span className="text-sm text-gray-500">5 days ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">Are you willing to negotiate on the price?</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-[#006D77]">Seller</span>
                      <span className="text-sm text-gray-500 ml-2">• 4 days ago</span>
                    </div>
                    <p className="text-gray-700">Yes, I'm open to reasonable offers. Please message me to discuss.</p>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">John Doe</h4>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-gray-700">Is the book available for meetup today?</p>
                  {/* Unanswered question - no answer div */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Similar Listings */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-bold text-xl mb-6 text-gray-900">Similar Textbooks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {listing.similarListings.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-[#006D77]/10 to-[#FF6F61]/10 flex items-center justify-center text-4xl">
                  {item.id === 101 && '📡'}
                  {item.id === 102 && '🤖'}
                  {item.id === 103 && '💾'}
                  {item.id === 104 && '👨‍💻'}
                </div>
                <div className="p-4">
                  <div className="mb-1">
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">
                      {item.courseCode}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm line-clamp-2 mb-2 text-gray-900">{item.title}</h4>
                  <div className="flex items-center text-amber-600 mb-2">
                    <FiStar className="fill-current mr-1" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                  <p className="text-sm font-bold text-[#006D77]">{formatPrice(item.price)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;