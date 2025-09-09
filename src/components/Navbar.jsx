import { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiHeart,
  FiMessageSquare,
  FiGrid,
  FiHome,
  FiChevronDown,
  FiHelpCircle,
  FiBell,
  FiCheckCircle,
  FiShoppingBag,
  FiAlertCircle,
  FiLogOut, FiSettings, FiPlus 
} from "react-icons/fi";
import { MdGamepad } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  const categoriesRef = useRef(null);
  const notificationsRef = useRef(null);



// State and ref for dropdown
const [isProfileOpen, setIsProfileOpen] = useState(false);
const profileRef = useRef(null);

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

// Dropdown menu items
const profileMenu = [
  { name: 'My Profile', path: '/profile', icon: <FiUser /> },
  { name: 'Dashboard', path: '/dashboard', icon: <FiGrid /> },
  { name: 'Settings', path: '/settings', icon: <FiSettings /> },
  { name: 'Create Listing', path: '/create-listing', icon: <FiPlus /> },
  { name: 'Logout', path: '/logout', icon: <FiLogOut /> },
];



  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <FiHome className="w-5 h-5" />, path: "/" },
    { name: "Categories", icon: <FiGrid className="w-5 h-5" />, dropdown: true },
    { name: "Listings", icon: <FiGrid className="w-5 h-5" />, path: "/listings" },
    { name: "Favorites", icon: <FiHeart className="w-5 h-5" />, path: "/favorites" },
    { name: "Chats", icon: <FiMessageSquare className="w-5 h-5" />, path: "/chats" },
  ];

  const categories = [
    { name: "Electronics", path: "/categories/electronics" },
    { name: "Fashion", path: "/categories/fashion" },
    { name: "Home & Living", path: "/categories/home-living" },
    { name: "Sports", path: "/categories/sports" },
    { name: "Books", path: "/categories/books" },
  ];

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Order Confirmed",
      message: "Your purchase has been confirmed by the seller",
      time: "2 min ago",
      icon: <FiCheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      id: 2,
      type: "info",
      title: "New Message",
      message: "You have a new message from Alex",
      time: "15 min ago",
      icon: <FiMessageSquare className="w-4 h-4 text-blue-500" />
    },
    {
      id: 3,
      type: "alert",
      title: "Payment Reminder",
      message: "Complete your payment for order #12345",
      time: "1 hour ago",
      icon: <FiAlertCircle className="w-4 h-4 text-yellow-500" />
    },
    {
      id: 4,
      type: "sale",
      title: "New Listing",
      message: "Check out new items in Electronics",
      time: "3 hours ago",
      icon: <FiShoppingBag className="w-4 h-4 text-teal-500" />
    }
  ];

  const unreadCount = notifications.length;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-[#F5F5F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-[#006D77] flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <span className="text-2xl font-light text-[#333333] hidden sm:block">
                <span className="font-medium text-[#006D77]">Flick</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 relative">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative" ref={categoriesRef}>
                  <button
                    onClick={() => {
                      setIsCategoriesOpen(!isCategoriesOpen);
                      setIsNotificationsOpen(false);
                    }}
                    className="no-underline text-[#333333] hover:text-teal-600 transition-colors duration-200 flex items-center space-x-1.5 text-sm font-medium"
                  >
                    <span className="text-teal-600">{item.icon}</span>
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `no-underline text-[#333333] hover:text-teal-600 transition-colors duration-200 flex items-center space-x-1.5 text-sm font-medium ${
                      isActive ? "text-teal-600 font-semibold" : ""
                    }`
                  }
                >
                  <span className="text-teal-600">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              )
            )}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Help Button */}
            {/* <Link to="/trivia">
              <button className="flex items-center justify-center w-9 h-9 rounded-full duration-200 text-teal-600 hover:bg-teal-50">
                <MdGamepad className="w-5 h-5" />
              </button>
            </Link> */}

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsCategoriesOpen(false);
                }}
                className="flex items-center justify-center w-9 h-9 rounded-full duration-200 text-teal-600 hover:bg-teal-50 relative"
              >
                <FiBell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="mt-0.5">{notification.icon}</div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800 text-sm">
                              {notification.title}
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                              {notification.message}
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button className="text-teal-600 hover:text-teal-700 text-sm font-medium w-full text-center">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {isLoggedIn ? (
              <button className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full  bg-[#006D77]0 flex items-center justify-center text-white">
                  <FiUser className="w-5 h-5" />
                </div>
              </button>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login">
                  <button className="px-4 py-2 rounded-lg tbg-[#006D77] hover:bg-teal-50 transition-colors duration-200 text-sm font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 rounded-lg bg-[#006D77] text-white hover:bg-teal-700 transition-colors duration-200 text-sm font-medium shadow-sm">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>


          <div className="relative" ref={profileRef}>
  <button
    onClick={() => {
      setIsProfileOpen(!isProfileOpen);
      setIsNotificationsOpen(false);
      setIsCategoriesOpen(false);
    }}
    className="flex items-center space-x-2 text-teal-600 hover:bg-teal-50 rounded-full p-1 transition-colors duration-200"
  >
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white">
      <FiUser className="w-5 h-5" />
    </div>
    <FiChevronDown className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
  </button>

  {isProfileOpen && (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100">
      {profileMenu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors flex items-center space-x-2"
          onClick={() => setIsProfileOpen(false)}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  )}
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Notifications */}
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full duration-200 text-teal-600 hover:bg-teal-50 relative"
            >
              <FiBell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>


{isNotificationsOpen && (
  <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100">
    <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Notifications</h3>
      <button 
        onClick={() => setIsNotificationsOpen(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
    <div className="max-h-96 overflow-y-auto">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
        >
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">{notification.icon}</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">
                {notification.title}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                {notification.message}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                {notification.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2 border-t border-gray-100">
      <button className="text-teal-600 hover:text-teal-700 text-sm font-medium w-full text-center">
        View All Notifications
      </button>
    </div>
  </div>
)}

            

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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                      className="w-full text-left flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
                    >
                      <span className="mr-2 text-teal-600">{item.icon}</span>
                      {item.name}
                      <FiChevronDown
                        className={`ml-auto w-4 h-4 transition-transform ${
                          isCategoriesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isCategoriesOpen && (
                      <div className="pl-8 mt-1 space-y-1">
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.path}
                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md"
                            onClick={() => {
                              setIsCategoriesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 text-base font-medium rounded-md ${
                        isActive
                          ? "text-teal-600 bg-teal-50"
                          : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-2 text-teal-600">{item.icon}</span>
                    {item.name}
                  </NavLink>
                )
              )}

              {/* Mobile Auth Links */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                {isLoggedIn ? (
                  <button className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white mr-2">
                      <FiUser className="w-4 h-4" />
                    </div>
                    My Account
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-center rounded-lg text-teal-600 hover:bg-teal-50 transition-colors duration-200 text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-2 text-center rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 text-sm font-medium shadow-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;