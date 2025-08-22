import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiChevronRight, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ListingsGrid = () => {
  const [favorites, setFavorites] = useState(new Set());

  // Optimized image data with consistent quality
  const recentlyViewed = [
    { id: 1, title: 'Vintage Camera', price: '₿0.045', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80' },
    { id: 2, title: 'Handmade Pot', price: '₿0.015', image: 'https://i0.wp.com/thiscraftyfamily.com/wp-content/uploads/2021/05/263235587-1.jpg?fit=600%2C450&ssl=1?w=500&auto=format&fit=crop&q=80' },
    { id: 3, title: 'Leather Journal', price: '₿0.025', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=80' },
    { id: 4, title: 'Wooden Clock', price: '₿0.035', image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format&fit=crop&q=80' },
    { id: 5, title: 'Ceramic Mug', price: '₿0.01', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80' }
  ];

  const featuredItems = [
    { id: 6, title: 'Smart Home Bundle', price: '₿0.45', size: 'wide', image: 'https://plus.unsplash.com/premium_photo-1729571572792-d211af573965?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1000&auto=format&fit=crop&q=80' },
    { id: 7, title: 'Artisan Wall Art', price: '₿0.25', size: 'tall', image: 'https://the-next-decor.com/cdn/shop/files/jungle-scenery-luxury-crystal-wall-art-the-next-decor-603044.jpg?v=1742377461?w=500&auto=format&fit=crop&q=80' },
    { id: 8, title: 'Wireless Headphones', price: '₿0.38', size: 'small', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80' },
    { id: 9, title: 'Minimalist Furniture', price: '₿1.20', size: 'wide', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1000&auto=format&fit=crop&q=80' },
    { id: 10, title: 'Handmade Jewelry', price: '₿0.15', size: 'small', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80' },
    { id: 11, title: 'Designer Watch', price: '₿0.75', size: 'small', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=80' }
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
      whileHover={{ scale: 1.02 }}
      className={`relative bg-white shadow-sm hover:shadow-md transition-all overflow-hidden
        ${item.size === 'wide' ? 'md:col-span-2' : ''}
        ${item.size === 'tall' ? 'md:row-span-2' : ''}`}
    >
      <button 
        onClick={() => toggleFavorite(item.id)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm"
      >
        <FiHeart className={`text-lg ${favorites.has(item.id) ? 'text-[#FF6F61] fill-[#FF6F61]' : 'text-gray-400'}`} />
      </button>
      
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
      
      <div className="p-3 border-t border-gray-100">
        <h3 className="text-sm font-medium text-[#333333] truncate">{item.title}</h3>
        {item.price && <p className="text-sm font-bold text-[#006D77] mt-1">{item.price}</p>}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-[#F5F5F5] p-4 md:p-6">
      {/* Recently Viewed */}
      <Link to="/listingdetails" className="text-sm text-[#006D77] hover:text-[#FF6F61] mb-4 flex items-center">
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#006D77]">Recently viewed</h2>
          <button className="flex items-center text-sm text-[#006D77] hover:text-[#FF6F61] transition-colors">
            View all <FiChevronRight className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {recentlyViewed.map((item) => (
            <ListingCard key={`recent-${item.id}`} item={item} size="small" />
          ))}
        </div>
      </section>
        </Link>

   
{/* Premium Featured Items Section - Redesigned */}
<section className="mb-16 px-2">
  <h2 className="text-2xl font-bold text-[#006D77] mb-6">Curated Collections</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Hero Wide Item - Now responsive with proper aspect ratio */}
    <motion.div 
      className="sm:col-span-2 lg:row-span-2 relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/3] sm:aspect-[16/9] w-full h-full overflow-hidden bg-gray-100 rounded-lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1729571572792-d211af573965?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&auto=format&fit=crop&q=80"
          alt="Smart Home Bundle"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="eager"
          srcSet="
           https://plus.unsplash.com/premium_photo-1729571572792-d211af573965?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&auto=format&fit=crop&q=80 600w,
           https://plus.unsplash.com/premium_photo-1729571572792-d211af573965?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&auto=format&fit=crop&q=80 1200w
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-lg sm:text-xl font-bold text-white">Smart Home Bundle</h3>
        <p className="text-[#FF6F61] font-medium text-sm sm:text-base">₿0.45</p>
      </div>
      <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-transform">
        <FiHeart className="text-[#FF6F61] text-lg" />
      </button>
    </motion.div>

    {/* Tall Item - Now responsive */}
    <motion.div 
      className="hidden lg:block relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="aspect-[3/4] w-full h-full overflow-hidden bg-gray-100 rounded-lg">
        <img
          src="https://the-next-decor.com/cdn/shop/files/jungle-scenery-luxury-crystal-wall-art-the-next-decor-603044.jpg?v=1742377461?w=600&auto=format&fit=crop&q=80"
          alt="Artisan Wall Art"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent p-3 flex flex-col justify-end">
        <h3 className="text-base sm:text-lg font-bold text-white">Artisan Wall Art</h3>
        <p className="text-[#FF6F61] font-medium text-sm sm:text-base">₿0.25</p>
      </div>
    </motion.div>

    {/* Square Items - Responsive with proper sizing */}
    {[
      {
        id: 8,
        title: 'Wireless Headphones',
        price: '₿0.38',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 10,
        title: 'Handmade Clay',
        price: '₿0.15',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
      },
        {
        id: 11,
        title: 'Handmade Clay',
        price: '₿0.15',
        image: 'https://the-next-decor.com/cdn/shop/files/jungle-scenery-luxury-crystal-wall-art-the-next-decor-603044.jpg?v=1742377461?w=800&auto=format&fit=crop&q=80'
      }
    ].map((item, index) => (
      <motion.div
        key={item.id}
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      >
        <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            srcSet={`
              ${item.image.replace('w=800', 'w=400')} 400w,
              ${item.image} 800w
            `}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-3 flex flex-col justify-end">
          <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
          <p className="text-[#FF6F61] font-medium text-xs sm:text-sm">{item.price}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


{/* Today's Deals - Optimized for Cloudinary */}
<section className="mt-12">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-[#006D77]">Today's Special Deals</h2>
      <p className="text-sm text-gray-500 mt-1">Limited time offers</p>
    </div>
    <div className="flex items-center text-sm md:text-base font-medium text-[#006D77] bg-[#F0F9FA] px-3 py-2 rounded-lg">
      <FiClock className="mr-2" />
      <span>Ends in 04:32:17</span>
    </div>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        id: 12,
        title: 'Smart Watch Pro',
        price: '₿0.39',
        originalPrice: '₿0.59',
        imageId: 'smart-watch-pro' // Cloudinary public ID
      },
      {
        id: 13,
        title: 'Noise Cancelling Headphones',
        price: '₿0.68',
        originalPrice: '₿0.89',
        imageId: 'noise-cancelling-headphones'
      },
      {
        id: 14,
        title: 'Wireless Charger',
        price: '₿0.18',
        originalPrice: '₿0.25',
        imageId: 'wireless-charger'
      },
      {
        id: 15,
        title: 'Bluetooth Speaker',
        price: '₿0.42',
        originalPrice: '₿0.55',
        imageId: 'bluetooth-speaker'
      }
    ].map((item) => (
      <motion.div
        key={`deal-${item.id}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        className="relative group"
      >
        {/* Deal Badge */}
        <div className="absolute top-3 left-3 bg-[#FF6F61] text-white text-xs font-bold px-2 py-1 z-10 rounded-md shadow-sm">
          -{Math.round((1 - parseFloat(item.price.substring(1))/parseFloat(item.originalPrice.substring(1))) * 100)}%
        </div>
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-xs hover:scale-110 transition-transform">
          <FiHeart className="text-gray-400 group-hover:text-[#FF6F61]" />
        </button>

        {/* Product Card */}
        <div className="bg-white rounded-lg shadow-xs hover:shadow-md border border-gray-100 overflow-hidden h-full transition-all">
          {/* Cloudinary Image with Responsive Sizes */}
          <div className="aspect-square w-full bg-gray-100">
            <img
              src={`https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/c_fill,w_500,h_500,q_auto,f_webp/${item.imageId}`}
              srcSet={`
                https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/c_fill,w_300,h_300,q_auto,f_webp/${item.imageId} 300w,
                https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/c_fill,w_500,h_500,q_auto,f_webp/${item.imageId} 500w,
                https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/c_fill,w_800,h_800,q_auto,f_webp/${item.imageId} 800w
              `}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{item.title}</h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-base font-bold text-[#006D77]">{item.price}</span>
                <span className="text-xs text-gray-400 line-through ml-2 block mt-1">{item.originalPrice}</span>
              </div>
              <button className="text-xs font-medium bg-[#006D77] text-white px-3 py-1 rounded hover:bg-[#005D66] transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
};

export default ListingsGrid;