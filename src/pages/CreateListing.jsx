import { useState, useRef } from 'react';

const CreateListingScreen = () => {
  const [listing, setListing] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'PKR',
    category: '',
    tags: [],
    images: [],
    location: ''
  });

  const fileInputRef = useRef(null);

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

  const handleTriggerFileInput = () => {
    fileInputRef.current.click();
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
    URL.revokeObjectURL(newImages[index]); // Clean up memory
    newImages.splice(index, 1);
    setListing(prev => ({ ...prev, images: newImages }));
  };

  const handlePublish = () => {
    console.log('Publishing listing:', listing);
    // Here you would typically send the data to your backend
    alert('Listing published successfully!');
  };

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
                <h4 className="font-medium text-[#333333]">Safety Reminder</h4>
                <p className="text-sm text-[#333333]/80 mt-1">
                  Never share personal financial information. Talanto will never ask for your bank details outside secure payment methods.
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

          {/* Images Section - Now with proper image display */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#006D77] mb-4">Images</h2>
            <div className="space-y-4">
              <div 
                onClick={handleTriggerFileInput}
                className="border-2 border-dashed border-[#F5F5F5] rounded-lg p-8 text-center cursor-pointer hover:border-[#006D77]/50 transition-colors"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10 text-[#006D77] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-sm text-[#333333]">Click to upload images</p>
                  <p className="text-xs text-[#333333]/60 mt-1">Up to 5 images (JPEG, PNG)</p>
                </div>
              </div>
              
              {/* Display uploaded images */}
              {listing.images.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {listing.images.map((imageUrl, index) => (
                    <div key={index} className="relative aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="absolute top-1 right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm hover:bg-[#FF6F61]/10"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
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
                    <div key={index} className="flex items-center bg-[#FFF6E5] px-3 py-1 rounded-full text-sm">
                      {tag}
                      <button
                        onClick={() => removeTag(index)}
                        className="ml-1 text-[#FF6F61] hover:text-[#FF6F61]/80"
                      >
                        ×
                      </button>
                    </div>
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
              <div className="space-y-4">
                {/* Image Preview - Now shows actual images */}
                <div className="aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden">
                  {listing.images.length > 0 ? (
                    <img 
                      src={listing.images[0]} 
                      alt="Main preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#333333]/30">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Title & Price */}
                <div className="space-y-2">
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
                <div className="text-sm text-[#333333]">
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