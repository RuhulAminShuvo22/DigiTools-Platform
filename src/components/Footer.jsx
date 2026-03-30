import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1220] to-[#0a1930] text-gray-300 px-10 py-16 mt-16">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto">
        
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
          <p className="text-sm leading-6 text-gray-400 max-w-xs">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          <h3 className="text-white font-semibold mb-2">Social Links</h3>
          <div className="flex gap-3 mt-2">
            <div className="bg-gray-700 hover:bg-white hover:text-black p-2 rounded-full cursor-pointer">
              <FaYoutube size={14} />
            </div>
            <div className="bg-gray-700 hover:bg-white hover:text-black p-2 rounded-full cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="bg-gray-700 hover:bg-white hover:text-black p-2 rounded-full cursor-pointer">
              <FaTwitter size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10 max-w-7xl mx-auto"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;