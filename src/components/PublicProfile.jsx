import { useState } from "react";

import { FiAlertTriangle, FiBell, FiCalendar, FiCheck, FiCheckCircle, FiCheckSquare, FiChevronDown, FiChevronUp, FiEdit, FiEdit3, FiEye, FiHeart, FiMapPin, FiMenu, FiMessageSquare, FiSearch, FiShield, FiShieldOff, FiShoppingBag, FiStar, FiXCircle } from "react-icons/fi";
import { IoIosQuote, IoIosSearch, IoMdCalendar, IoMdCheckmarkCircle } from "react-icons/io";
import { FaCheckCircle, FaMapPin, FaRegHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const FullWidthProfilePage = () => {
  const [activeTab, setActiveTab] = useState("listings");
  const [showAllListings, setShowAllListings] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Mock user data
  const userData = {
    name: "Sarah Johnson",
    tagline: "Trusted Tech Reseller & Repair Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    location: "Lahore, Pakistan",
    joinDate: "January 2024",
    bio: "I specialize in refurbished electronics with full testing and warranty. Committed to honest deals and transparent transactions. All items are thoroughly tested before listing.",
    isSeller: true,
    isBuyer: true,
    isOwnProfile: true,
    isVerified: true,
    stats: {
      rating: 4.8,
      reviews: 142,
      confirmedSales: 89,
      disputes: 2,
      ignoredBuyers: 5,
      responseRate: "98%",
      responseTime: "within 1 hour"
    },
    listings: {
      active: [
        {
          id: 1,
          title: "iPhone 13 Pro Max - 256GB",
          price: "$750",
          condition: "Boosting",
          image: "https://iplanet.one/cdn/shop/files/iPhone_13_Pro_Max_Silver_PDP_Image_Position-1A__GBEN.jpg?v=1691139033&width=1445",
          views: 142,
          status: "Active"
        },
        {
          id: 2,
          title: "Samsung Galaxy S22 Ultra",
          price: "$700",
          condition: "Like New",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
          views: 98,
          status: "Active"
        },
        {
          id: 3,
          title: "MacBook Air M1 2020",
          price: "$850",
          condition: "Refurbished",
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          views: 205,
          status: "Active"
        },
        {
          id: 4,
          title: "iPad Pro 12.9\" 5th Gen",
          price: "$900",
          condition: "Like New",
          image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          status: "Active"
        }
      ],
      past: [
        {
          id: 5,
          title: "Sony WH-1000XM4 Headphones",
          price: "$220",
          condition: "New",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
          status: "Sold"
        },
        {
          id: 6,
          title: "Apple Watch Series 7",
          price: "$350",
          condition: "Refurbished",
          image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80",
          status: "Sold"
        }
      ]
    },
    reviews: [
      {
        id: 1,
        buyer: "Ali Ahmed",
        rating: 5,
        date: "2 weeks ago",
        text: "Sarah was amazing to work with! The iPhone was exactly as described and works perfectly. Would definitely buy from again."
      },
      {
        id: 2,
        buyer: "Fatima Khan",
        rating: 4.5,
        date: "3 weeks ago",
        text: "Good communication and fast shipping. The laptop had a small scratch that wasn't mentioned, but otherwise great condition."
      },
      {
        id: 3,
        buyer: "Usman Malik",
        rating: 5,
        date: "1 month ago",
        text: "Absolutely perfect transaction! Product was better than described and arrived sooner than expected. Trustworthy seller!"
      }
    ],
    buyerStats: {
      totalPurchases: 24,
      completedOrders: 23,
      disputedOrders: 1,
      buyerRating: 4.9,
      favoriteCategories: ["Electronics", "Home Appliances", "Books"]
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={16}
            className={`${star <= rating ? 'text-[#FF6F61] fill-[#FF6F61]' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  // If user is only a buyer (not a seller)
  if (userData.isBuyer && !userData.isSeller) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Header/Navigation */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button 
                  className="md:hidden p-2 rounded-md text-gray-600"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <FiMenu size={24} />
                </button>
                <h1 className="text-xl font-bold text-[#333333] ml-2">Marketplace</h1>
              </div>
              
              <div className="hidden md:block flex-1 max-w-xl mx-4">
                <div className="relative">
                  <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search products, brands, and categories..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-[#FF6F61] outline-none"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 relative">
                  <FiBell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Buyer Profile Content */}
   
   {/* Buyer Profile Content */}
<main className="w-full bg-[#F5F5F5] min-h-screen">
  {/* Profile Header - Full Width */}
  <div className="bg-white shadow-sm border-b border-gray-200">
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Avatar Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-32 h-32 rounded-xl object-cover border-4 border-[#FFF6E5] shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#006D77] rounded-lg flex items-center justify-center shadow-md border-2 border-white">
              <FiShield size={16} className="text-white" />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
              <span className="text-amber-500 text-sm">⭐</span>
              <span className="text-xs font-medium text-amber-800">4.8 Rating</span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">{userData.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-[#666666]">
                <span className="flex items-center gap-1 px-3 py-1.5 bg-[#FFF6E5] rounded-lg text-sm">
                  <FiMapPin size={14} className="text-[#FF6F61]" />
                  {userData.location}
                </span>
                <span className="flex items-center gap-1 px-3 py-1.5 bg-[#FFF6E5] rounded-lg text-sm">
                  <IoMdCalendar size={14} className="text-[#FF6F61]" />
                  Joined {userData.joinDate}
                </span>
                <span className="flex items-center gap-1 px-3 py-1.5 bg-[#FFF6E5] rounded-lg text-sm">
                  <FaCheckCircle  size={14} className="text-[#006D77]" />

                  {/* remain */}
                  12 Successful Transactions
                </span>
              </div>
            </div>
            <button className="bg-[#FF6F61] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#e55a50] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all min-w-fit">
              <FiMessageSquare size={18} />
              Message User
            </button>
          </div>
          <p className="text-[#666666] text-lg leading-relaxed max-w-3xl">
            Active member of our marketplace community. Trusted buyer with a history of positive transactions 
            and respectful communication. Committed to maintaining a safe and reliable marketplace environment.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Trust Indicators Section - Full Width Grid */}
  <div className="px-6 py-12">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-[#333333] mb-2 text-center">Trust & Verification</h2>
      <p className="text-[#666666] text-center mb-10 max-w-3xl mx-auto">
        Our verification system ensures a secure marketplace experience for all community members
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#FFF6E5] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FiShieldOff size={28} className="text-[#006D77]" />
          </div>
          <h3 className="font-semibold text-[#333333] mb-3 text-lg">Verified Identity</h3>
          <p className="text-sm text-[#666666] leading-relaxed">
            Government ID verified for secure transactions and community trust building
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#FFF6E5] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaRegHeart size={28} className="text-[#FF6F61]" />
          </div>
          <h3 className="font-semibold text-[#333333] mb-3 text-lg">Community Standing</h3>
          <p className="text-sm text-[#666666] leading-relaxed">
            98% positive feedback from 12 transactions with responsive communication
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#FFF6E5] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FiShoppingBag size={28} className="text-[#006D77]" />
          </div>
          <h3 className="font-semibold text-[#333333] mb-3 text-lg">Purchase History</h3>
          <p className="text-sm text-[#666666] leading-relaxed">
            Active marketplace participant with consistent and reliable transaction history
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Psychological Trust Section - Full Width */}
  <div className="px-6 py-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Building Trust Through Transparency</h2>
          <p className="text-[#666666] text-lg leading-relaxed mb-6">
            We believe that trust is the foundation of every successful marketplace interaction. 
            Our verification processes and community standards ensure a secure environment for all members.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#006D77] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FiCheck size={14} className="text-white" />
              </div>
              <p className="text-[#666666]">Secure payment protection on all transactions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#006D77] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FiCheck size={14} className="text-white" />
              </div>
              <p className="text-[#666666]">Identity verification for enhanced security</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#006D77] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FiCheck size={14} className="text-white" />
              </div>
              <p className="text-[#666666]">Community feedback system for accountability</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#FFF6E5] to-[#FF6F61]/10 rounded-2xl p-8 border-l-4 border-[#FF6F61]">
          <div className="text-[#333333]">
            <IoIosQuote size={32} className="text-[#FF6F61] mb-4" />
            <p className="text-lg italic leading-relaxed mb-6">
              "Trust is built through consistent actions and respectful communication. 
              Our community thrives when members engage authentically and responsibly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#006D77] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <div>
                <p className="font-medium text-[#333333]">Sarah Johnson</p>
                <p className="text-sm text-[#666666]">Community Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                className="md:hidden p-2 rounded-md text-gray-600"
                onClick={() => setIsSidebarOpen(true)}
              >
                <FiMenu size={24} />
              </button>
              <h1 className="text-xl font-bold text-[#333333] ml-2">Marketplace</h1>
            </div>
            
            <div className="hidden md:block flex-1 max-w-xl mx-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products, brands, and categories..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-[#FF6F61] outline-none"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 relative">
                <FiBell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    
    {/* Avatar */}
    <div className="flex-shrink-0 mb-4 md:mb-0">
      <img
        src={userData.avatar}
        alt={userData.name}
        className="w-28 h-28 rounded-full object-cover border-4 border-[#FFF6E5] shadow-md"
      />
    </div>

    {/* Content */}
    <div className="flex-1 w-full text-center md:text-left">
      {/* Name + Verified + Edit */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <h1 className="text-2xl font-bold text-[#333333]">{userData.name}</h1>
          {userData.isVerified && (
            <span className="bg-[#006D77] text-white p-1 rounded-full">
              <FiCheckCircle size={16} />
            </span>
          )}
        </div>

        {userData.isOwnProfile && (
          <div className="flex justify-center md:ml-auto">
            <button className="bg-[#FFF6E5] text-[#FF6F61] px-4 py-1 rounded-lg font-medium hover:bg-[#FF6F61] hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base">
              <FiEdit size={14} />
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Tagline */}
      <p className="text-lg text-[#FF6F61] font-medium mb-2">{userData.tagline}</p>

      {/* Location + Join Date */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2 text-[#666666] text-sm mb-4">
        <span className="flex items-center justify-center gap-1">
          <FaMapPin size={14} />
          {userData.location}
        </span>
        <span className="flex items-center justify-center gap-1">
          <FiCalendar size={14} />
          Joined {userData.joinDate}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row flex-wrap gap-3">
        <button className="w-full md:w-auto bg-[#FF6F61] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#e55a50] transition-colors flex items-center justify-center gap-2">
          <FaRegMessage  size={16} />
          {/* Remain */}
          Message Seller
        </button>
        <button className="w-full md:w-auto bg-white text-[#333333] border border-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <FiEye size={16} />
          View Listings
        </button>
        {userData.isOwnProfile && (
          <button className="w-full md:w-auto bg-white text-[#333333] border border-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <FiHeart size={16} />
            My Favorites
          </button>
        )}
      </div>
    </div>
  </div>
</div>


        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-[#333333] mb-4">About</h2>
              <p className="text-[#333333] mb-6">{userData.bio}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                  <div className="w-10 h-10 bg-[#FF6F61] rounded-full flex items-center justify-center text-white">
                    <FiStar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Average Rating</p>
                    <div className="flex items-center gap-2">
                      {renderStars(userData.stats.rating)}
                      <span className="font-bold text-[#333333]">({userData.stats.rating})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <IoMdCheckmarkCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Confirmed Sales</p>
                    <p className="font-bold text-[#333333] text-xl">{userData.stats.confirmedSales}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    <FiAlertTriangle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Disputes</p>
                    <p className="font-bold text-[#333333] text-xl">{userData.stats.disputes}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <FiXCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Ignored Buyers</p>
                    <p className="font-bold text-[#333333] text-xl">{userData.stats.ignoredBuyers}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {userData.isOwnProfile && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#333333] mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 text-[#333333] hover:bg-[#FFF6E5] rounded-xl transition-colors">
                    <FaShoppingBag size={20} />
                    <span>My Purchases</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-[#333333] hover:bg-[#FFF6E5] rounded-xl transition-colors">
                    <FiHeart size={20} />
                    <span>My Favorites</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-[#333333] hover:bg-[#FFF6E5] rounded-xl transition-colors">
                    <FiEdit3 size={20} />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6 bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                className={`px-6 py-3 font-medium relative ${activeTab === "listings" ? "text-[#FF6F61]" : "text-[#333333]"}`}
                onClick={() => setActiveTab("listings")}
              >
                Listings
                {activeTab === "listings" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6F61]"></div>
                )}
              </button>
              <button
                className={`px-6 py-3 font-medium relative ${activeTab === "reviews" ? "text-[#FF6F61]" : "text-[#333333]"}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({userData.reviews.length})
                {activeTab === "reviews" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6F61]"></div>
                )}
              </button>
              <button
                className={`px-6 py-3 font-medium relative ${activeTab === "about" ? "text-[#FF6F61]" : "text-[#333333]"}`}
                onClick={() => setActiveTab("about")}
              >
                About
                {activeTab === "about" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6F61]"></div>
                )}
              </button>
            </div>
            
            {/* Tab Content */}
            {activeTab === "listings" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#333333] mb-6">Active Listings</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.listings.active.map((item) => (
                    <div key={item.id} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-[#FF6F61] text-white px-2 py-1 rounded-full text-xs font-medium">
                          {item.condition}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-medium text-[#333333] mb-2 line-clamp-1">{item.title}</h3>
                        <p className="font-bold text-[#333333] text-lg mb-2">{item.price}</p>
                        <div className="flex justify-between items-center text-sm text-[#666666]">
                          <span className="flex items-center">
                            <FiEye size={14} className="mr-1" />
                            {item.views} views
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {userData.listings.past.length > 0 && (
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-[#333333]">Past Listings</h2>
                      <button 
                        className="text-[#FF6F61] font-medium hover:underline flex items-center"
                        onClick={() => setShowAllListings(!showAllListings)}
                      >
                        {showAllListings ? 'Hide' : 'Show'} Past Listings
                        {showAllListings ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                      </button>
                    </div>
                    
                    {showAllListings && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userData.listings.past.map((item) => (
                          <div key={item.id} className="border border-gray-100 rounded-xl overflow-hidden opacity-70">
                            <div className="h-48 relative">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <span className="bg-[#333333] text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {item.status}
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-4">
                              <h3 className="font-medium text-[#333333] mb-2 line-clamp-1">{item.title}</h3>
                              <p className="font-bold text-[#333333] text-lg">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#333333] mb-6">Customer Reviews</h2>
                
                <div className="space-y-6">
                  {userData.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#006D77] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {review.buyer.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-[#333333]">{review.buyer}</h4>
                            <span className="text-sm text-[#666666]">{review.date}</span>
                          </div>
                          <div className="mb-2">
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-[#333333]">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "about" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#333333] mb-6">About the Seller</h2>
                
                <div className="prose max-w-none">
                  <p className="text-[#333333] mb-4">
                    {userData.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                      <MdLocalShipping size={20} className="text-[#FF6F61]" />
                      <div>
                        <p className="text-sm text-[#666666]">Location</p>
                        <p className="font-medium text-[#333333]">{userData.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                      <FiCalendar size={20} className="text-[#FF6F61]" />
                      <div>
                        <p className="text-sm text-[#666666]">Member Since</p>
                        <p className="font-medium text-[#333333]">{userData.joinDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                      <FiMessageSquare size={20} className="text-[#FF6F61]" />
                      {/* remain */}
                      <div>
                        <p className="text-sm text-[#666666]">Response Rate</p>
                        <p className="font-medium text-[#333333]">{userData.stats.responseRate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-[#FFF6E5] rounded-xl">
                      <FiEye size={20} className="text-[#FF6F61]" />
                      <div>
                        <p className="text-sm text-[#666666]">Response Time</p>
                        <p className="font-medium text-[#333333]">{userData.stats.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                className="p-1 rounded-lg hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                <FaUser size={20} />
                <span>Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                <FiShoppingBag size={20} />
                <span>Purchases</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                <FiHeart size={20} />
                <span>Favorites</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                <FaRegMessage  size={20} />
             
                <span>Messages</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default FullWidthProfilePage;