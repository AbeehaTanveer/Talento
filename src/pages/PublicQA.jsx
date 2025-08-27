import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiX, FiMessageSquare, FiSend } from "react-icons/fi";

export default function PublicQA({ listing }) {
  // State
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyTarget, setReplyTarget] = useState(null);
  const [sellerReply, setSellerReply] = useState("");
  const [isOpen, setIsOpen] = useState(true);


  // Handle new question
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const newQ = {
      id: Date.now(),
      user: "Buyer",
      question: newQuestion,
      answer: null,
      timestamp: new Date().toLocaleDateString()
    };

    setQuestions((prev) => [...prev, newQ]);
    setNewQuestion("");
    setIsModalOpen(false);
  };

  // Handle seller reply
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!sellerReply.trim()) return;

    setQuestions((prev) =>
      prev.map((q) =>
        q.id === replyTarget ? { ...q, answer: sellerReply } : q
      )
    );
    setReplyTarget(null);
    setSellerReply("");
  };

return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h3 className="font-bold text-2xl text-[#333333]">
            Questions & Answers
          </h3>
          {listing?.title && (
            <p className="text-[#666666] mt-1">About {listing.title}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#006D77] flex items-center justify-center">
            <FiMessageSquare className="h-5 w-5 text-white" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-[#006D77] font-medium hover:text-[#00525a] transition-colors"
          >
            {isOpen ? 'Minimize' : 'Expand'}
          </button>
        </div>
      </div>

      {/* Collapsible Body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Questions List */}
            {questions.length > 0 ? (
              <div className="space-y-6">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    className="border-l-4 border-[#FF6F61] pl-4 py-2"
                  >
                    {/* Question */}
                    <div className="flex items-start mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#FF6F61]/10 flex items-center justify-center text-[#FF6F61] mr-3 flex-shrink-0">
                        <FiUser className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-[#333333]">{q.user}</p>
                          <span className="text-xs text-[#999999]">{q.timestamp}</span>
                        </div>
                        <p className="text-[#333333] mt-1 leading-relaxed">{q.question}</p>
                      </div>
                    </div>

                    {/* Answer / Reply */}
                    {q.answer ? (
                      <div className="ml-12 mt-3 bg-[#F9FAFB] p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 rounded-full bg-[#006D77]/10 flex items-center justify-center text-[#006D77] mr-2">
                            <FiUser className="h-3 w-3" />
                          </div>
                          <p className="font-medium text-[#006D77] text-sm">Seller</p>
                        </div>
                        <p className="text-[#333333] text-sm">{q.answer}</p>
                      </div>
                    ) : (
                      <div className="ml-12 mt-2">
                        <p className="text-sm text-[#999999] italic mb-2">Waiting for seller response</p>
                        <button
                          onClick={() => setReplyTarget(q.id)}
                          className="text-sm text-[#006D77] font-medium hover:text-[#00525a] transition-colors flex items-center"
                        >
                          <FiSend className="h-3 w-3 mr-1" />
                          Reply as seller
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto bg-[#FFF6E5] rounded-full flex items-center justify-center mb-4">
                  <FiMessageSquare className="h-6 w-6 text-[#FF6F61]" />
                </div>
                <p className="text-[#666666]">No questions yet</p>
                <p className="text-[#999999] text-sm mt-1">Be the first to ask about this listing</p>
              </div>
            )}

            {/* Ask Question Button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-[#FF6F61] to-[#FF8C7A] text-white px-6 py-3.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-all flex items-center justify-center"
              >
                <FiMessageSquare className="h-4 w-4 mr-2" />
                Ask a Question
              </button>
            </div>

            {/* Ask Question Modal */}
            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative mx-4"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  >
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <FiX className="h-5 w-5" />
                    </button>

                    <div className="text-center mb-2">
                      <div className="w-12 h-12 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiMessageSquare className="h-5 w-5 text-[#FF6F61]" />
                      </div>
                      <h4 className="text-xl font-semibold text-[#333333]">Ask a Question</h4>
                      <p className="text-[#666666] text-sm mt-1">Your question will be visible to everyone</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-5">
                      <textarea
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="What would you like to know about this listing?"
                        className="w-full h-32 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#006D77] focus:border-transparent resize-none mb-4 text-[#333333] placeholder-[#999999]"
                      />
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="flex-1 py-3 border border-gray-300 text-[#666666] rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#006D77] to-[#008292] text-white font-medium py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                          Submit Question
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reply Modal */}
            <AnimatePresence>
              {replyTarget && (
                <motion.div
                  className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative mx-4"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  >
                    <button
                      onClick={() => setReplyTarget(null)}
                      className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <FiX className="h-5 w-5" />
                    </button>

                    <div className="text-center mb-2">
                      <div className="w-12 h-12 bg-[#006D77]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiSend className="h-5 w-5 text-[#006D77]" />
                      </div>
                      <h4 className="text-xl font-semibold text-[#333333]">Reply to Question</h4>
                      <p className="text-[#666666] text-sm mt-1">Your response will be public</p>
                    </div>

                    <form onSubmit={handleReplySubmit} className="mt-5">
                      <textarea
                        value={sellerReply}
                        onChange={(e) => setSellerReply(e.target.value)}
                        placeholder="Type your response here..."
                        className="w-full h-28 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#006D77] focus:border-transparent resize-none mb-4 text-[#333333] placeholder-[#999999]"
                      />
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => setReplyTarget(null)}
                          className="flex-1 py-3 border border-gray-300 text-[#666666] rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#006D77] to-[#008292] text-white font-medium py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                          Submit Response
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}