import React from 'react';

import { useState } from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h2 className="text-xl font-semibold mb-2">
        {product.icon} {product.name}
      </h2>

      <p className="text-gray-500 text-sm mb-3">
        {product.description}
      </p>

      <h3 className="text-2xl font-bold mb-2">
        ${product.price}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </h3>

      <span className="badge badge-primary mb-3">
        {product.tagType}
      </span>

      <ul className="text-sm space-y-1 mb-4">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        className="btn btn-primary w-full rounded-full"
        onClick={() => {
          handleAddToCart(product);
          setAdded(true);
        }}
      >
        {added ? "Added ✔" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;