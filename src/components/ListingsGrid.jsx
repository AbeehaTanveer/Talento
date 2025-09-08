import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiChevronRight, FiClock, FiBook, FiStar, FiShoppingCart } from 'react-icons/fi';
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
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recently Viewed Textbooks</h2>
          <Link to="/listings" className="flex items-center text-sm text-[#006D77] hover:text-[#FF6F61] transition-colors font-medium">
            View all <FiChevronRight className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {recentlyViewed.map((item) => (
            <ListingCard key={`recent-${item.id}`} item={item} size="small" />
          ))}
        </div>
      </section>

      {/* Featured Course Materials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Course Materials</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Computer Science Featured */}
          
 <motion.div 
  className="sm:col-span-2 lg:row-span-2 relative group"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <Link to="/listingdetails">   {/* 👈 add Link here */}
    <div className="aspect-[4/3] sm:aspect-[16/9] w-full h-full overflow-hidden bg-gray-100 rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80"
        alt="Computer Science Books"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="eager"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end">
      <div className="mb-2">
        <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full">
          COMPUTER SCIENCE
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Essential CS Textbooks</h3>
      <p className="text-gray-200 text-sm">Algorithms, Data Structures, Programming</p>
      <div className="flex items-center mt-3">
        <div className="flex items-center text-amber-400 mr-3">
          <FiStar className="fill-current mr-1" />
          <span className="text-sm font-medium">4.8</span>
        </div>
        <span className="text-sm text-gray-200">12+ books available</span>
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
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
                alt="Engineering Books"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full self-start mb-2">
                ENGINEERING
              </span>
              <h3 className="text-base font-bold text-white">Engineering References</h3>
              <p className="text-[#FF6F61] font-medium text-sm mt-1">From PKR0.025</p>
            </div>
          </motion.div>

          {/* Medical Textbooks */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://i0.wp.com/onlinebookshop.pk/wp-content/uploads/2021/03/Medical-Health-Techniyion-By-Dr.-Muhammad-Iqbal.jpg?fit=1500%2C1150&ssl=1?w=800&auto=format&fit=crop&q=80"
                alt="Medical Textbooks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full self-start mb-2">
                MEDICINE
              </span>
              <h3 className="text-base font-bold text-white">Medical References</h3>
              <p className="text-[#FF6F61] font-medium text-sm mt-1">From PKR0.035</p>
            </div>
          </motion.div>


       {/* Medical Textbooks */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://i0.wp.com/onlinebookshop.pk/wp-content/uploads/2021/03/Medical-Health-Techniyion-By-Dr.-Muhammad-Iqbal.jpg?fit=1500%2C1150&ssl=1?w=800&auto=format&fit=crop&q=80"
                alt="Medical Textbooks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full self-start mb-2">
                MEDICINE
              </span>
              <h3 className="text-base font-bold text-white">Medical References</h3>
              <p className="text-[#FF6F61] font-medium text-sm mt-1">From PKR0.035</p>
            </div>
          </motion.div>
          {/* Business Books */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
                alt="Business Books"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-xs font-medium text-white bg-[#006D77] px-2 py-1 rounded-full self-start mb-2">
                BUSINESS
              </span>
              <h3 className="text-base font-bold text-white">Business Studies</h3>
              <p className="text-[#FF6F61] font-medium text-sm mt-1">From PKR0.020</p>
            </div>
          
          </motion.div>
        </div>
      </section>

      {/* Top Deals - Textbooks */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Today's Textbook Deals</h2>
            <p className="text-sm text-gray-500 mt-1">Limited time offers for students</p>
          </div>
          <div className="flex items-center text-sm md:text-base font-medium text-[#006D77] bg-[#F0F9FA] px-4 py-2 rounded-lg">
            <FiClock className="mr-2" />
            <span>Ends in 04:32:17</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       {[
  {
    id: 12,
    title: 'Calculus: Early Transcendentals 8th Edition',
    price: 'PKR0.039',
    originalPrice: 'PKR0.059',
    course: 'MATH-201',
    condition: 'Like New',
    discount: '34%',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=80'
  },
  { id: 13, title: 'Organic Chemistry 7th Edition', price: 'PKR0.045', originalPrice: 'PKR0.065', course: 'CHEM-301', condition: 'Excellent', discount: '31%', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblz2lSIaDZWQuxll8TA6GA9wWqHW96y_1Rw&s?w=500&auto=format&fit=crop&q=80' },

  { id: 14, title: 'Psychology 6th Edition', price: 'PKR0.025', originalPrice: 'PKR0.045', course: 'PSY-101', condition: 'Good', discount: '44%', image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=80' },
  { id: 15, title: 'Principles of Economics 9th Edition', price: 'PKR0.038', originalPrice: 'PKR0.058', course: 'ECON-202', condition: 'Like New', discount: '34%', image: 'https://onlinebookshop.pk/wp-content/uploads/2020/06/Principles-Of-Economics-I-Mathematical-Economics-Micro-Economics-For-BA-BSc.jpg?w=500&auto=format&fit=crop&q=80' }
  // ... other items
].map((item) => (
  <motion.div
    key={`deal-${item.id}`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <Link to={`/listingdetails`}> {/* 👈 dynamic link */}
      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-100 overflow-hidden h-full transition-all">
        <div className="aspect-square w-full bg-gray-100">
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
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
            {item.title}
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-bold text-[#006D77]">{item.price}</p>
              <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
            </div>
            <button className="text-xs font-medium bg-[#006D77] text-white px-3 py-1.5 rounded-lg hover:bg-[#005D66] transition-colors flex items-center">
              <FiShoppingCart className="mr-1" />
              Buy
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