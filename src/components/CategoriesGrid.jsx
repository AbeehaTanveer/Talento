import { motion } from 'framer-motion';
import { FiShoppingBag, FiImage, FiScissors, FiHome, FiUser, FiTool, FiWatch, FiBox, FiPenTool, FiCalendar, FiInbox, FiMonitor, FiBook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
const categories = [
  { 
    id: 'books', 
    name: 'Books & Notes', 
    icon: <FiBook size={24} />,
    size: 'large',
    tagline: 'Buy, sell, or exchange study material',
    color: 'from-[#FF6F61]/20 to-[#FF6F61]/10'
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    icon: <FiMonitor size={24} />,
    size: 'large',
    tagline: 'Laptops, calculators & gadgets',
    color: 'from-[#006D77]/20 to-[#006D77]/10'
  },

  { 
    id: 'hostel', 
    name: 'Hostel Essentials', 
    icon: <FiHome size={20} />,
    size: 'medium',
    tagline: 'Daily life & room setup items',
    color: 'from-[#006D77]/15 to-[#006D77]/05'
  },
  { 
    id: 'fashion', 
    name: 'Student Fashion', 
    icon: <FiShoppingBag size={20} />,
    size: 'small',
    color: 'from-[#333333]/10 to-[#333333]/05'
  },
  { 
    id: 'furniture', 
    name: 'Furniture', 
    icon: <FiInbox size={18} />,
    size: 'small',
    color: 'from-[#333333]/10 to-[#333333]/05'
  },
  { 
    id: 'services', 
    name: 'Tutoring & Services', 
    icon: <FiPenTool size={18} />,
    size: 'small',
    color: 'from-[#006D77]/10 to-[#006D77]/05'
  },
  { 
    id: 'events', 
    name: 'Campus Events', 
    icon: <FiCalendar size={18} />,
    size: 'small',
    color: 'from-[#006D77]/10 to-[#006D77]/05'
  },
];

  // ... rest of the component code remains the same ...

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
  <Link to="/listings" className="no-underline text-inherit block">
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-[#ffffff] to-[#f6f4f0]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#006D77] mb-6 sm:mb-8 text-center"
          >
            Explore Future Markets
          </motion.h2>

          {/* Categories Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 109, 119, 0.2)",
                }}
                className={`relative overflow-hidden border border-white/20 backdrop-blur-md rounded-xl
                  bg-gradient-to-br ${category.color}
                  ${
                    category.size === "large"
                      ? "md:col-span-2 md:row-span-2 h-40 sm:h-48 md:h-64"
                      : category.size === "medium"
                      ? "h-28 sm:h-32 md:h-40"
                      : "h-20 sm:h-24 md:h-28"
                  }`}
              >
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                <div className="p-3 sm:p-4 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`font-bold text-[#006D77]
                        ${
                          category.size === "large"
                            ? "text-lg sm:text-xl md:text-2xl"
                            : "text-sm sm:text-base md:text-lg"
                        }`}
                    >
                      {category.name}
                    </h3>
                    <div className="text-[#006D77] text-lg sm:text-xl">
                      {category.icon}
                    </div>
                  </div>

                  {category.tagline && (
                    <p
                      className={`text-[#333333] mt-2 leading-snug
                        ${
                          category.size === "large"
                            ? "text-xs sm:text-sm md:text-base"
                            : "text-xs sm:text-sm"
                        }`}
                    >
                      {category.tagline}
                    </p>
                  )}
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border border-transparent hover:border-[#FF6F61]/30 transition-all duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Link>
  );
};


export default CategoriesSection;