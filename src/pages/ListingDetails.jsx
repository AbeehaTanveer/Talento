import { useState } from 'react';
import { FiHeart, FiMapPin, FiUser, FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar, FiCalendar, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link, Links } from 'react-router-dom';

const ListingDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Mock data
  const listing = {
    id: 1,
    title: 'Handmade Kashmiri Shawl - Premium Wool',
    price: 4500,
    category: 'Clothing',
    location: 'Islamabad',
    rating: 4.8,
    seller: {
      name: 'Ali Crafts',
      memberSince: 'March 2023',
      totalListings: 42,
      rating: 4.9,
    },
    description: `This exquisite handmade Kashmiri shawl is crafted from premium wool by skilled artisans in Kashmir. The intricate embroidery and soft texture make it perfect for cold weather. Each piece takes approximately 3 weeks to complete, ensuring attention to detail and quality craftsmanship.

Features:
- 100% premium wool
- Traditional Kashmiri embroidery
- Dimensions: 100cm x 200cm
- Lightweight yet warm
- Available in multiple colors`,
    images: [
      { id: 1, placeholder: '🧣' },
      { id: 2, placeholder: '🧶' },
      { id: 3, placeholder: '📦' },
      { id: 4, placeholder: '🏷️' },
    ],
    reviews: [
      { id: 1, user: 'Fatima K.', rating: 5, comment: 'Beautiful craftsmanship! The shawl is even better in person.', date: '2 weeks ago' },
      { id: 2, user: 'Ahmed R.', rating: 4, comment: 'Great quality wool, very warm. Shipping took a bit long though.', date: '1 month ago' },
    ],
    similarListings: [
      { id: 101, title: 'Pashmina Shawl', price: 3800, category: 'Clothing', rating: 4.7 },
      { id: 102, title: 'Embroidered Winter Shawl', price: 5200, category: 'Clothing', rating: 4.9 },
      { id: 103, title: 'Handwoven Wool Scarf', price: 2900, category: 'Clothing', rating: 4.5 },
      { id: 104, title: 'Traditional Phulkari Dupatta', price: 4100, category: 'Clothing', rating: 4.8 },
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
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        {/* Listing Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">{listing.title}</h1>
          <div className="flex items-center mt-2">
            <FiMapPin className="text-[#006D77] mr-1" />
            <span className="text-[#333333]/80">{listing.location}</span>
          </div>
        </motion.div>

        {/* Image and Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Image Carousel */}
          <div className="lg:w-1/2">
            <motion.div 
              className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 109, 119, 0.2)' }}
            >
              <div className="aspect-square flex items-center justify-center text-9xl bg-gradient-to-br from-[#006D77]/20 to-[#FF6F61]/20">
                {listing.images[currentImageIndex].placeholder}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FiChevronLeft className="h-6 w-6 text-[#006D77]" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FiChevronRight className="h-6 w-6 text-[#006D77]" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {listing.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-[#FF6F61] w-4' : 'bg-white/60'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Details Panel */}
          <div className="lg:w-1/2">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Price and Rating */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-[#006D77]">{formatPrice(listing.price)}</h2>
                <div className="flex items-center bg-[#006D77]/10 px-3 py-1 rounded-full">
                  <FiStar className="fill-[#FF6F61] text-[#FF6F61] mr-1" />
                  <span className="font-medium">{listing.rating}</span>
                </div>
              </div>

              {/* Category and Location */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-[#333333]/60 mr-2">Category:</span>
                  <span className="text-sm bg-[#006D77]/10 text-[#006D77] px-3 py-1 rounded-full">{listing.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-[#333333]/60 mr-2">Location:</span>
                  <span className="text-sm flex items-center">
                    <FiMapPin className="mr-1 text-[#006D77]" />
                    {listing.location}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
                <Link to="/chat" className="flex-grow">
              <div className="flex space-x-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-grow bg-gradient-to-r from-[#006D77] to-[#006D77]/90 text-white py-3 rounded-xl font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  >
                  <FiMessageSquare className="mr-2" />
                  Contact Seller
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                  <FiHeart className={`h-6 w-6 ${isFavorite ? 'fill-[#FF6F61] text-[#FF6F61]' : 'text-gray-400'}`} />
                </motion.button>
              </div>
                  </Link>

              {/* Seller Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium mb-4">Seller Information</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#006D77] to-[#006D77]/80 flex items-center justify-center text-white">
                    <FiUser className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">{listing.seller.name}</h4>
                    <div className="flex flex-wrap items-center text-sm text-[#333333]/70 mt-1">
                      <div className="flex items-center mr-4">
                        <FiStar className="fill-[#FF6F61] text-[#FF6F61] mr-1" />
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
                <Link to="/seller" className="inline-block mt-3 text-sm text-[#006D77] hover:underline">
                <a href="#" className="inline-block mt-3 text-sm text-[#006D77] hover:underline">
                  View seller profile
                </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Description Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-bold text-xl mb-4">Description</h3>
          <div className={`text-[#333333]/90 ${isDescriptionExpanded ? '' : 'line-clamp-5'}`}>
            {listing.description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
          <button 
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="mt-3 text-[#006D77] font-medium hover:underline"
          >
            {isDescriptionExpanded ? 'Show less' : 'Read more'}
          </button>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-bold text-xl mb-6">Customer Reviews</h3>
          {listing.reviews.length > 0 ? (
            <div className="space-y-6">
              {listing.reviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{review.user}</h4>
                    <span className="text-sm text-[#333333]/60">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-[#FF6F61] text-[#FF6F61]' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#333333]/80">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#333333]/70">No reviews yet. Be the first to review!</p>
          )}
        </motion.div>

        {/* Similar Listings */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-bold text-xl mb-6">Similar Listings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {listing.similarListings.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-[#006D77]/20 to-[#FF6F61]/20 flex items-center justify-center text-4xl">
                  {item.id === 101 && '🧥'}
                  {item.id === 102 && '🧣'}
                  {item.id === 103 && '🧶'}
                  {item.id === 104 && '👚'}
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-sm line-clamp-2 mb-2">{item.title}</h4>
                  <div className="flex items-center text-[#FF6F61] mb-2">
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