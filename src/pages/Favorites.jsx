import { motion } from 'framer-motion';
import { FiHeart, FiEye } from 'react-icons/fi';

const Favourites = () => {
  // Sample favourites data
  const favourites = [
    {
      id: 1,
      title: 'Vintage Camera',
      description: 'Classic 35mm film camera, perfect condition',
      price: '0.045',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Handmade Pottery',
      description: 'Artisan ceramic vase with unique glaze',
      price: '0.015',
      image: 'https://images.unsplash.com/photo-1589985270825-4b7b38d6e8a9?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Smart Watch',
      description: 'Latest model with health tracking features',
      price: '0.38',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Leather Journal',
      description: 'Hand-stitched genuine leather notebook',
      price: '0.025',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Wireless Earbuds',
      description: 'Noise cancelling with 24hr battery',
      price: '0.08',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Desk Organizer',
      description: 'Minimalist bamboo desktop set',
      price: '0.018',
      image: 'https://images.unsplash.com/photo-1585637071663-799845ad5212?w=500&auto=format&fit=crop&q=80'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Your Favourites</h1>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {favourites.map((item) => (
          <motion.div
            key={item.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <button 
                className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-red-50 transition-colors"
                aria-label="Remove from favourites"
              >
                <FiHeart className="text-red-500 fill-red-500" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <span className="font-bold text-[#006D77]">{item.price}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              
              <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition-colors">
                <FiEye className="text-gray-600" />
                <span>View Details</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Favourites;