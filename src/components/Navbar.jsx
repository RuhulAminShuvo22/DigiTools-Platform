import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* LOGO */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent cursor-pointer">
          DigiTools
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a className="cursor-pointer hover:text-purple-600 transition">Products</a>
          <a className="cursor-pointer hover:text-purple-600 transition">Features</a>
          <a className="cursor-pointer hover:text-purple-600 transition">Pricing</a>
          <a className="cursor-pointer hover:text-purple-600 transition">Testimonials</a>
          <a className="cursor-pointer hover:text-purple-600 transition">FAQ</a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* CART (FUNCTION SAME) */}
          <div className="relative text-xl cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          </div>

          {/* LOGIN */}
          <button className="text-gray-600 font-medium hover:text-purple-600 transition cursor-pointer">
            Login
          </button>

          {/* CTA */}
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium
          cursor-pointer transition-all duration-300
          hover:bg-purple-700 hover:scale-105 hover:shadow-md active:scale-95">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;