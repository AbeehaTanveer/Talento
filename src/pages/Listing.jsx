import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for listings
const mockListings = [
  {
    id: 1,
    title: "Vintage Designer Leather Jacket",
    price: 189,
    location: "Tokyo, Japan",
    rating: 4.8,
    isFeatured: true,
    isBoosted: true,
    condition: "Vintage",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Handcrafted Ceramic Dinner Set",
    price: 125,
    location: "Seoul, South Korea",
    rating: 4.9,
    isNew: true,
    condition: "Handmade",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Limited Edition Smart Watch",
    price: 299,
    location: "San Francisco, USA",
    rating: 4.5,
    condition: "New",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Antique Wooden Writing Desk",
    price: 450,
    location: "London, UK",
    rating: 4.7,
    isBoosted: true,
    condition: "Refurbished",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Handmade Leather Portfolio",
    price: 95,
    location: "Milan, Italy",
    rating: 4.6,
    condition: "Handmade",
    image: "https://images.unsplash.com/photo-1549318061-5ecf2f234b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    title: "Smart Home Hub with Voice Control",
    price: 199,
    location: "Berlin, Germany",
    rating: 4.3,
    isNew: true,
    condition: "New",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    title: "Minimalist Wall Art Print",
    price: 65,
    location: "Stockholm, Sweden",
    rating: 4.9,
    condition: "New",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    title: "Vintage Record Player",
    price: 220,
    location: "Melbourne, Australia",
    rating: 4.7,
    isBoosted: true,
    condition: "Vintage",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

// Filter options
const filterOptions = {
  categories: ['Electronics', 'Fashion', 'Home & Garden', 'Art & Collectibles', 'Handmade', 'Vintage'],
  conditions: ['New', 'Used', 'Handmade', 'Vintage', 'Refurbished'],
  sellerTypes: ['Individual', 'Business', 'Verified Seller'],
  deliveryOptions: ['Delivery', 'Pickup', 'Both'],
  ratings: [4, 3, 2, 1]
};

const TalantoListings = () => {
  const [listings, setListings] = useState(mockListings);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[filterType]?.includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
        if (newFilters[filterType].length === 0) delete newFilters[filterType];
      } else {
        newFilters[filterType] = [...(newFilters[filterType] || []), value];
      }
      return newFilters;
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({});
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-sm ${index < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  // Filter section component
  const FilterSection = ({ title, children, isOpenByDefault = true }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);
    
    return (
      <div className="border-b border-gray-200 py-4">
        <button 
          className="flex justify-between items-center w-full text-left font-semibold text-teal"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span>{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            {children}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-lightgray text-charcoal mt-20">
      {/* Top utility bar */}
      <div className="bg-white py-3 px-4 border-b border-gray-200 flex justify-between items-center">
        <div className="text-sm">
          <span className="text-gray-500">Home / Marketplace / </span>
          <span className="font-medium">All Items</span>
          <span className="text-gray-500 ml-2">({listings.length} results)</span>
        </div>
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button 
              className="text-teal font-medium flex items-center"
              onClick={() => setIsFilterOpen(true)}
            >
              <span className="mr-1">Filters</span>
              {Object.keys(activeFilters).length > 0 && (
                <span className="bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {Object.keys(activeFilters).length}
                </span>
              )}
            </button>
          )}

           <div className="relative flex-1">
                    <input
                      type="text"
                      value={''}
                      placeholder="Search products, services..."
                      className="w-full p-4 pr-12 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F61] border border-gray-200"
                    />
                  </div>
          <select 
            className="text-sm border-none bg-transparent focus:ring-teal focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="flex">
        {/* Filter sidebar - hidden on mobile, shown as modal */}
        {!isMobile ? (
          <div className="w-72 flex-shrink-0 p-4">
            <div className="glass-panel p-5 sticky top-4">
              <h2 className="text-lg font-semibold text-teal mb-4">Filters</h2>
              
              <FilterSection title="Category">
                <div className="space-y-2">
                  {filterOptions.categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-coral focus:ring-coral"
                        checked={activeFilters.category?.includes(category) || false}
                        onChange={() => handleFilterChange('category', category)}
                      />
                      <span className="ml-2 text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Condition">
                <div className="space-y-2">
                  {filterOptions.conditions.map(condition => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-coral focus:ring-coral"
                        checked={activeFilters.condition?.includes(condition) || false}
                        onChange={() => handleFilterChange('condition', condition)}
                      />
                      <span className="ml-2 text-sm">{condition}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Price Range">
                <div className="pt-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-coral"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                </div>
              </FilterSection>

              <FilterSection title="Seller Type">
                <div className="space-y-2">
                  {filterOptions.sellerTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-coral focus:ring-coral"
                        checked={activeFilters.sellerType?.includes(type) || false}
                        onChange={() => handleFilterChange('sellerType', type)}
                      />
                      <span className="ml-2 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>
        ) : (
          // Mobile filter modal
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end"
                onClick={() => setIsFilterOpen(false)}
              >
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="bg-white w-full max-h-[80vh] rounded-t-xl overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-5">
                      <h2 className="text-xl font-semibold text-teal">Filters</h2>
                      <button onClick={() => setIsFilterOpen(false)}>✕</button>
                    </div>
                    
                    <FilterSection title="Category">
                      <div className="space-y-2">
                        {filterOptions.categories.map(category => (
                          <label key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-coral focus:ring-coral"
                              checked={activeFilters.category?.includes(category) || false}
                              onChange={() => handleFilterChange('category', category)}
                            />
                            <span className="ml-2 text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </FilterSection>

                    <FilterSection title="Condition">
                      <div className="space-y-2">
                        {filterOptions.conditions.map(condition => (
                          <label key={condition} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-coral focus:ring-coral"
                              checked={activeFilters.condition?.includes(condition) || false}
                              onChange={() => handleFilterChange('condition', condition)}
                            />
                            <span className="ml-2 text-sm">{condition}</span>
                          </label>
                        ))}
                      </div>
                    </FilterSection>

                    <div className="py-4">
                      <button className="w-full bg-coral text-white py-2.5 font-medium">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Filter chips */}
          {Object.keys(activeFilters).length > 0 && (
            <div className="flex items-center flex-wrap gap-2 mb-4">
              {Object.entries(activeFilters).map(([key, values]) => 
                values.map(value => (
                  <motion.div
                    key={`${key}-${value}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="filter-chip bg-white border border-gray-200 rounded-sm px-3 py-1.5 text-sm flex items-center"
                  >
                    <span>{value}</span>
                    <button
                      className="ml-2 text-gray-400 hover:text-charcoal"
                      onClick={() => handleFilterChange(key, value)}
                    >
                      ✕
                    </button>
                  </motion.div>
                ))
              )}
              <button
                className="text-coral text-sm font-medium ml-auto"
                onClick={clearAllFilters}
              >
                Clear all
              </button>
            </div>
          )}

          {/* Listings grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {listings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="listing-card bg-white border border-gray-200 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="card-image w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
   {listing.isBoosted && (
  <div className="absolute top-2 left-2 bg-gradient-to-r from-coral to-orange-500 text-white text-xs font-bold px-2 py-1 flex items-center shadow-lg overflow-hidden animate-shine">
    <svg className="w-3 h-3 mr-1 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"/>
    </svg>
    <span className="animate-typewriter">BOOSTED</span>
  </div>
)}
{listing.isNew && (
  <div className="absolute top-2 left-2 bg-gradient-to-r from-teal to-cyan-600 text-white text-xs font-bold px-2 py-1 flex items-center shadow-lg overflow-hidden animate-shine-delayed">
    <svg className="w-3 h-3 mr-1 animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
    <span className="animate-typewriter-delayed">NEW</span>
  </div>
)}
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-charcoal line-clamp-2 mb-1">{listing.title}</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-teal">${listing.price}</span>
                    <div className="flex items-center">
                      {renderStars(listing.rating)}
                      <span className="text-xs text-gray-500 ml-1">{listing.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{listing.location}</div>
                  <div className="text-xs text-gray-500 mt-1">{listing.condition}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-200 rounded-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 border border-coral text-coral font-medium rounded-sm">1</button>
              <button className="w-8 h-8 border border-gray-200 font-medium rounded-sm">2</button>
              <button className="w-8 h-8 border border-gray-200 font-medium rounded-sm">3</button>
              <span className="px-2">...</span>
              <button className="w-8 h-8 border border-gray-200 font-medium rounded-sm">8</button>
              <button className="p-2 border border-gray-200 rounded-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter button */}
      {isMobile && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button 
            className="w-full bg-teal text-white py-3 font-medium"
            onClick={() => setIsFilterOpen(true)}
          >
            Show Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TalantoListings;