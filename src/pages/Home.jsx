import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategoriesGrid';
import CreateListingForm from '../components/ListingsGrid';
import ListingsGrid from '../components/ListingsGrid';
import { FiPlusCircle, FiShield } from 'react-icons/fi';
import { IoMdColorPalette, IoMdCube } from 'react-icons/io';
import HeroBanner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [location, setLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 6;

  // Sample listings
  const listings = [
    {
      id: 1,
      title: 'Holographic Art Installation',
      price: '₿0.025',
      category: 'art',
      image: 'https://source.unsplash.com/random/300x300/?hologram,art',
      rating: 4.9,
      time: '2h ago'
    },
    {
      id: 2,
      title: 'Neural Interface Headset',
      price: '₿1.2',
      category: 'tech',
      image: 'https://source.unsplash.com/random/300x300/?tech,gadget',
      rating: 4.7,
      time: '1d ago'
    },
    {
      id: 3,
      title: 'Self-Cleaning Smart Jacket',
      price: '₿0.15',
      category: 'fashion',
      image: 'https://source.unsplash.com/random/300x300/?jacket,smart',
      rating: 4.5,
      time: '3d ago'
    },
    {
      id: 4,
      title: 'Personal AI Assistant Setup',
      price: '₿0.8',
      category: 'services',
      image: 'https://source.unsplash.com/random/300x300/?robot,ai',
      rating: 5.0,
      time: '5h ago'
    },
    {
      id: 5,
      title: 'Rare Mars Colony NFT',
      price: '₿2.5',
      category: 'collectibles',
      image: 'https://source.unsplash.com/random/300x300/?mars,nft',
      rating: 4.8,
      time: '1w ago'
    },
    {
      id: 6,
      title: 'Quantum Computing Course',
      price: '₿0.3',
      category: 'services',
      image: 'https://source.unsplash.com/random/300x300/?quantum,computer',
      rating: 4.6,
      time: '2d ago'
    },
  ];


  // Filter listings based on search and category
  const filteredListings = listings.filter(listing => 
    (activeCategory === 'all' || listing.category === activeCategory) &&
    listing.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  return (
<div className="min-h-screen bg-[#F5F5F5] p-4 mt-16">
  {/* Floating Create Button */}
  <Link to="/create-listing" className="no-underline text-inherit">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowCreateForm(true)}
      className="fixed bottom-6 right-6 z-10 bg-[#FF6F61] text-white p-4 rounded-full shadow-xl flex items-center"
    >
      <FiPlusCircle className="text-2xl" />
    </motion.button>
  </Link>

  <div className="max-w-7xl mx-auto">
    {/* Search Component */}
    <SearchBar 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery}
      location={location}
      setLocation={setLocation}
    />

    {/* Hero Banner - Adjusted spacing */}
    <div className="mb-8">
      <HeroBanner />
    </div>

    {/* Categories Component */}
    <div className="mb-8">
      <CategorySelector />
    </div>

    {/* Listings Grid Component with proper spacing */}
    <div className="mb-8">
      <ListingsGrid 
        currentListings={currentListings}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

    {/* Pagination */}
    {totalPages > 1 && (
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 w-10 h-10 rounded-full flex items-center justify-center ${
              currentPage === i + 1 ? 'bg-[#006D77] text-white' : 'bg-white'
            }`}
          >
            {i + 1}
          </motion.button>
        ))}
      </div>
    )}
  </div>

  {/* Create Listing Form */}
  <AnimatePresence>
    {showCreateForm && (
      <CreateListingForm onClose={() => setShowCreateForm(false)} />
    )}
  </AnimatePresence>
</div>
  );
};

export default Home;