import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  MessageSquare,
  Package,
  Plus,
  BarChart3,
  Zap,
  HelpCircle,
  Settings,
  LogOut,
  Star,
  Search,
  Bell,
  ChevronRight,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Sparkles,
  Filter,
  Target,
  CheckCircle,
  Award,
  Gift,
  Clock,
  Calendar,
  TrendingUp as TrendingUpIcon,
  ChevronDown,
  ChevronUp,
  Trophy,
  Circle,
  X
} from "lucide-react";
import MessageSummaryCard from "../components/MessageSummaryCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [todaysTasks, setTodaysTasks] = useState([
    { id: 1, text: "Respond to customer inquiries", completed: false, points: 10 },
    { id: 2, text: "Update product images", completed: false, points: 15 },
    { id: 3, text: "Share your listing on social media", completed: false, points: 20 },
    { id: 4, text: "Check competitor pricing", completed: true, points: 5 }
  ]);
  const [userPoints, setUserPoints] = useState(125);
  const [showAchievement, setShowAchievement] = useState(false);
  const [newMessageCount, setNewMessageCount] = useState(3);
  const [streakCount, setStreakCount] = useState(7);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // FOMO data - show what others are doing
  const communityActivity = [
    { user: "Alex Morgan", action: "just sold", item: "Vintage Watch", time: "2 min ago" },
    { user: "Taylor Kim", action: "reached", item: "Level 5 Seller", time: "15 min ago" },
    { user: "Jordan Smith", action: "earned", item: "100 points", time: "30 min ago" }
  ];

  // Progress toward goals
  const progressGoals = [
    { goal: "Top Rated Seller", progress: 75, target: 100 },
    { goal: "Monthly Sales Target", progress: 45, target: 50 },
    { goal: "Response Rate", progress: 95, target: 100 }
  ];

  // Stats data with psychological triggers
  const stats = [
    { 
      label: "Potential Earnings", 
      value: "$1,248", 
      change: "+12.3%", 
      icon: <DollarSign size={20} />, 
      color: "from-blue-400 to-blue-600",
      description: "Based on your current engagement" 
    },
    { 
      label: "Buyer Views", 
      value: "3,241", 
      change: "+18.7%", 
      icon: <Eye size={20} />, 
      color: "from-amber-400 to-amber-600",
      description: "People are interested in your items!" 
    },
    { 
      label: "Conversion Rate", 
      value: "4.8%", 
      change: "+2.1%", 
      icon: <TrendingUpIcon size={20} />, 
      color: "from-purple-400 to-purple-600",
      description: "Higher than 82% of similar sellers" 
    },
    { 
      label: "Community Rank", 
      value: `#${124}`, 
      change: "+8", 
      icon: <Trophy size={20} />, 
      color: "from-emerald-400 to-emerald-600",
      description: "Moving up the leaderboard!" 
    }
  ];

  // Navigation items with notification badges
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart3 size={20} /> },
    { id: "purchases", label: "Purchases", icon: <ShoppingBag size={20} />, count: 12 },
    { id: "favourites", label: "Favourites", icon: <Heart size={20} />, count: 8 },
    { id: "listings", label: "My Listings", icon: <Package size={20} />, count: 5 },
    { id: "create", label: "Create", icon: <Plus size={20} /> },
    { id: "analytics", label: "Analytics", icon: <TrendingUpIcon size={20} /> },
    { id: "promotions", label: "Promotions", icon: <Zap size={20} /> }
  ];

  // Complete a task and award points
  const completeTask = (taskId) => {
    setTodaysTasks(tasks => 
      tasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
    
    const task = todaysTasks.find(t => t.id === taskId);
    if (!task.completed) {
      setUserPoints(points => points + task.points);
      
      // Show achievement notification for certain point thresholds
      if ((userPoints + task.points) % 50 === 0) {
        setShowAchievement(true);
        setTimeout(() => setShowAchievement(false), 3000);
      }
    }
  };

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "purchases":
        return <div className="p-8">Purchase History Content</div>;
      case "favourites":
        return <div className="p-8">Favourites Content</div>;
      case "messages":
        return <div className="p-8">Messages Content</div>;
      case "listings":
        return <div className="p-8">Listings Content</div>;
      case "create":
        return <div className="p-8">Create Listing Content</div>;
      case "analytics":
        return <div className="p-8">Analytics Content</div>;
      case "promotions":
        return <div className="p-8">Promotions Content</div>;
      default:
        return <DashboardContent />;
    }
  };

  // Dashboard Content with psychological elements
  const DashboardContent = () => (
    <div className="space-y-8 p-6">
      {/* Welcome Header with Personalization */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-2">
        <div className="text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight"
          >
            Welcome back, <span className="font-medium">Sarah</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-2 text-sm"
          >
            You're on a <span className="text-amber-500 font-medium">{streakCount}-day streak</span>! Keep it going!
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <Award size={18} />
            <span className="font-medium">{userPoints} pts</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setActiveTab("create")}
            className=" bg-gradient-to-br from-teal-400 to-teal-600  text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center shadow-md"
          >
            <Plus size={18} />
            Create New Listing
          </motion.button>
        </div>
      </div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <Trophy size={24} />
            <div>
              <h3 className="font-semibold">Achievement Unlocked!</h3>
              <p>You've reached {userPoints} points. Keep it up!</p>
            </div>
            <button onClick={() => setShowAchievement(false)} className="ml-auto">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Grid with Social Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-sm`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-xs text-gray-400">{stat.description}</p>
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid with Variable Rewards */}


<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
  {/* Today's Tasks - Gamification (2/3 width) */}
  <div className="xl:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-xs">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-medium text-gray-900">Today's Missions <span className="text-sm text-amber-500">+{todaysTasks.filter(t => !t.completed).length * 15} pts available</span></h2>
      <button className="text-gray-600 text-sm font-medium flex items-center hover:text-gray-900 transition-colors">
        View all <ChevronRight size={16} />
      </button>
    </div>
    <div className="space-y-3">
      {todaysTasks.map((task) => (
        <motion.div 
          key={task.id} 
          whileHover={{ x: 5 }}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center">
            <button 
              onClick={() => completeTask(task.id)}
              className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${task.completed ? 'bg-gray-900 border-gray-900 text-white' : 'border-gray-300 hover:border-gray-900'}`}
            >
              {task.completed && <CheckCircle size={12} />}
            </button>
            <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {task.text}
            </span>
          </div>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
            +{task.points} pts
          </span>
        </motion.div>
      ))}
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">Daily completion:</span>
        <span className="font-medium text-gray-900">
          {Math.round((todaysTasks.filter(t => t.completed).length / todaysTasks.length) * 100)}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(todaysTasks.filter(t => t.completed).length / todaysTasks.length) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-gray-900 to-gray-700 rounded-full" 
        ></motion.div>
      </div>
    </div>
  </div>

  {/* Sidebar (1/3 width) */}
  <div className="xl:col-span-1 space-y-6">
    {/* Message Summary Card */}
    <MessageSummaryCard className="xl:col-span-1" />
    
    {/* Progress Goals */}
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Your Progress</h2>
      <div className="space-y-4">
        {progressGoals.map((goal, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{goal.goal}</span>
              <span className="text-xs text-gray-500">{goal.progress}/{goal.target}</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(goal.progress / goal.target) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-gray-900 to-gray-700 rounded-full" 
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      {/* Limited Time Offer - Scarcity Principle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className=" bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-6 text-white shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Gift size={20} />
              <span className="font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-xl font-medium mb-2">Boost your listings for 24 hours - 50% off!</h2>
            <p className="text-gray-300">Offer ends in <span className="font-bold">14:32:05</span></p>
          </div>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md">
            Claim Offer Now
          </button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header with Notification Badges */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1887&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-xl object-cover border-2 border-gray-900 shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
                  <Sparkles size={10} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-medium text-gray-900">
                  Sarah Johnson
                </h1>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={`${
                        star <= 4
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      } mr-1`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                </div>
              </div>
            </div>

            {/* Search + Notification */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`pl-10 pr-4 py-2.5 bg-gray-100 border rounded-xl 
                            focus:ring-2 focus:ring-gray-900 focus:border-gray-900 
                            outline-none transition-all w-full sm:w-64 ${
                              isSearchFocused ? 'border-gray-900' : 'border-transparent'
                            }`}
                />
              </div>

          
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 pb-1 overflow-x-auto mb-3.5">
          <div className="flex space-x-1 min-w-max">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 relative ${
                  activeTab === item.id
                    ?  "bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span className="font-medium whitespace-nowrap text-sm">
                  {item.label}
                </span>
                {item.count && (
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      activeTab === item.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
                {item.notification && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full mt-1 border-2 border-white"></span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6">
        <div className="max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xs border border-gray-100 min-h-[600px] overflow-hidden"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;