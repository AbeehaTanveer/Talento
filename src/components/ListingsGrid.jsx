import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiChevronRight, FiClock, FiBook, FiStar, FiShoppingCart, FiUsers, FiTrendingUp, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ListingsGrid = () => {
  const [favorites, setFavorites] = useState(new Set());

  // University book data
  const recentlyViewed = [
    { 
      id: 1, 
      title: 'Introduction to Algorithms', 
      price: 'PKR0.045', 
      originalPrice: 'PKR0.065',
      course: 'CS-402',
      condition: 'Like New',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=80' 
    },
    { 
      id: 2, 
      title: 'Organic Chemistry', 
      price: 'PKR0.035', 
      originalPrice: 'PKR0.055',
      course: 'CHEM-301',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=80' 
    },
    { 
      id: 3, 
      title: 'Calculus: Early Transcendentals', 
      price: 'PKR0.025', 
      originalPrice: 'PKR0.045',
      course: 'MATH-201',
      condition: 'Excellent',
      image: 'https://www.madrasshoppe.com/24447-large_default/calculus-early-transcendentals-with-course-mate-doble.jpg?w=500&auto=format&fit=crop&q=80' 
    },
    { 
      id: 4, 
      title: 'Psychology 5th Edition', 
      price: 'PKR0.015', 
      originalPrice: 'PKR0.035',
      course: 'PSY-101',
      condition: 'Fair',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=80' 
    },
    { 
      id: 5, 
      title: 'Principles of Economics', 
      price: 'PKR0.038', 
      originalPrice: 'PKR0.058',
      course: 'ECON-202',
      condition: 'Like New',
      image: 'https://studentsrecoursedha.com/wp-content/uploads/2020/08/197622398_3901401129968588_7843285688690937174_n.jpg?w=500&auto=format&fit=crop&q=80' 
    }
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
    setFavorites(newFavorites);
  };

  const ListingCard = ({ item, size = 'small' }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100
        ${item.size === 'wide' ? 'md:col-span-2' : ''}
        ${item.size === 'tall' ? 'md:row-span-2' : ''}`}
    >
      <button 
        onClick={() => toggleFavorite(item.id)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform"
      >
        <FiHeart className={`text-lg ${favorites.has(item.id) ? 'text-[#FF6F61] fill-[#FF6F61]' : 'text-gray-400'}`} />
      </button>
      
      {/* Condition Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          item.condition === 'Like New' ? 'bg-green-100 text-green-800' :
          item.condition === 'Excellent' ? 'bg-blue-100 text-blue-800' :
          item.condition === 'Good' ? 'bg-amber-100 text-amber-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {item.condition}
        </span>
      </div>
      
      <div className={`w-full ${
        item.size === 'wide' ? 'aspect-[16/9]' : 
        item.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
      }`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-[#006D77] bg-[#006D77]/10 px-2 py-1 rounded-full">
            {item.course}
          </span>
        </div>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{item.title}</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#006D77]">{item.price}</p>
            {item.originalPrice && (
              <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
            )}
          </div>
          <button className="text-xs font-medium bg-[#006D77] text-white px-3 py-1.5 rounded-lg hover:bg-[#005D66] transition-colors">
            View
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
<div className="bg-gray-50 p-4 md:p-6">
  {/* Recently Viewed */}
<section className="mb-12 md:mb-16">
  <div className="flex justify-between items-center mb-6 md:mb-8">
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Recently Viewed</h2>
      <p className="text-xs md:text-sm text-gray-500 mt-1">Items you've recently checked out</p>
    </div>
    <Link 
      to="/listings" 
      className="flex items-center text-sm text-[#006D77] hover:text-[#FF6F61] transition-colors font-semibold group"
    >
      View all 
      <FiChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
  
  <div className="relative">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
      {recentlyViewed.map((item) => (
        <div 
          key={`recent-${item.id}`} 
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group"
        >
          <Link to={`/listing/${item.id}`} className="block">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={item.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Status badge */}
              {item.condition && (
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-lg">
                  <span className={item.condition === "New" ? "text-green-600" : "text-amber-600"}>
                    {item.condition}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-3">
              <div className="mb-1">
                <span className="text-xs font-medium text-[#006D77] bg-[#006D77]/10 px-2 py-1 rounded-full">
                  {item.course || "GENERAL"}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#006D77] transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-[#006D77]">{item.price}</p>
         
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* Featured Course Materials */}
  <section className="mb-12 md:mb-16">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">Featured Course Materials</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {/* Computer Science Featured */}
      <motion.div 
        className="sm:col-span-2 lg:row-span-2 relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Link to="/listingdetails">
          <div className="aspect-[4/3] sm:aspect-[16/9] w-full h-full overflow-hidden bg-gray-100 rounded-xl md:rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80"
              alt="Computer Science Books"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            {/* Mobile Overlay (always visible on small screens) */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <div>
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
                  COMP SCI
                </span>
                <h3 className="text-base font-bold text-white mt-1">CS Textbooks</h3>
                <p className="text-gray-200 text-xs">From PKR 1,200</p>
              </div>
            </div>
            
            {/* Desktop Hover Overlay */}
            <div className="hidden md:absolute md:inset-0 md:bg-gradient-to-t md:from-black/70 md:via-black/20 md:to-transparent md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:flex-col md:justify-end md:p-5 lg:p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span className="text-xs font-medium text-white bg-[#006D77] px-3 py-1.5 rounded-full">
                    COMPUTER SCIENCE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Essential CS Textbooks</h3>
                <p className="text-gray-200 text-sm mb-3">Algorithms, Data Structures, Programming</p>
                <div className="flex items-center">
                  <div className="flex items-center text-amber-400 mr-3">
                    <FiStar className="fill-current mr-1" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-sm text-gray-200">12+ books available</span>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs bg-white text-[#006D77] px-3 py-1.5 rounded-lg font-medium">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Engineering Books */}
      <motion.div 
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -3 }}
      >
        <Link to={`/listingdetails`}>
          <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl md:rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
              alt="Engineering Books"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Mobile Overlay */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
              <div>
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
                  ENGINEERING
                </span>
                <h3 className="text-sm font-bold text-white mt-1">Engineering Refs</h3>
                <p className="text-[#FF6F61] text-xs font-medium">PKR 1,200</p>
              </div>
            </div>
            
            {/* Desktop Hover Overlay */}
            <div className="hidden md:absolute md:inset-0 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:flex-col md:justify-end md:p-4">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full mb-2 inline-block">
                  ENGINEERING
                </span>
                <h3 className="text-base font-bold text-white mb-1">Engineering References</h3>
                <p className="text-[#FF6F61] font-medium text-sm">From PKR 1,200</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs bg-white text-[#006D77] px-2 py-1 rounded font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Medical Textbooks */}
      <motion.div 
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -3 }}
      >
        <Link to={`/listingdetails`}>
          <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl md:rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://i0.wp.com/onlinebookshop.pk/wp-content/uploads/2021/03/Medical-Health-Techniyion-By-Dr.-Muhammad-Iqbal.jpg?fit=1500%2C1150&ssl=1?w=800&auto=format&fit=crop&q=80"
              alt="Medical Textbooks"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Mobile Overlay */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
              <div>
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
                  MEDICINE
                </span>
                <h3 className="text-sm font-bold text-white mt-1">Medical Refs</h3>
                <p className="text-[#FF6F61] text-xs font-medium">PKR 1,500</p>
              </div>
            </div>
            
            {/* Desktop Hover Overlay */}
            <div className="hidden md:absolute md:inset-0 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:flex-col md:justify-end md:p-4">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full mb-2 inline-block">
                  MEDICINE
                </span>
                <h3 className="text-base font-bold text-white mb-1">Medical References</h3>
                <p className="text-[#FF6F61] font-medium text-sm">From PKR 1,500</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs bg-white text-[#006D77] px-2 py-1 rounded font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Business Books */}
      <motion.div 
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -3 }}
      >
        <Link to={`/listingdetails`}>
          <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl md:rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
              alt="Business Books"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Mobile Overlay */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
              <div>
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
                  BUSINESS
                </span>
                <h3 className="text-sm font-bold text-white mt-1">Business Studies</h3>
                <p className="text-[#FF6F61] text-xs font-medium">PKR 900</p>
              </div>
            </div>
            
            {/* Desktop Hover Overlay */}
            <div className="hidden md:absolute md:inset-0 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:flex-col md:justify-end md:p-4">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full mb-2 inline-block">
                  BUSINESS
                </span>
                <h3 className="text-base font-bold text-white mb-1">Business Studies</h3>
                <p className="text-[#FF6F61] font-medium text-sm">From PKR 900</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs bg-white text-[#006D77] px-2 py-1 rounded font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Additional Engineering Card */}
      <motion.div 
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -3 }}
      >
        <Link to={`/listingdetails`}>
          <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl md:rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
              alt="Engineering Books"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Mobile Overlay */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
              <div>
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
                  ENGINEERING
                </span>
                <h3 className="text-sm font-bold text-white mt-1">Engineering Refs</h3>
                <p className="text-[#FF6F61] text-xs font-medium">PKR 1,200</p>
              </div>
            </div>
            
            {/* Desktop Hover Overlay */}
            <div className="hidden md:absolute md:inset-0 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:flex-col md:justify-end md:p-4">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full mb-2 inline-block">
                  ENGINEERING
                </span>
                <h3 className="text-base font-bold text-white mb-1">Engineering References</h3>
                <p className="text-[#FF6F61] font-medium text-sm">From PKR 1,200</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs bg-white text-[#006D77] px-2 py-1 rounded font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  </section>

  {/* Popular This Week Section */}
  <section className="mt-12 md:mt-16">
    <div className="flex justify-between items-center mb-5 md:mb-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Popular This Week</h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Trending textbooks and study materials</p>
      </div>
      <div className="flex items-center text-xs md:text-sm font-medium text-[#006D77] bg-[#F0F9FA] px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
        <FiTrendingUp className="mr-1 md:mr-2" />
        <span>Most Viewed</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {[
        {
          id: 16,
          title: 'Advanced Programming Concepts',
          price: 'PKR 1,800',
          course: 'CS-405',
          condition: 'Like New',
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80'
        },
        { 
          id: 17, 
          title: 'Molecular Biology Fundamentals', 
          price: 'PKR 2,100', 
          course: 'BIO-301', 
          condition: 'Excellent', 
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=80' 
        },
        { 
          id: 18, 
          title: 'Business Analytics Textbook', 
          price: 'PKR 1,600', 
          course: 'BUS-202', 
          condition: 'Good', 
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?w=500&auto=format&fit=crop&q=80' 
        },
        { 
          id: 19, 
          title: 'Organic Chemistry Lab Manual', 
          price: 'PKR 950', 
          course: 'CHEM-205', 
          condition: 'Like New', 
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&auto=format&fit=crop&q=80' 
        }
      ].map((item) => (
        <motion.div
          key={`popular-${item.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -5 }}
          className="relative group"
        >
          <Link to={`/listingdetails`}>
            {/* Rating Badge */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-white/90 backdrop-blur-sm text-amber-700 text-xs font-bold px-2 py-1 z-10 rounded shadow-sm flex items-center">
              <FiStar className="fill-amber-400 text-amber-400 mr-1" />
              <span>{item.rating}</span>
            </div>
            
            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-100 overflow-hidden h-full transition-all duration-300">
              <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover Overlay - Desktop Only */}
                <div className="hidden md:absolute md:inset-0 md:bg-black/40 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:flex md:items-center md:justify-center">
                  <button className="text-xs bg-white text-[#006D77] px-3 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="p-3 md:p-4">
                <div className="mb-2">
                  <span className="text-xs font-medium text-[#006D77] bg-[#006D77]/10 px-2 py-1 rounded-full">
                    {item.course}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 group-hover:text-[#006D77] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-[#006D77]">{item.price}</p>
                    <p className="text-xs text-gray-500">{item.condition}</p>
                  </div>
                  <button className="text-xs font-medium bg-[#006D77] text-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg hover:bg-[#005D66] transition-colors flex items-center">
                    <FiShoppingCart className="mr-1" />
                    View
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
</div>
  );
};

export default ListingsGrid;