import React from 'react';

import ProductCard from "./ProductCard";
import Cart from "./Cart";

const ToggleSection = ({
  products,
  cart,
  activeTab,
  setActiveTab,
  handleAddToCart,
  handleRemove,
  handleCheckout,
}) => {
  return (
    <div className="px-6 my-10">

      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`btn rounded-full px-6 ${
            activeTab === "products" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>

        <button
          className={`btn rounded-full px-6 ${
            activeTab === "cart" ? "btn-secondary" : "btn-outline"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
      </div>

      {activeTab === "products" ? (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default ToggleSection;