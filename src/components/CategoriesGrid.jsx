import { motion } from 'framer-motion';
import { FiShoppingBag, FiImage, FiScissors, FiHome, FiUser, FiTool, FiWatch, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = [
    { 
      id: 'fashion', 
      name: 'Future Fashion', 
      icon: <FiShoppingBag size={24} />,
      size: 'large',
      tagline: 'Smart wearables & nano-fabrics',
      color: 'from-[#FF6F61]/20 to-[#FF6F61]/10'
    },
    { 
      id: 'art', 
      name: 'Digital Art', 
      icon: <FiImage size={24} />,
      size: 'large',
      tagline: 'Holographic creations',
      color: 'from-[#006D77]/20 to-[#006D77]/10'
    },
    { 
      id: 'craft', 
      name: 'Bio-Stitching', 
      icon: <FiScissors size={20} />,
      size: 'medium',
      tagline: 'Living materials',
      color: 'from-[#FF6F61]/15 to-[#FF6F61]/05'
    },
    { 
      id: 'pets', 
      name: 'Smart Pets', 
      icon: <FiUser size={20} />, // Using FiUser as substitute for pets
      size: 'medium',
      tagline: 'Augmented companions',
      color: 'from-[#006D77]/15 to-[#006D77]/05'
    },
    { 
      id: 'real-estate', 
      name: 'Meta Properties', 
      icon: <FiHome size={20} />,
      size: 'small',
      color: 'from-[#333333]/10 to-[#333333]/05'
    },
    { 
      id: 'furniture', 
      name: 'Adaptive Furniture', 
      icon: <FiBox size={18} />,
      size: 'small',
      color: 'from-[#333333]/10 to-[#333333]/05'
    },
    { 
      id: 'services', 
      name: 'AI Services', 
      icon: <FiTool size={18} />,
      size: 'small',
      color: 'from-[#006D77]/10 to-[#006D77]/05'
    },
    { 
      id: 'tech', 
      name: 'Wearables', 
      icon: <FiWatch size={18} />,
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
    <Link to="/listings" className="no-underline text-inherit">
    <section className="px-2 md:px-4 py-12 bg-gradient-to-b from-[#ffffff] to-[#f6f4f0]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-[#006D77] mb-8 text-center"
        >
          Explore Future Markets
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 15px rgba(0, 109, 119, 0.2)'
              }}
              className={`relative overflow-hidden border border-white/20 backdrop-blur-md
                ${category.size === 'large' ? 'md:col-span-2 md:row-span-2 h-48 md:h-64' : ''}
                ${category.size === 'medium' ? 'h-32' : 'h-24'}
                bg-gradient-to-br ${category.color}`}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
              
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className={`font-bold 
                    ${category.size === 'large' ? 'text-xl md:text-2xl' : 'text-md'}
                    text-[#006D77]`}>
                    {category.name}
                  </h3>
                  <div className="text-[#006D77]">
                    {category.icon}
                  </div>
                </div>
                
                {category.tagline && (
                  <p className={`text-[#333333] mt-2
                    ${category.size === 'large' ? 'text-sm md:text-base' : 'text-xs'}`}>
                    {category.tagline}
                  </p>
                )}
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 border border-transparent hover:border-[#FF6F61]/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </Link>
  );
};

export default CategoriesSection;