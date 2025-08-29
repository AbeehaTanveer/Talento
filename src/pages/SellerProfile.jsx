import { useState } from 'react';
import { FiStar, FiMapPin, FiCalendar, FiShoppingBag, FiMessageSquare, FiUserCheck, FiClock, FiHeart, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SellerProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Color palette
  const colors = {
    primary: '#006D77', // Deep teal
    accent: '#FF6F61',  // Coral
    light: '#F5F5F5',   // Soft light gray
    dark: '#333333'     // Charcoal
  };

  // Seller data
  const seller = {
    name: "Quantum Creations",
    tagline: "Future-ready digital assets since 2035",
    rating: 4.9,
    reviewsCount: 428,
    bio: "Pioneering AI and holographic design solutions for the 2045 marketplace. Certified Future Commerce Partner with 10 years of trusted service.",
    location: "Karachi, Pakistan",
    memberSince: "March 2035",
    responseTime: "1 hour",
    totalListings: 124,
 
    verified: true,
    categories: [
      { name: "AI Templates", count: 56 },
      { name: "Hologram Kits", count: 42 },
      { name: "Neural Interfaces", count: 18 },
      { name: "Quantum UI", count: 8 }
    ],
    sellerListings: [
      { id: 1, title: "Neuro UI Kit 2045", price: 4500, rating: 4.8, sales: 124 },
      { id: 2, title: "Hologram Builder Pro", price: 8000, rating: 4.9, sales: 87 },
      { id: 3, title: "AI Voice Designer", price: 6500, rating: 4.7, sales: 56 },
      { id: 4, title: "Quantum Dashboard", price: 7500, rating: 4.5, sales: 42 }
    ],
    sellerReviews: [
      { id: 1, user: "Ali R.", rating: 5, comment: "Exceptional quality! The hologram kit exceeded all expectations.", date: "2 weeks ago" },
      { id: 2, user: "Fatima K.", rating: 4, comment: "Great support and fast delivery. Will purchase again.", date: "1 month ago" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
  {/* === Step 1: Top Section (Banner & Seller Info) === */}
<div className="relative">
  {/* Banner */}
  <div className="h-64 bg-gradient-to-r from-[#006D77] to-[#006D77]/70 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://example.com/grid-pattern.png')] opacity-20"></div>
  </div>

  {/* Seller Profile */}
  <div className="max-w-7xl mx-auto px-6 relative -mt-16">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Profile Picture */}
        <div className="md:w-1/4 p-6 flex justify-center">
          <div className="w-48 h-48 bg-gradient-to-br from-[#006D77] to-[#FF6F61] rounded-2xl flex items-center justify-center text-white text-6xl">
            <FiUserCheck className="w-20 h-20" />
          </div>
        </div>

        {/* Seller Info */}
        <div className="md:w-3/4 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333]">{seller.name}</h1>
              <p className="text-lg text-[#333333]/80">{seller.tagline}</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-6 py-2 rounded-lg border ${isFollowing ? 'border-[#006D77] text-[#006D77]' : 'border-[#FF6F61] bg-[#FF6F61] text-white'}`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2 bg-[#006D77] text-white rounded-lg flex items-center"
              >
                <FiMessageSquare className="mr-2" /> Contact
              </motion.button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={`w-5 h-5 ${i < Math.floor(seller.rating) ? 'fill-[#FF6F61] text-[#FF6F61]' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="font-medium text-[#333333]">{seller.rating}</span>
            <span className="text-[#333333]/60 ml-2">({seller.reviewsCount} reviews)</span>
          </div>

          {/* Seller Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center">
              <FiMapPin className="text-[#006D77] mr-2" />
              <span className="text-[#333333]">{seller.location}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="text-[#006D77] mr-2" />
              <span className="text-[#333333]">Member since {seller.memberSince}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="text-[#006D77] mr-2" />
              <span className="text-[#333333]">Avg. response: {seller.responseTime}</span>
            </div>
            {seller.verified && (
              <div className="flex items-center">
                <FiUserCheck className="text-[#006D77] mr-2" />
                <span className="text-[#333333]">Verified Seller</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex space-x-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#006D77]">{seller.totalListings}</div>
              <div className="text-sm text-[#333333]/60">Listings</div>
            </div>
    
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-[#FFF6E5] rounded-xl border border-[#FF6F61]/20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <FiCheckCircle className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[#333333]">Confirmed sales</div>
                <div className="text-2xl font-bold text-green-600">12</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <FiAlertTriangle className="text-red-600 w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[#333333]">Disputes</div>
                <div className="text-2xl font-bold text-red-600">2</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <FiClock className="text-amber-600 w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[#333333]">Ignored buyers</div>
                <div className="text-2xl font-bold text-amber-600">3</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#333333]/80">{seller.bio}</p>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* === Step 2: Bottom Section (Categories, Listings & Reviews) === */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Specialties</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {seller.categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-white border border-[#F5F5F5] shadow-sm hover:shadow-md transition-all p-4"
              >
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-[#333333]/60">{category.count} items</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Listings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Current Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seller.sellerListings.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white border border-[#F5F5F5] shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[#006D77]/10 to-[#FF6F61]/10 flex items-center justify-center text-5xl">
                  {item.id === 1 && '🧠'}
                  {item.id === 2 && '👽'}
                  {item.id === 3 && '🗣️'}
                  {item.id === 4 && '⚛️'}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold line-clamp-2">{item.title}</h3>
                    <button className="text-[#FF6F61] hover:text-[#FF6F61]/80">
                      <FiHeart />
                    </button>
                  </div>
                  <div className="flex items-center text-[#FF6F61] mb-3">
                    <FiStar className="fill-current mr-1" />
                    <span>{item.rating}</span>
                    <span className="text-[#333333]/60 text-sm ml-2">({item.sales} sales)</span>
                  </div>
                  <div className="font-bold text-[#006D77]">Rs {item.price.toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default SellerProfilePage;