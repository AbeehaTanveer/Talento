import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';

const SearchBar = ({ searchQuery, setSearchQuery, location, setLocation }) => {
  const pakistanProvinces = {
    'Punjab': ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala'],
    'Sindh': ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Mirpur Khas'],
    'Khyber Pakhtunkhwa': ['Peshawar', 'Abbottabad', 'Mardan', 'Swat', 'Nowshera'],
    'Balochistan': ['Quetta', 'Gwadar', 'Turbat', 'Khuzdar', 'Chaman'],
    'Islamabad': ['Islamabad'],
    'Gilgit-Baltistan': ['Gilgit', 'Skardu', 'Hunza'],
    'Azad Kashmir': ['Muzaffarabad', 'Mirpur', 'Kotli']
  };

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setSelectedArea('');
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setLocation(`${area}, ${selectedProvince}`);
    setShowLocationDropdown(false);
  };

  return (
    <div className="mb-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-3"
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pr-12 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F61] border border-gray-200"
          />
          <FiSearch className="absolute right-4 top-4 text-xl text-gray-400" />
        </div>

        {/* Location Selector */}
        <div className="relative flex-1">
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="w-full flex items-center justify-between p-4 rounded-lg bg-white shadow-sm border border-gray-200 hover:border-gray-300 text-left"
          >
            <div className="flex items-center">
              <FiMapPin className="text-gray-400 mr-2" />
              <span>{location || 'Select location in Pakistan'}</span>
            </div>
            <FiChevronDown className={`transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showLocationDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="max-h-96 overflow-y-auto ">
                {!selectedProvince ? (
                  <div>
                    <div className="p-3 bg-gray-50 border-b">
                      <h4 className="font-medium text-gray-700">Select Province</h4>
                    </div>
                    {Object.keys(pakistanProvinces).map((province) => (
                      <button
                        key={province}
                        onClick={() => handleProvinceSelect(province)}
                        className="w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 flex justify-between items-center"
                      >
                        <span>{province}</span>
                        <span className="text-xs text-gray-500">{pakistanProvinces[province].length} areas</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <div className="p-3 bg-gray-50 border-b flex items-center">
                      <button 
                        onClick={() => setSelectedProvince('')}
                        className="mr-2 text-gray-500 hover:text-gray-700"
                      >
                        &larr;
                      </button>
                      <h4 className="font-medium text-gray-700">{selectedProvince}</h4>
                    </div>
                    {pakistanProvinces[selectedProvince].map((area) => (
                      <button
                        key={area}
                        onClick={() => handleAreaSelect(area)}
                        className={`w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 ${
                          location.includes(area) ? 'bg-[#FF6F61]/10 text-[#FF6F61]' : ''
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;