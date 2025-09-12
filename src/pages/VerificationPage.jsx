import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiAward, FiStar, FiUpload, FiLock, FiUserCheck, FiCamera, FiEdit2 } from 'react-icons/fi';

const VerificationPage = () => {
  const [verificationMethod, setVerificationMethod] = useState('upload'); // 'upload' or 'manual'
  const [cnicNumber, setCnicNumber] = useState('');
  const [cnicImage, setCnicImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setCnicImage(file);
        setIsUploading(false);
      }, 1000);
    }
  };

  const isFormValid = verificationMethod === 'upload' 
    ? cnicImage 
    : cnicNumber.replace(/\D/g, '').length === 13;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/30 pt-20">
      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 max-w-6xl mx-auto"
        >
          <div className="flex items-center">
            <FiStar className="text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">
              You've posted 2 listings. Verify your profile to post unlimited listings.
            </span>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Benefits & Preview (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Become a Verified Seller
                </h1>
                <p className="text-gray-600 text-lg">
                  Build trust, unlock unlimited listings, and get more buyers for your products.
                </p>
              </div>

              {/* Profile Preview Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#006D77] to-[#008891] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900 mr-2">Ali Shah</h3>
                      <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                        <FiUserCheck className="mr-1" />
                        Verified
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">Lahore College for Women University</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>⭐ 4.8 (24 reviews)</span>
                  <span>🛒 12 items sold</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg mb-4">Verification Benefits:</h3>
                
                <div className="flex items-center p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <FiCheckCircle className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Unlimited Listings</h4>
                    <p className="text-gray-600 text-sm">Post as many items as you want</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FiAward className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Verified Badge</h4>
                    <p className="text-gray-600 text-sm">Build trust with buyers</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <FiStar className="text-amber-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Priority in Search</h4>
                    <p className="text-gray-600 text-sm">Get discovered by more buyers</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <FiShield className="text-purple-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Safer Marketplace</h4>
                    <p className="text-gray-600 text-sm">Contribute to a trusted community</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Verification Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#006D77]/10 rounded-xl flex items-center justify-center mr-3">
                    <FiUserCheck className="text-[#006D77] text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Verify Your Identity</h2>
                </div>

                {/* Verification Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose verification method:
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setVerificationMethod('upload')}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        verificationMethod === 'upload'
                          ? 'border-[#006D77] bg-[#006D77]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <FiCamera className={`text-xl mb-2 ${
                          verificationMethod === 'upload' ? 'text-[#006D77]' : 'text-gray-400'
                        }`} />
                        <span className={`font-medium ${
                          verificationMethod === 'upload' ? 'text-[#006D77]' : 'text-gray-700'
                        }`}>
                          Upload CNIC
                        </span>
                        <span className="text-xs text-gray-500 mt-1">Take a photo</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVerificationMethod('manual')}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        verificationMethod === 'manual'
                          ? 'border-[#006D77] bg-[#006D77]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <FiEdit2 className={`text-xl mb-2 ${
                          verificationMethod === 'manual' ? 'text-[#006D77]' : 'text-gray-400'
                        }`} />
                        <span className={`font-medium ${
                          verificationMethod === 'manual' ? 'text-[#006D77]' : 'text-gray-700'
                        }`}>
                          Enter Manually
                        </span>
                        <span className="text-xs text-gray-500 mt-1">Type CNIC number</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Dynamic Form Based on Selection */}
                {verificationMethod === 'upload' ? (
                  <div className="space-y-6">
                    {/* CNIC Image Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CNIC Front Side Photo
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-200 hover:border-[#006D77]/50">
                        <input
                          type="file"
                          id="cnic-upload"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        <label htmlFor="cnic-upload" className="cursor-pointer">
                          {isUploading ? (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 border-2 border-[#006D77] border-t-transparent rounded-full animate-spin mb-2"></div>
                              <span className="text-sm text-gray-600">Uploading...</span>
                            </div>
                          ) : cnicImage ? (
                            <div className="flex flex-col items-center">
                              <FiCheckCircle className="text-green-500 text-2xl mb-2" />
                              <span className="text-sm text-green-700 font-medium">Image Uploaded</span>
                              <span className="text-xs text-gray-500">{cnicImage.name}</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <FiUpload className="text-gray-400 text-2xl mb-2" />
                              <span className="text-sm text-gray-700">Click to upload CNIC image</span>
                              <span className="text-xs text-gray-500">PNG, JPG up to 5MB</span>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* CNIC Number Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CNIC Number
                      </label>
                      <input
                        type="text"
                        placeholder="35202-1234567-8"
                        value={cnicNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 13) {
                            // Format as 35202-1234567-8
                            let formatted = value;
                            if (value.length > 5) {
                              formatted = `${value.slice(0, 5)}-${value.slice(5)}`;
                            }
                            if (value.length > 12) {
                              formatted = `${formatted.slice(0, 12)}-${formatted.slice(12)}`;
                            }
                            setCnicNumber(formatted);
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                        maxLength={15}
                      />
                      <p className="text-xs text-gray-500 mt-2">Enter your 13-digit CNIC without spaces</p>
                    </div>
                  </div>
                )}

                {/* Security Note */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <FiLock className="text-[#006D77] mr-2 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      Your data is encrypted and never shared with third parties. We use bank-level security to protect your information.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 mt-6 ${
                    isFormValid
                      ? 'bg-gradient-to-r from-[#006D77] to-[#008891] text-white hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isFormValid ? 'Verify Now' : 'Complete verification to continue'}
                </motion.button>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiShield className="mr-2" />
                    <span>Verification typically takes 1-2 business days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;