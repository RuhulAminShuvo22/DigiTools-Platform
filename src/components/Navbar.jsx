import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">DigiTools</h1>

        <div className="flex items-center gap-6">
          <a className="cursor-pointer">Home</a>
          <a className="cursor-pointer">Products</a>
          <a className="cursor-pointer">Pricing</a>

          <div className="relative text-xl">
            🛒
            <span className="absolute -top-2 -right-3 bg-primary text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;