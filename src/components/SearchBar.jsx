import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiChevronDown, FiNavigation, FiCrosshair } from 'react-icons/fi';

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
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');

  // Get user's current location using GPS
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);
    setLocationError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // In a real app, you would reverse geocode these coordinates to get an address
        // For this demo, we'll simulate finding the nearest city
        simulateReverseGeocoding(latitude, longitude);
      },
      (error) => {
        setIsLocating(false);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Location access was denied. Please enable location services.');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            setLocationError('Location request timed out.');
            break;
          default:
            setLocationError('An unknown error occurred.');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Simulate reverse geocoding - in a real app, you would use a geocoding API
  const simulateReverseGeocoding = (lat, lng) => {
    // Simulate API call delay
    setTimeout(() => {
      setIsLocating(false);
      
      // Based on coordinates, determine the nearest major city
      // This is a simplified simulation - in reality you'd use a proper geocoding service
      const simulatedCities = ['Islamabad', 'Lahore', 'Karachi', 'Peshawar', 'Quetta'];
      const randomCity = simulatedCities[Math.floor(Math.random() * simulatedCities.length)];
      
      setLocation(`${randomCity}, Pakistan`);
      setShowLocationDropdown(false);
    }, 1500);
  };

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

          <AnimatePresence>
            {showLocationDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="max-h-96 overflow-y-auto">
                  {/* GPS Location Button */}
                  <div className="p-3 border-b">
                    <button
                      onClick={getCurrentLocation}
                      disabled={isLocating}
                      className={`w-full flex items-center justify-center py-2 px-4 rounded-md ${
                        isLocating 
                          ? 'bg-gray-100 text-gray-400' 
                          : 'bg-[#006D77] text-white hover:bg-[#00565f]'
                      } transition-colors`}
                    >
                      {isLocating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Detecting location...
                        </>
                      ) : (
                        <>
                          <FiCrosshair className="mr-2" />
                          Use my current location
                        </>
                      )}
                    </button>
                    
                    {locationError && (
                      <div className="mt-2 text-sm text-[#FF6F61] bg-[#FF6F61]/10 p-2 rounded">
                        {locationError}
                      </div>
                    )}
                    
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      Or select manually below
                    </div>
                  </div>

                  {!selectedProvince ? (
                    <div>
                      <div className="p-3 bg-gray-50 border-b">
                        <h4 className="font-medium text-gray-700">Select Province</h4>
                      </div>
                      {Object.keys(pakistanProvinces).map((province) => (
                        <button
                          key={province}
                          onClick={() => handleProvinceSelect(province)}
                          className="w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 flex justify-between items-center transition-colors"
                        >
                          <span>{province}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {pakistanProvinces[province].length} areas
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div className="p-3 bg-gray-50 border-b flex items-center">
                        <button 
                          onClick={() => setSelectedProvince('')}
                          className="mr-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <FiChevronDown className="transform rotate-90" />
                        </button>
                        <h4 className="font-medium text-gray-700">{selectedProvince}</h4>
                      </div>
                      {pakistanProvinces[selectedProvince].map((area) => (
                        <button
                          key={area}
                          onClick={() => handleAreaSelect(area)}
                          className={`w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 transition-colors ${
                            location.includes(area) ? 'bg-[#FF6F61]/10 text-[#FF6F61] font-medium' : ''
                          }`}
                        >
                          <div className="flex items-center">
                            <FiMapPin className="mr-2 text-gray-400" />
                            {area}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;