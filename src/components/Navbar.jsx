import React from "react";

const Navbar = ({ cartCount, setActiveTab }) => {
  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* LOGO */}
        <h1
          onClick={() => setActiveTab("products")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent cursor-pointer"
        >
          DigiTools
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a className="cursor-pointer">Products</a>
          <a className="cursor-pointer">Features</a>
          <a className="cursor-pointer">Pricing</a>
          <a className="cursor-pointer">Testimonials</a>
          <a className="cursor-pointer">FAQ</a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* ✅ CART CLICKABLE */}
          <div
            className="relative text-xl cursor-pointer"
            onClick={() => setActiveTab("cart")}
          >
            🛒
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          </div>

          <button className="text-gray-600 font-medium">
            Login
          </button>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;