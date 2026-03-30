import React from "react";

const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center text-lg text-gray-500">
        Cart is empty 😢
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-5 rounded-xl"
          >

            <div>
              <h3 className="font-medium text-lg">
                {item.icon} {item.name}
              </h3>
              <p className="text-gray-400 text-sm">
                ${item.price}
              </p>
            </div>

            <button
              onClick={() => handleRemove(item.id)}
              className="text-pink-500 font-medium hover:underline"
            >
              Remove
            </button>

          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 text-lg font-semibold">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full mt-6 py-4 rounded-full text-white font-medium
        bg-gradient-to-r from-purple-600 to-indigo-600
        hover:scale-105 transition"
      >
        Proceed To Checkout
      </button>

    </div>
  );
};

export default Cart;