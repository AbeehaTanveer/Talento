import { useState, useRef, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ModernChatbox = ({ userType = 'buyer' }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm interested in your photography services.", sender: 'buyer', time: '10:30 AM' },
    { id: 2, text: "Hello! Thanks for reaching out. I'd love to help with your project.", sender: 'seller', time: '10:32 AM' },
    { id: 3, text: "Could you tell me more about your pricing for a 2-hour event shoot?", sender: 'buyer', time: '10:33 AM' },
    { id: 4, text: "Sure! My standard rate is $150/hour with edited digital photos included.", sender: 'seller', time: '10:35 AM' },
  ]);



  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
const navigate = useNavigate();

// SVG for "Bought" - Shopping Bag Icon
  const boughtLogo = (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-3.42l-4.5 8H8.1l-4.5-8H2v2h2l3.6 7.59-1.35 2.44C6.52 15.37 6.48 16 6.7 16.59 7.37 18 8.65 18 9 18h10v-2H8.42l1.13-2H8.1z"/>
    </svg>
  );

useEffect(() => {
  const timer = setTimeout(() => {
    if (userType === 'buyer') {
      navigate('/pendingbuyer');
    } else if (userType === 'seller') {
      navigate('/pendingseller');
    }
       
    return () => clearInterval(timer);
  }, 15000); // 15 seconds delay

  return () => clearTimeout(timer); // Cleanup timeout on unmount
}, []);

  // SVG for "Sold" - Sold Tag Icon
  const soldLogo = (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
    </svg>
  );

  // Sample smart replies
  const smartReplies = ["Okay 👍", "Thanks 🙏", "Send file 📎", "Let me check"];

  // Sample emojis for the picker
  const emojis = ["😀", "😂", "❤️", "👍", "😊", "🎉", "😍", "🤔", "👏", "🙏", "🔥", "⭐"];

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '' && uploadedFiles.length === 0) return;
    
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'buyer',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      files: uploadedFiles.length > 0 ? [...uploadedFiles] : null
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    setUploadedFiles([]);
    
    // Simulate typing and reply
    setIsTyping(true);
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you shortly.",
        sender: 'seller',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

