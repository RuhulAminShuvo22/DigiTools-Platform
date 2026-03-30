import React from 'react';

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6 bg-blue-800">

      <div className="bg-blue-800 p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-white">10K+</h2>
        <p className="text-white">Active Users</p>
      </div>

      <div className="bg-blue-800 p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-white">50+</h2>
        <p className="text-white">Tools</p>
      </div>

      <div className="bg-blue-800 p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-bold text-white">4.8⭐</h2>
        <p className="text-white">Rating</p>
      </div>

    </div>
  );
};

export default Stats;