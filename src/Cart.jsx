import React from 'react';

const Cart = ({ cart, handleRemove, handleCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <div className="text-center text-lg">Cart is empty 😢</div>;
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <span>{item.icon} {item.name}</span>
          <span>${item.price}</span>

          <button
            className="btn btn-sm btn-error"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold text-center">
        Total: ${total}
      </h2>

      <button
        className="btn btn-success w-full"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;