const addEmoji = (emoji) => {
  setNewMessage(prev => prev + emoji);
  setShowEmojiPicker(false);


  handleSendMessage();
};
  const handleSmartReply = (reply) => {
    const newMsg = {
      id: messages.length + 1,
      text: reply,
      sender: 'buyer',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    
    // Simulate typing and reply
    setIsTyping(true);
    setTimeout(() => {
      const sellerReply = {
        id: messages.length + 2,
        text: "Great! Let me know if you have any other questions.",
        sender: 'seller',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, sellerReply]);
      setIsTyping(false);
    }, 1500);
  };

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const confirmAction = () => {
    // Add confirmation message to chat
    const confirmationMsg = {
      id: messages.length + 1,
      text: `✅ ${userType === 'buyer' ? 'I confirmed this product as bought' : 'I confirmed this product as sold'}`,
      sender: userType,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isConfirmation: true
    };
    
    setMessages(prev => [...prev, confirmationMsg]);
    setShowConfirmation(false);
    
    // Wait 5 seconds then redirect (simulated here with console log)
    setTimeout(() => {
      console.log(`Redirecting to ${userType === 'buyer' ? 'BuyerPendingPage' : 'SellerBuyerPage'}`);
    }, 5000);
  };

  return (
<div className="flex flex-col h-full bg-gray-50 mt-15">
  {/* Header */}
  <div className="bg-[#006D77] p-4 text-white">
    <div className="flex items-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#006D77] font-bold mr-3">
          JS
        </div>
        <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
      <div>
        <h2 className="font-semibold">Jane Smith Photography</h2>
        <p className="text-sm opacity-80">Online • Responds quickly</p>
      </div>
    </div>
  </div>

  {/* Chat Messages */}
  <div className="flex-1 overflow-y-auto p-4">
    <div className="space-y-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
        >
          <div 
            className={`relative max-w-xs lg:max-w-md rounded-2xl p-3 ${message.sender === 'buyer' 
              ? 'bg-[#006D77] text-white rounded-br-md' 
              : 'bg-white text-gray-800 rounded-bl-md shadow-sm'} ${message.isConfirmation ? 'bg-opacity-10 border border-[#006D77] border-opacity-30 text-[#006D77]' : ''}`}
          >
            {!message.isConfirmation && (
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 hover:opacity-100 transition-opacity"
              >
                <span className="text-sm">❤️</span>
              </motion.div>
            )}
            
            {message.files && message.files.length > 0 && (
              <div className="mb-2">
                {message.files.map((file, index) => (
                  <div key={index} className="mb-2 last:mb-0">
                    {file.type.startsWith('image/') ? (
                      <img src={file.url} alt={file.name} className="rounded-lg max-w-full h-auto" />
                    ) : (
                      <div className="flex items-center p-2 bg-gray-100 rounded-lg">
                        <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm truncate">{file.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <p>{message.text}</p>
            <p className={`text-xs mt-1 ${message.sender === 'buyer' ? 'text-blue-100' : 'text-gray-500'}`}>
              {message.time}
            </p>
          </div>
        </motion.div>
      ))}
      
{/* center button */}

<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center my-8"
    >
      <button
        onClick={handleConfirmation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 px-6 py-3 rounded-xl
            bg-gradient-to-r from-[#FF6F61] via-[#db4f4f] to-[#B22222]/90
                   text-white font-semibold text-lg shadow-lg
                   hover:shadow-xl hover:scale-105
                   transition-all duration-300 ease-in-out"
      >
        {userType === 'buyer' ? boughtLogo : soldLogo}
        <span className="relative">
          {userType === 'buyer' ? 'Mark as Bought' : 'Mark as Sold'}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
              isHovered ? 'w-full' : 'w-0'
            }`}
          ></span>
        </span>
      </button>
      <p className="text-sm text-gray-600 mt-3 flex items-center gap-2 font-medium">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
        Ensures secure transactions & builds trust
      </p>
    </motion.div>


      
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl p-3 shadow-sm">
            <div className="flex space-x-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  </div>

  {/* Smart Replies */}
  <div className=" sticky px-4 py-2 bg-white border-t border-gray-200">
    <div className="flex flex-wrap gap-2">
      {smartReplies.map((reply, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSmartReply(reply)}
          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          {reply}
        </motion.button>
      ))}
    </div>
  </div>

  {/* Message Input */}
  <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
    {/* File preview */}
    {uploadedFiles.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="relative">
            {file.type.startsWith('image/') ? (
              <div className="relative">
                <img src={file.url} alt={file.name} className="w-16 h-16 object-cover rounded-lg" />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="relative bg-gray-100 rounded-lg p-2 pr-6">
                <span className="text-xs truncate max-w-xs">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
    
    <div className="flex items-center">
      <button 
        onClick={() => fileInputRef.current.click()}
        className="p-2 text-gray-500 hover:text-[#006D77] rounded-lg hover:bg-gray-100 mr-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </button>
      
      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />
      
      <div className="relative flex-1">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full bg-gray-100 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#006D77] focus:border-transparent"
        />
        
        <button 
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#006D77]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      
      <button
        onClick={handleSendMessage}
        className="ml-2 p-2 bg-[#006D77] text-white rounded-lg hover:bg-[#00525a] transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </div>
    
    {/* Emoji Picker */}
    <AnimatePresence>
      {showEmojiPicker && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-2 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
        >
          <div className="grid grid-cols-8 gap-1">
            {['😀', '😂', '😍', '🥰', '😎', '🙏', '👍', '❤️'].map(emoji => (
              <button
                key={emoji}
                onClick={() => addEmoji(emoji)}
                className="text-xl p-1 hover:bg-gray-100 rounded"
              >
                {emoji}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Confirmation Modal */}
{/* Enhanced Confirmation Modal */}
<AnimatePresence>
  {showConfirmation && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-50"
        onClick={() => setShowConfirmation(false)}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 z-50 shadow-2xl w-11/12 max-w-lg"
      >
        <div className="text-center">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-800 mb-3"
          >
            ⚠️ Confirm Your Action
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-2 text-lg"
          >
            Are you sure you want to proceed?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 mb-8 text-base"
          >
            Once confirmed, this action cannot be undone. Please review carefully.
          </motion.p>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8"
          >
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-700 font-medium">Your request is being sent to Jane Smith Photography</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4"
          >
            <button
              onClick={() => setShowConfirmation(false)}
              className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 border-2 border-transparent hover:border-gray-300"
            >
              Cancel
            </button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={confirmAction}
              className="flex-1 py-4 bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]/90 text-white rounded-xl font-semibold text-lg hover:from-red-500 hover:to-red-500 transition-colors duration-200 shadow-lg"
            >
              Confirm Action
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs text-gray-400 mt-6"
          >
            This helps maintain trust and security in our marketplace community.
          </motion.p>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
</div>
  );
};

export default ModernChatbox;