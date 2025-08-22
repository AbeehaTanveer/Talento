import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiUser, FiHeart, FiMessageSquare, FiGrid, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';  

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Auth state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Categories', icon: <FiGrid className="w-5 h-5" /> },
    { name: 'Listings', icon: <FiGrid className="w-5 h-5" /> },
    { name: 'Favorites', icon: <FiHeart className="w-5 h-5" /> },
    { name: 'Chat', icon: <FiMessageSquare className="w-5 h-5" /> },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-[#F5F5F5]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-light text-[#333333] hidden sm:block">
                <span className="font-medium text-teal-600">Talento</span>
              </span>
            </a>
          </div>
<Link to="/favorites" className="no-underline text-inherit">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-[#333333] hover:text-teal-600 transition-colors duration-200 flex items-center space-x-1.5 text-sm font-medium"
              >
                <span className="text-teal-600">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}

          </nav>
          </Link>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white">
                  <FiUser className="w-5 h-5" />
                </div>
              </button>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login" className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors duration-200">
                <button className="px-4 py-2 rounded-lg text-teal-600 hover:bg-teal-50 transition-colors duration-200 text-sm font-medium">
                  Login
                </button>
                </Link>
                <Link to="/register" className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200">
                <button className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 text-sm font-medium shadow-sm">
                  Register
                </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#333333] hover:text-teal-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block px-3 py-3 rounded-md text-base font-medium text-[#333333] hover:bg-teal-50 hover:text-teal-600 flex items-center space-x-3"
              >
                <span className="text-teal-600">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
            <div className="border-t border-gray-200 pt-2 mt-2">
              {isLoggedIn ? (
                <a
                  href="#"
                  className="block px-3 py-3 rounded-md text-base font-medium text-[#333333] hover:bg-teal-50 hover:text-teal-600 flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <span>My Account</span>
                </a>
              ) : (
                <>
                  <a
                    href="#"
                    className="block px-3 py-3 rounded-md text-base font-medium text-teal-600 hover:bg-teal-50"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-3 rounded-md text-base font-medium bg-teal-600 text-white hover:bg-teal-700"
                  >
                    Register
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;