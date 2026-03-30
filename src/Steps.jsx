import React from 'react';

const Steps = () => {
  return (
    <div className="text-center my-16">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="p-4 shadow rounded">1️⃣ Choose Product</div>
        <div className="p-4 shadow rounded">2️⃣ Add to Cart</div>
        <div className="p-4 shadow rounded">3️⃣ Checkout</div>
      </div>
    </div>
  );
};

export default Steps;