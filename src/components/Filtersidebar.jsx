import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiMapPin } from 'react-icons/fi';

const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters,
  locations 
}) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-xl overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#006D77]">Filters</h2>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-all text-[#666]"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-[#333]">Categories</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Categories' },
                    { value: 'crafts', label: 'Handmade Crafts' },
                    { value: 'art', label: 'Art & Paintings' },
                    { value: 'fashion', label: 'Fashion' },
                    { value: 'home', label: 'Home Decor' }
                  ].map(category => (
                    <button
                      key={category.value}
                      onClick={() => setFilters({...filters, category: category.value})}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                        filters.category === category.value 
                          ? 'bg-[#FF6F61] text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-[#333]">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({
                      ...filters, 
                      priceRange: [0, parseInt(e.target.value)]
                    })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-[#666]">
                    <span>Rs 0</span>
                    <span>Rs {filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-[#333]">Location</h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map(location => (
                    <button
                      key={location.value}
                      onClick={() => setFilters({...filters, location: location.value})}
                      className={`px-3 py-2 rounded-lg transition-all ${
                        filters.location === location.value
                          ? 'bg-[#006D77] text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {location.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                className="w-full py-3 bg-[#FF6F61] text-white rounded-lg font-medium hover:bg-[#FF6F61]/90 transition-all shadow-sm"
                onClick={onClose}
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterSidebar;