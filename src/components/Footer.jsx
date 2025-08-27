import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#006D77] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#006D77] font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-light">
                <span className="font-medium">Talento</span>
              </span>
            </div>
            <p className="text-white/80 text-sm max-w-xs">
              A marketplace for talent and trust
            </p>
            <div className="pt-4">
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} Talento. All rights reserved.
              </p>
            </div>
          </div>

          {/* Center Column - Quick Links */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-3">
              <h3 className="font-medium text-white/90 uppercase tracking-wider text-sm">
                Marketplace
              </h3>
              <ul className="space-y-2">
                {['About', 'Categories', 'Listings'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#FF6F61] transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-white/90 uppercase tracking-wider text-sm">
                Legal
              </h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#FF6F61] transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-white/90 uppercase tracking-wider text-sm">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="w-5 h-5" />, name: 'Facebook' },
                { icon: <FaInstagram className="w-5 h-5" />, name: 'Instagram' },
                { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter' },
                { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white hover:text-[#FF6F61]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* App Download Badges (optional) */}
            <div className="pt-4">
              <p className="text-sm text-white/80 mb-2">Download our app</p>
              <div className="flex space-x-2">
                <a href="#" className="block w-32 h-10 bg-black/20 rounded hover:bg-black/30 transition">
                  {/* Placeholder for App Store badge */}
                  <div className="w-full h-full flex items-center justify-center text-xs">
                    App Store
                  </div>
                </a>
                <a href="#" className="block w-32 h-10 bg-black/20 rounded hover:bg-black/30 transition">
                  {/* Placeholder for Play Store badge */}
                  <div className="w-full h-full flex items-center justify-center text-xs">
                    Google Play
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Copyright (hidden on desktop) */}
        <div className="mt-8 pt-6 border-t border-white/10 md:hidden">
          <p className="text-xs text-white/60 text-center">
            © {new Date().getFullYear()} Market2045. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;