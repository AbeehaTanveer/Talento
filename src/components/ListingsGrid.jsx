import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const EtsyStyleHomepage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Recently viewed items data
  const [recentlyViewed] = useState([
    {
      id: 1,
      title: "Computer Science Textbook",
      subtitle: "Latest Edition - Excellent Condition",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: '₨ 2,500'
    },
    {
      id: 2,
      title: "MacBook Pro 2022",
      subtitle: "M2 Chip - 16GB RAM",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: '₨ 185,000'
    },
    {
      id: 3,
      title: "Premium Fountain Pen Set",
      subtitle: "Smooth Writing - 3 Piece Set",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: '₨ 3,200'
    },
    {
      id: 4,
      title: "Calculus Reference Book",
      subtitle: "Solved Examples - Practice Problems",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: '₨ 1,800'
    },
    {
      id: 5,
      title: "Dell XPS 13 Laptop",
      subtitle: "i7 Processor - 512GB SSD",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: '₨ 145,000'
    }
  ]);

  // Interests data with different aspect ratios for masonry layout
 const interests = [
    {
      id: 1,
      title: "Textbooks",
      subtitle: "125+ listings available",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 2,
      title: "Laptops & Tech",
      subtitle: "Premium devices",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 3,
      title: "Study Materials",
      subtitle: "Notes & guides",
      image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 4,
      title: "Stationery",
      subtitle: "Writing essentials",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 5,
      title: "Dorm Essentials",
      subtitle: "Comfort items",
      image: "https://images.unsplash.com/photo-1586023492125-27a5ceee11bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 6,
      title: "Electronics",
      subtitle: "Gadgets & accessories",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 7,
      title: "Art Supplies",
      subtitle: "Creative materials",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn03-C9HUY_-csGtHqTrdiIwZcd2DkXGN9w&s&w=600&q=80",
      aspect: 'square'
    },
    {
      id: 8,
      title: "Sports Equipment",
      subtitle: "Fitness gear",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aspect: 'square'
    }
  ];
  // Function to determine column count based on screen size
  const getColumnCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  // Organize items into columns for masonry layout
  const organizeIntoColumns = (items, columnCount) => {
    const columns = Array.from({ length: columnCount }, () => []);
    items.forEach((item, index) => {
      columns[index % columnCount].push(item);
    });
    return columns;
  };

  const [columnCount, setColumnCount] = useState(getColumnCount());
  const columns = organizeIntoColumns(interests, columnCount);

  // Update column count on resize
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Recently Viewed Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Recently Viewed</h2>
          <button className="text-sm text-[#006D77] hover:text-[#00525a] transition-colors font-medium">
            View all
          </button>
        </div>
        
        <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
          {recentlyViewed.map((item) => (
            <motion.div 
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                <p className="text-xs text-gray-500 truncate">{item.subtitle}</p>
                <p className="text-sm font-semibold text-[#006D77] mt-1">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Jump into your interests Section */}
 <section className="mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Jump into your interests</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover curated collections tailored to your campus life</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[minmax(200px,1fr)]">
        {interests.map((item) => (
          <motion.div
            key={item.id}
            className="relative rounded-xl overflow-hidden bg-white cursor-pointer group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => !isMobile && setHoveredCard(item.id)}
            onHoverEnd={() => !isMobile && setHoveredCard(null)}
            onClick={() => isMobile && setHoveredCard(hoveredCard === item.id ? null : item.id)}
          >
            {/* Image container */}
            <div className="w-full h-full overflow-hidden aspect-square">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Default title (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
            </div>

            {/* Hover overlay */}
            <AnimatePresence>
              {hoveredCard === item.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#006D77]/90 via-[#006D77]/40 to-transparent flex flex-col justify-end p-5 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-100 mb-4 opacity-90">{item.subtitle}</p>
                  <motion.button 
                    className="flex items-center text-sm font-medium bg-white text-[#006D77] px-4 py-2 rounded-lg self-start hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    Explore <FiArrowRight className="ml-1" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile overlay */}
            {isMobile && hoveredCard === item.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#006D77]/90 via-[#006D77]/40 to-transparent flex flex-col justify-end p-5 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-100 mb-4 opacity-90">{item.subtitle}</p>
                <button className="text-sm font-medium bg-white text-[#006D77] px-4 py-2 rounded-lg self-start">
                  Explore
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center text-[#006D77] font-medium hover:text-[#00525a] transition-colors">
          View all categories <FiArrowRight className="ml-2" />
        </button>
      </div>
    </section>
      {/* Additional Sections */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Popular Right Now</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recentlyViewed.map((item) => (
            <motion.div 
              key={`popular-${item.id}`}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg border border-gray-100"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</p>
                <p className="text-sm font-semibold text-[#006D77] mt-1">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EtsyStyleHomepage;