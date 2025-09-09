import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ChevronRight, Clock } from "lucide-react";

const MessageSummaryCard = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "onn",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      product: "Vintage Leather Jacket",
      message: "Hi, is this still available? I'm very interested!",
      timestamp: "2 min ago",
      unread: true
    },
    {
      id: 2,
      user: " Kim",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      product: "Designer Handbag",
      message: "Could you do 250? That's my final offer.",
      timestamp: "15 min ago",
      unread: true
    },
    {
      id: 3,
      user: "Jordan ",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
      product: "Limited Edition Sneakers",
      message: "Thanks for the quick shipping! The item arrived perfectly.",
      timestamp: "1 hour ago",
      unread: false
    },
    {
      id: 4,
      user: "Aiza ",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      product: "Antique Camera",
      message: "Do you have more photos of the item from different angles?",
      timestamp: "3 hours ago",
      unread: false
    }
  ]);

  const unreadCount = messages.filter(msg => msg.unread).length;

  return (
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 w-full"
>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-gray-900 mr-3">Messages</h2>
          {unreadCount > 0 && (
            <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {unreadCount} unread
            </span>
          )}
        </div>
        <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center transition-colors">
          View all <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Message List */}
      <div className="space-y-4">
        {messages.length > 0 ? (
          messages.slice(0, 4).map((msg) => (
            <motion.div
              key={msg.id}
              whileHover={{ x: 4 }}
              className={`flex items-start p-3 rounded-xl transition-colors cursor-pointer ${msg.unread ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
            >
              <div className="relative mr-3">
                <img
                  src={msg.avatar}
                  alt={msg.user}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                {msg.unread && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <h3 className={`text-sm font-medium truncate ${msg.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {msg.user}
                    </h3>
                    {msg.product && (
                      <span className="text-xs text-gray-500 ml-2 truncate">• {msg.product}</span>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-gray-400 whitespace-nowrap ml-2">
                    <Clock size={12} className="mr-1" />
                    {msg.timestamp}
                  </div>
                </div>
                <p className={`text-sm truncate ${msg.unread ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                  {msg.message}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          // Empty State
          <div className="text-center py-8">
            <MessageSquare size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">
              No messages yet. Start chatting with buyers and sellers!
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageSummaryCard;