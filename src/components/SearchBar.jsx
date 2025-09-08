import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiMapPin, FiChevronDown, FiX, FiCheck } from 'react-icons/fi';

const SearchBar = ({ searchQuery, setSearchQuery, university, setUniversity }) => {
  // University data structure
  const universities = {
    'Lahore': [
      { 
        id: 1, 
        name: 'Lahore College for Women University (LCWU)', 
        campuses: ['Main Campus', 'City Campus', 'Jail Road Campus']
      }
    ],
    'Islamabad': [
      { 
        id: 2, 
        name: 'Quaid-i-Azam University', 
        campuses: ['Main Campus', 'New Campus']
      }
    ],
    'Karachi': [
      { 
        id: 3, 
        name: 'University of Karachi', 
        campuses: ['Main Campus', 'North Campus']
      }
    ]
  };

  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUniversityDropdown(false);
        setSelectedCity('');
        setSelectedUniversity(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleUniversitySelect = (uni) => {
    setSelectedUniversity(uni);
  };

  const handleCampusSelect = (campus) => {
    setUniversity(`${campus}, ${selectedUniversity.name}`);
    setShowUniversityDropdown(false);
    setSelectedCity('');
    setSelectedUniversity(null);
  };

  const clearUniversity = () => {
    setUniversity('');
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Check if a campus is selected
  const isCampusSelected = (campus) => {
    return university && university.startsWith(campus);
  };

  return (
    <div className="mb-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-4"
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search textbooks, notes, supplies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 pr-10 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#006D77] border border-gray-200 text-gray-700"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FiX className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* University Selector */}
        <div className="relative md:w-80" ref={dropdownRef}>
          <button
            onClick={() => setShowUniversityDropdown(!showUniversityDropdown)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-gray-300 text-left transition-colors"
          >
            <div className="flex items-center truncate">
              <FiMapPin className="text-gray-400 mr-2 flex-shrink-0" />
              <span className="truncate">{university || 'Select university'}</span>
            </div>
            <FiChevronDown className={`flex-shrink-0 transition-transform ${showUniversityDropdown ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showUniversityDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="max-h-80 overflow-y-auto">
                  {/* Header with clear button */}
                  <div className="p-3 bg-gray-50 border-b flex justify-between items-center">
                    <h4 className="font-medium text-gray-700">Select University</h4>
                    {university && (
                      <button 
                        onClick={clearUniversity}
                        className="text-sm text-[#006D77] hover:text-[#00565f] font-medium"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {!selectedCity ? (
                    <div>
                      {Object.keys(universities).map((city) => (
                        <button
                          key={city}
                          onClick={() => handleCitySelect(city)}
                          className="w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 flex justify-between items-center transition-colors text-gray-700"
                        >
                          <span>{city}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {universities[city].length} universities
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : !selectedUniversity ? (
                    <div>
                      {/* Back button */}
                      <div className="p-3 bg-gray-50 border-b flex items-center">
                        <button 
                          onClick={() => setSelectedCity('')}
                          className="mr-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <FiChevronDown className="transform rotate-90" />
                        </button>
                        <h4 className="font-medium text-gray-700">{selectedCity}</h4>
                      </div>
                      
                      {/* Universities in selected city */}
                      {universities[selectedCity].map((uni) => (
                        <button
                          key={uni.id}
                          onClick={() => handleUniversitySelect(uni)}
                          className="w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 flex justify-between items-center transition-colors text-gray-700"
                        >
                          <span className="text-left">{uni.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {uni.campuses.length} campuses
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {/* Back button */}
                      <div className="p-3 bg-gray-50 border-b flex items-center">
                        <button 
                          onClick={() => setSelectedUniversity(null)}
                          className="mr-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <FiChevronDown className="transform rotate-90" />
                        </button>
                        <h4 className="font-medium text-gray-700">{selectedUniversity.name}</h4>
                      </div>
                      
                      {/* Campuses for selected university */}
                      {selectedUniversity.campuses.map((campus) => {
                        const isSelected = isCampusSelected(campus);
                        return (
                          <button
                            key={campus}
                            onClick={() => handleCampusSelect(campus)}
                            className={`w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 transition-colors flex items-center ${
                              isSelected ? 'bg-[#006D77]/10 text-[#006D77] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {isSelected ? (
                              <FiCheck className="mr-2 text-[#006D77] flex-shrink-0" />
                            ) : (
                              <FiMapPin className="mr-2 text-gray-400 flex-shrink-0" />
                            )}
                            {campus}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* University Marketplace Tagline */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-center md:text-left"
      >
        <p className="text-sm text-gray-500">
          Connect with students at your university • Buy and sell academic materials
        </p>
      </motion.div>
    </div>
  );
};

export default SearchBar;