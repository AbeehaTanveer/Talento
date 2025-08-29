import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser, 
  FiHeart, 
  FiShoppingBag, 
  FiStar, 
  FiMapPin, 
  FiCalendar,
  FiClock,
  FiMessageSquare,
  FiCreditCard,
  FiShield,
  FiCheckCircle,
  FiTrendingUp
} from 'react-icons/fi';

const BuyerProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample buyer data
  const buyer = {
    name: "Sarah Johnson",
    username: "@sarahj",
    tagline: "Frequent buyer of creative services",
    location: "New York, NY",
    memberSince: "Jan 2023",
    responseTime: "2 hours",
    verified: true,
    totalOrders: 47,
    completedOrders: 45,
    favoriteSellers: 12,
    averageRating: 4.8,
    reviewsCount: 23,
    bio: "Marketing director who regularly commissions design work, content creation, and branding projects for my company and personal ventures.",
    stats: {
      confirmedPurchases: 45,
      disputes: 2,
      canceledOrders: 2,
      totalSpent: "$8,450",
      favoriteCategory: "Graphic Design"
    }
  };

  const recentActivity = [
    { id: 1, type: 'order', description: 'Ordered logo design from CreativeStudio', time: '2 hours ago' },
    { id: 2, type: 'review', description: 'Rated a seller 5 stars', time: '1 day ago' },
    { id: 3, type: 'purchase', description: 'Completed purchase: Social media kit', time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F5] to-[#FFF6E5]">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Banner */}
        <div className="h-48 bg-gradient-to-r from-[#006D77] to-[#006D77]/80 rounded-t-2xl relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('https://example.com/grid-pattern.png')] opacity-10"></div>
          
          {/* Profile Avatar */}
          <div className="absolute mt-22 left-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF6F61] to-[#FF8C7A] rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg border-4 border-white">
              <FiUser className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Profile Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-[#333333]">{buyer.name}</h1>
                  <p className="text-lg text-[#006D77]">{buyer.username}</p>
                  <p className="text-[#333333]/80 mt-1">{buyer.tagline}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 md:mt-0 px-6 py-2 bg-[#006D77] text-white rounded-lg flex items-center"
                >
                  <FiMessageSquare className="mr-2" /> Message
                </motion.button>
              </div>

              {/* Buyer Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <FiMapPin className="text-[#006D77] mr-2" />
                  <span className="text-[#333333]">{buyer.location}</span>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="text-[#006D77] mr-2" />
                  <span className="text-[#333333]">Member since {buyer.memberSince}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="text-[#006D77] mr-2" />
                  <span className="text-[#333333]">Avg. response: {buyer.responseTime}</span>
                </div>
                {buyer.verified && (
                  <div className="flex items-center">
                    <FiCheckCircle className="text-[#006D77] mr-2" />
                    <span className="text-[#333333]">Verified Buyer</span>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#FFF6E5] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#006D77]">{buyer.totalOrders}</div>
                  <div className="text-sm text-[#333333]/60">Total Orders</div>
                </div>
                <div className="bg-[#FFF6E5] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#006D77]">{buyer.completedOrders}</div>
                  <div className="text-sm text-[#333333]/60">Completed</div>
                </div>
                <div className="bg-[#FFF6E5] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#006D77]">{buyer.favoriteSellers}</div>
                  <div className="text-sm text-[#333333]/60">Favorites</div>
                </div>
                <div className="bg-[#FFF6E5] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#006D77]">{buyer.averageRating}</div>
                  <div className="text-sm text-[#333333]/60">Avg Rating</div>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-6 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-[#333333] mb-4 flex items-center">
                    <FiTrendingUp className="text-[#006D77] mr-2" />
                    Purchase History
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Confirmed Purchases</span>
                      <span className="font-semibold text-green-600">{buyer.stats.confirmedPurchases}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Disputes</span>
                      <span className="font-semibold text-red-600">{buyer.stats.disputes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Canceled Orders</span>
                      <span className="font-semibold text-amber-600">{buyer.stats.canceledOrders}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#333333] mb-4 flex items-center">
                    <FiCreditCard className="text-[#006D77] mr-2" />
                    Spending Overview
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Total Spent</span>
                      <span className="font-semibold text-[#006D77]">{buyer.stats.totalSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Favorite Category</span>
                      <span className="font-semibold text-[#006D77]">{buyer.stats.favoriteCategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333]">Trust Score</span>
                      <span className="font-semibold text-green-600">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#333333] mb-3">About</h3>
                <p className="text-[#333333]/80 leading-relaxed">{buyer.bio}</p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  <FiCheckCircle className="mr-1" /> Verified Payment
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <FiShield className="mr-1" /> Secure Account
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                  <FiStar className="mr-1" /> Top Buyer
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="font-semibold text-[#333333] mb-4 flex items-center">
                <FiClock className="text-[#006D77] mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="w-2 h-2 bg-[#006D77] rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-[#333333] text-sm">{activity.description}</p>
                      <p className="text-[#333333]/60 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-[#333333] mb-4 flex items-center">
                <FiShield className="text-[#006D77] mr-2" />
                Trust Score
              </h3>
              <div className="bg-gray-100 rounded-full h-2 mb-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-[#333333]/60 mb-4">
                <span>0</span>
                <span>92%</span>
                <span>100</span>
              </div>
              <div className="text-sm text-[#333333]/80">
                Based on completed orders, timely payments, and positive feedback
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default BuyerProfilePage;