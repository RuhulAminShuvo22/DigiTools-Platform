import React from 'react';

import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16 px-6 gap-10">

        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            All-in-One Digital Tools Platform
          </h1>

          <p className="text-gray-500 mt-4">
            Boost your productivity with premium tools.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="btn btn-primary rounded-full px-6">
              Get Started
            </button>

            <button className="btn btn-outline rounded-full px-6">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img src={bannerImg} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;