import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCamera, FiUpload, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    phone: '',
    profileImage: null
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({
          ...formData,
          profileImage: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const isFormValid = () => {
    const { name, email, password, confirmPassword } = formData;
    return name && email && password && confirmPassword && password === confirmPassword && agreedToTerms;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/30 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your account to start buying and selling with trusted members of your campus community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Benefits (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            {/* Profile Image Upload */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mx-auto">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiUser className="text-gray-400 text-2xl" />
                  )}
                </div>
                <button
                  onClick={triggerFileInput}
                  className="absolute bottom-0 right-0 bg-[#006D77] text-white p-2 rounded-full hover:bg-[#005D66] transition-colors"
                >
                  <FiCamera className="text-sm" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Add Profile Photo</h3>
              <p className="text-gray-600 text-sm">This helps build trust in the community</p>
            </div>

            {/* Benefits Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Why Join Us?</h3>
              
              <div className="flex items-center p-4 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <FiCheckCircle className="text-green-600 text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Verified Community</h4>
                  <p className="text-gray-600 text-sm">Connect with trusted campus members</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-10 h-10 bg-[#FF6F61]/20 rounded-lg flex items-center justify-center mr-4">
                <FiCheckCircle className="text-[#006D77] text-lg" />
                </div>
                <div>
             <h4 className="font-medium text-gray-900 mb-2">Secure & Private</h4>
                       <p className="text-gray-600 text-sm">
                    Your information is encrypted and never shared. 
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-10 h-10 bg-[#006D77]/20 rounded-lg flex items-center justify-center mr-4">
                  <FiCheckCircle className="text-[#006D77] text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Campus Network</h4>
                  <p className="text-gray-600 text-sm">Exclusive to your university community</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <FiCheckCircle className="text-purple-600 text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Help whenever you need it</p>
                </div>
              </div>
            </div>

 
          </motion.div>

          {/* Right Column - Registration Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>


                  {/* University Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      University *
                    </label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select your university</option>
                      <option value="LCWU">Lahore College for Women University</option>
                      {/* <option value="PU">University of the Punjab</option>
                      <option value="UET">University of Engineering and Technology</option>
                      <option value="LUMS">Lahore University of Management Sciences</option>
                      <option value="Other">Other University</option> */}
                    </select>
                  </div>
                </div>

      {/* Location Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location *
        </label>
        <select
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
          required
        >
          <option value="">Select your location</option>
          <option value="Lahore">Lahore</option>
          {/* <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option> */}
        </select>
      </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@university.edu"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+92 300 1234567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006D77] focus:border-transparent transition-all duration-200"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 mr-3 text-[#006D77] focus:ring-[#006D77]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-[#006D77] hover:underline">Terms of Service</a>{' '}
                    and{' '}
                    <a href="#" className="text-[#006D77] hover:underline">Privacy Policy</a>
                  </label>
                </div>

                {/* CTA Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid()}
                  whileHover={isFormValid() ? { scale: 1.02 } : {}}
                  whileTap={isFormValid() ? { scale: 0.98 } : {}}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
                    isFormValid()
                      ? 'bg-gradient-to-r from-[#006D77] to-[#008891] text-white hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Create Account <FiArrowRight className="ml-2" />
                </motion.button>

                {/* Login Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login">
                    <a  className="text-[#FF6F61] font-medium hover:underline">
                      Sign in here
                    </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;