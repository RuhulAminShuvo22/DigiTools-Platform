import React from 'react';

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-primary">10K+</h2>
        <p className="text-gray-500">Active Users</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-primary">50+</h2>
        <p className="text-gray-500">Tools</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-primary">4.8⭐</h2>
        <p className="text-gray-500">Rating</p>
      </div>

    </div>
  );
};

export default Stats;