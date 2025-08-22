import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreateListingScreen = () => {
  const [listing, setListing] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'PKR',
    category: '',
    tags: [],
    images: [],
    videos: [],
    location: ''
  });

  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setListing(prev => ({ 
      ...prev, 
      images: [...prev.images, ...imageUrls.slice(0, 5 - prev.images.length)] 
    }));
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const videoUrl = URL.createObjectURL(files[0]);
      setListing(prev => ({ 
        ...prev, 
        videos: [...prev.videos, videoUrl].slice(0, 1) // Limit to 1 video
      }));
    }
  };

  const handleTriggerImageInput = () => {
    imageInputRef.current.click();
  };

  const handleTriggerVideoInput = () => {
    videoInputRef.current.click();
  };

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setListing(prev => ({ ...prev, tags: [...prev.tags, e.target.value] }));
      e.target.value = '';
    }
  };

  const removeTag = (index) => {
    setListing(prev => ({ ...prev, tags: prev.tags.filter((_, i) => i !== index) }));
  };

  const removeImage = (index) => {
    const newImages = [...listing.images];
    URL.revokeObjectURL(newImages[index]);
    newImages.splice(index, 1);
    setListing(prev => ({ ...prev, images: newImages }));
    if (activePreviewIndex >= newImages.length) {
      setActivePreviewIndex(Math.max(0, newImages.length - 1));
    }
  };

  const removeVideo = (index) => {
    const newVideos = [...listing.videos];
    URL.revokeObjectURL(newVideos[index]);
    newVideos.splice(index, 1);
    setListing(prev => ({ ...prev, videos: newVideos }));
  };

  const handlePublish = () => {
    console.log('Publishing listing:', listing);
    alert('Listing published successfully!');
  };

  const allMedia = [...listing.images, ...listing.videos];
  const mediaTypes = [
    ...listing.images.map(() => 'image'),
    ...listing.videos.map(() => 'video')
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-[#006D77] flex items-center justify-center text-white font-bold text-xl mr-3">
            T
          </div>
          <span className="text-xl font-semibold text-[#333333]">Talanto</span>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2 border border-[#006D77] text-[#006D77] rounded-lg hover:bg-[#006D77]/10 transition-colors">
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="px-6 py-2 bg-[#FF6F61] text-white rounded-lg hover:bg-[#FF6F61]/90 transition-colors"
            disabled={!listing.title || !listing.description || !listing.price || !listing.category}
          >
            Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 p-6 gap-6">
        {/* Left Column - Form (70%) */}
        <div className="w-full lg:w-7/12 space-y-6">
          {/* Security Alert */}
          <div className="bg-[#FFF6E5] border-l-4 border-[#FF6F61] p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-[#FF6F61] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <div>
                <h4 className="font-medium text-[#333333]">Reminder</h4>
                <p className="text-sm text-[#333333]/80 mt-1">
                Add a Video can make you standout and increase your chances of selling.
                </p>
              </div>
            </div>
          </div>

          {/* Basic Info Section */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#006D77] mb-4">Basic Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={listing.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                  placeholder="What are you offering?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Description *</label>
                <textarea
                  name="description"
                  value={listing.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                  placeholder="Describe your item or service in detail..."
                  required
                ></textarea>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#006D77] mb-4">Pricing</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Price *</label>
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    value={listing.price}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                    placeholder="0.00"
                    required
                  />
                  <span className="absolute left-3 top-3.5 text-[#333333]/80">{listing.currency}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Currency</label>
                <select
                  name="currency"
                  value={listing.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                >
                  <option value="PKR">PKR (₨)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Media Section - Combined Images and Videos */}
      {/* Media Section - Combined Images and Videos */}
<section className="bg-white rounded-xl shadow-sm p-6 glass-panel">
  <h2 className="text-xl font-semibold text-[#006D77] mb-4">Media</h2>
  <div className="space-y-4">
    <div className="flex space-x-3 mb-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleTriggerImageInput}
        className={`px-4 py-2 rounded-lg border-2 font-medium ${
          mediaType === 'image' 
            ? 'bg-[#006D77] text-white border-[#006D77] shadow-md' 
            : 'bg-white text-[#333333] border-[#e0e0e0] hover:border-[#006D77] hover:text-[#006D77]'
        } transition-all duration-200`}
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Add Images
        </div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleTriggerVideoInput}
        className={`px-4 py-2 rounded-lg border-2 font-medium ${
          mediaType === 'video' 
            ? 'bg-[#006D77] text-white border-[#006D77] shadow-md' 
            : 'bg-white text-[#333333] border-[#e0e0e0] hover:border-[#006D77] hover:text-[#006D77]'
        } transition-all duration-200`}
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Add Video
        </div>
      </motion.button>
    </div>
    
    <input
      type="file"
      ref={imageInputRef}
      multiple
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
    <input
      type="file"
      ref={videoInputRef}
      accept="video/*"
      onChange={handleVideoUpload}
      className="hidden"
    />
    
    {/* Display uploaded media */}
    {(listing.images.length > 0 || listing.videos.length > 0) ? (
      <div className="grid grid-cols-3 gap-4">
        {listing.images.map((imageUrl, index) => (
          <motion.div 
            key={`img-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-gradient-to-br from-[#F5F5F5] to-[#e0e0e0] rounded-lg overflow-hidden group border border-[#e0e0e0]"
          >
            <img 
              src={imageUrl} 
              alt={`Preview ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 bg-[#FF6F61] text-white text-xs px-2 py-1 rounded-br-lg font-medium">
              Image {index + 1}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                removeImage(index);
              }}
              className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-[#FF6F61] hover:text-white transition-colors duration-200"
            >
              ×
            </motion.button>
          </motion.div>
        ))}
        
        {listing.videos.map((videoUrl, index) => (
          <motion.div 
            key={`vid-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-gradient-to-br from-[#F5F5F5] to-[#e0e0e0] rounded-lg overflow-hidden group border border-[#e0e0e0]"
          >
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-20">
              <svg className="w-10 h-10 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute top-0 left-0 bg-[#006D77] text-white text-xs px-2 py-1 rounded-br-lg font-medium">
              Video
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                removeVideo(index);
              }}
              className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-[#FF6F61] hover:text-white transition-colors duration-200"
            >
              ×
            </motion.button>
          </motion.div>
        ))}
      </div>
    ) : (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-2 border-dashed border-[#e0e0e0] rounded-xl p-8 text-center hover:border-[#006D77] transition-colors duration-300"
      >
        <div className="flex flex-col items-center text-[#666]">
          <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-medium">No media added yet</p>
          <p className="text-sm mt-1">Upload images or a video to showcase your item</p>
        </div>
      </motion.div>
    )}
  </div>
</section>

          {/* Category & Tags Section */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#006D77] mb-4">Category & Tags</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Category *</label>
                <select
                  name="category"
                  value={listing.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Services">Services</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Real Estate">Real Estate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {listing.tags.map((tag, index) => (
                    <motion.div 
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center bg-[#FFF6E5] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(index)}
                        className="ml-1 text-[#FF6F61] hover:text-[#FF6F61]/80"
                      >
                        ×
                      </button>
                    </motion.div>
                  ))}
                </div>
                <input
                  type="text"
                  onKeyDown={handleTagAdd}
                  className="w-full px-4 py-3 rounded-lg border border-[#F5F5F5] focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]/50"
                  placeholder="Type a tag and press Enter"
                />
                <p className="text-xs text-[#333333]/60 mt-1">Add relevant tags to help buyers find your listing</p>
              </div>
            </div>
          </section>

          {/* Sticky Publish Button for Mobile */}
          <div className="lg:hidden sticky bottom-4 bg-white p-4 rounded-xl shadow-lg border border-[#F5F5F5]">
            <button 
              onClick={handlePublish}
              className="w-full py-3 bg-[#FF6F61] text-white rounded-lg font-medium hover:bg-[#FF6F61]/90 transition-colors"
              disabled={!listing.title || !listing.description || !listing.price || !listing.category}
            >
              Publish Listing
            </button>
          </div>
        </div>

        {/* Right Column - Preview (30%) */}
        <div className="hidden lg:block lg:w-5/12">
          <div className="sticky top-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#006D77] mb-4">Listing Preview</h2>
              
              {/* Main Preview Area */}
              <div className="aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden mb-4 relative">
                <AnimatePresence mode="wait">
                  {allMedia.length > 0 ? (
                    <motion.div
                      key={activePreviewIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full"
                    >
                      {mediaTypes[activePreviewIndex] === 'image' ? (
                        <img 
                          src={allMedia[activePreviewIndex]} 
                          alt="Main preview" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video 
                          controls
                          className="w-full h-full object-cover"
                        >
                          <source src={allMedia[activePreviewIndex]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      <div className="absolute top-0 left-0 bg-[#FF6F61] text-white text-xs px-2 py-1 rounded-br-lg">
                        {mediaTypes[activePreviewIndex] === 'image' 
                          ? `Image ${activePreviewIndex + 1}` 
                          : 'Video'}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#333333]/30">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Media Thumbnail Scroller */}
              {allMedia.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
                  {allMedia.map((media, index) => (
                    <div
                      key={index}
                      onClick={() => setActivePreviewIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                        index === activePreviewIndex ? 'border-[#FF6F61]' : 'border-transparent'
                      }`}
                    >
                      {mediaTypes[index] === 'image' ? (
                        <img 
                          src={media} 
                          alt={`Thumbnail ${index}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#006D77] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Title & Price */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-semibold text-[#333333]">
                  {listing.title || <span className="text-[#333333]/50">Your listing title will appear here</span>}
                </h3>
                {listing.price ? (
                  <p className="text-xl font-bold text-[#FF6F61]">
                    {listing.currency} {listing.price}
                  </p>
                ) : (
                  <p className="text-[#333333]/50">Price will appear here</p>
                )}
              </div>

              {/* Description Preview */}
              <div className="text-sm text-[#333333] mb-4">
                {listing.description ? (
                  <p className="line-clamp-3">{listing.description}</p>
                ) : (
                  <p className="text-[#333333]/50">Listing description will appear here</p>
                )}
              </div>

              {/* Category & Tags Preview */}
              <div className="pt-4 border-t border-[#F5F5F5]">
                <div className="flex flex-wrap gap-2">
                  {listing.category && (
                    <span className="bg-[#006D77]/10 text-[#006D77] px-3 py-1 rounded-full text-sm">
                      {listing.category}
                    </span>
                  )}
                  {listing.tags.map((tag, index) => (
                    <span key={index} className="bg-[#FFF6E5] text-[#333333] px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Publish Button for Desktop */}
            <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border border-[#F5F5F5]">
              <button 
                onClick={handlePublish}
                className="w-full py-3 bg-[#FF6F61] text-white rounded-lg font-medium hover:bg-[#FF6F61]/90 transition-colors"
                disabled={!listing.title || !listing.description || !listing.price || !listing.category}
              >
                Publish Listing
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#F5F5F5] py-4 px-6">
        <div className="flex justify-between items-center">
          <button className="text-[#006D77] hover:text-[#006D77]/80 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Dashboard
          </button>
          <a href="#" className="text-[#006D77] hover:text-[#006D77]/80">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default CreateListingScreen;