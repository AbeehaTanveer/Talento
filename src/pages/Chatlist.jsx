import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBox from './Chat';

const Chatlist
 = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      lastMessage: "Hey! I'm interested in your photography services for my wedding next month.",
      timestamp: "10:30 AM",
      unread: 2,
      status: "pending",
      avatar: "AJ",
      messages: [
        { id: 1, text: "Hi there! I'm interested in your photography services for my wedding next month.", sender: "them", time: "10:30 AM" },
        { id: 2, text: "That's great! I'd love to help. What date is your wedding?", sender: "me", time: "10:32 AM" },
        { id: 3, text: "It's on June 15th. Do you have availability?", sender: "them", time: "10:33 AM" },
      ]
    },
    {
      id: 2,
      name: "Sarah Miller",
      lastMessage: "Thanks for the quick response! I'll send you the details shortly.",
      timestamp: "Yesterday",
      unread: 0,
      status: "confirmed",
      avatar: "SM",
      messages: [
        { id: 1, text: "I need a logo designed for my new startup.", sender: "them", time: "09:15 AM" },
        { id: 2, text: "Sure! Can you share more details about your brand?", sender: "me", time: "09:20 AM" },
        { id: 3, text: "Thanks for the quick response! I'll send you the details shortly.", sender: "them", time: "09:25 AM" },
      ]
    },
    {
      id: 3,
      name: "Mike Chen",
      lastMessage: "The design looks amazing! Can we schedule a call to discuss the revisions?",
      timestamp: "Wednesday",
      unread: 5,
      status: "pending",
      avatar: "MC",
      messages: [
        { id: 1, text: "The design looks amazing! Can we schedule a call to discuss the revisions?", sender: "them", time: "2:45 PM" },
      ]
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      lastMessage: "Payment received. Thank you for your business!",
      timestamp: "May 15",
      unread: 0,
      status: "confirmed",
      avatar: "ER",
      messages: [
        { id: 1, text: "Payment received. Thank you for your business!", sender: "them", time: "May 15" },
      ]
    }
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (chatId, message) => {
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === chatId 
          ? { 
              ...chat, 
              messages: [...chat.messages, message],
              lastMessage: message.text,
              timestamp: "Just now"
            } 
          : chat
      )
    );
  };

  return (
  <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row font-sans">
      {/* Sidebar */}
      <div className={`w-full lg:w-1/3 border-r border-gray-200 bg-white mt-14 flex flex-col 
        ${selectedChat ? 'hidden lg:flex' : 'flex'}`}>
        
    
   

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: "#f8fafc" }}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                selectedChat?.id === chat.id ? 'bg-blue-50' : 'bg-white'
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-start space-x-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">
                    {chat.avatar}
                  </div>
                  {chat.unread > 0 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {chat.unread}
                    </motion.div>
                  )}
                </div>

                {/* Chat Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{chat.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm truncate mt-1">{chat.lastMessage}</p>
                  
                  {/* Status Badge */}
                  <div className="mt-2">
                    {chat.status === "pending" ? (
                      <motion.div
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(255, 111, 97, 0.7)",
                            "0 0 0 6px rgba(255, 111, 97, 0)",
                            "0 0 0 0 rgba(255, 111, 97, 0)"
                          ]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          ease: "easeOut"
                        }}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-400 text-white"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Pending
                      </motion.div>
                    ) : (
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500 text-white">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Confirmed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <div className="h-full flex flex-col">
     
            <ChatBox />
          </div>
        ) : (
       <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-gray-50 p-8">

  {/* Circle Icon */}
  <div className="flex flex-col items-center text-center max-w-md">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#b7e2e6]  rounded-full shadow-sm mb-4">
      <svg
        className="w-10 h-10  text-[#006D77] "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold text-gray-800">
      Welcome to Chat
    </h3>

    {/* Subtitle */}
    <p className="text-gray-500 mt-2 leading-relaxed">
      Select a conversation from the sidebar or start a new one to begin chatting.
    </p>
  </div>

</div>

        )}
      </div>
    </div>
  );
};

export default Chatlist
;