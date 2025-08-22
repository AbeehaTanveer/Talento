import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiPaperclip, FiSmile, FiChevronDown } from 'react-icons/fi';
import { IoMdCheckmark } from 'react-icons/io';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hi there! I love your handmade pottery collection', 
      sender: 'them', 
      time: '10:30 AM', 
      seen: true 
    },
    { 
      id: 2, 
      text: 'Thank you! Each piece is unique and fired in my studio', 
      sender: 'me', 
      time: '10:32 AM', 
      seen: true 
    },
    { 
      id: 3, 
      text: 'Would you consider ₿0.025 for the blue glaze bowl?', 
      sender: 'them', 
      time: '10:33 AM', 
      seen: true 
    },
    { 
      id: 4, 
      text: 'I could do ₿0.035 - it took 12 hours to make!', 
      sender: 'me', 
      time: '10:35 AM', 
      seen: false 
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        seen: false
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate reply
      setTimeout(() => setIsTyping(true), 1000);
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          {
            id: prev.length + 2,
            text: 'Let me think about that price...',
            sender: 'them',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            seen: true
          }
        ]);
        setIsTyping(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFF6E5]">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b border-[#F5F5F5] mt-16">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" 
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#006D77]/20"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="ml-3 flex-1">
          <h2 className="font-bold text-[#006D77]">Maya's Ceramics</h2>
          <p className="text-xs text-[#333333]/80">Usually replies in 5 minutes</p>
        </div>
        <button className="text-[#006D77] p-2 rounded-full hover:bg-[#006D77]/10">
          <FiChevronDown />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F5F5F5]/50">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                whileHover={{ 
                  boxShadow: msg.sender === 'me' 
                    ? '0 2px 8px -1px rgba(255, 111, 97, 0.3)'
                    : '0 2px 8px -1px rgba(0, 109, 119, 0.3)'
                }}
                className={`relative max-w-xs md:max-w-md rounded-xl p-3 text-[#333333] ${
                  msg.sender === 'me' 
                    ? 'bg-[#FF6F61]/10 border border-[#FF6F61]/20' 
                    : 'bg-white border border-[#006D77]/20'
                }`}
              >
                <p className="text-[#333333]">{msg.text}</p>
                <div className="absolute bottom-1 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#333333]/60">{msg.time}</span>
                  {msg.sender === 'me' && (
                    <IoMdCheckmark className={`text-xs ${msg.seen ? 'text-[#006D77]' : 'text-[#333333]/60'}`} />
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center p-3 w-16 rounded-full bg-white border border-[#006D77]/20 ml-2"
          >
            <div className="flex space-x-1">
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{ 
                    y: [0, -3, 0],
                    opacity: [0.6, 1, 0.6],
                    backgroundColor: ['#006D77', '#FF6F61', '#006D77']
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    delay: dot * 0.2
                  }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Bar */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-3 bg-white border-t border-[#F5F5F5]"
      >
        <div className="flex items-center bg-[#F5F5F5] rounded-full px-4 py-2">
          <button className="text-[#006D77] p-1 mr-2 hover:text-[#FF6F61] transition-colors">
            <FiPaperclip />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 outline-none text-[#333333] placeholder-[#333333]/40 bg-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="text-[#006D77] p-1 mx-2 hover:text-[#FF6F61] transition-colors">
            <FiSmile />
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!message.trim()}
            className={`p-2 rounded-full ${
              message.trim() 
                ? 'bg-[#FF6F61] text-white' 
                : 'bg-[#F5F5F5] text-[#333333]/40'
            }`}
          >
            <FiSend />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatInterface;