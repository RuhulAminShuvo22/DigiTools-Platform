import React from "react";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="flex-1">

          <div className="mb-6">
            <span className="bg-purple-100 text-purple-600 text-xs px-4 py-1.5 rounded-full">
              ● New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-purple-600 text-white px-7 py-3.5 rounded-full
            cursor-pointer transition-all duration-300
            hover:bg-purple-700 hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-7 py-3.5 rounded-full
            cursor-pointer transition-all duration-300
            hover:bg-purple-50 hover:scale-105 hover:-translate-y-1 hover:shadow-md active:scale-95">
              <span>▶</span>
              Watch Demo
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE (FINAL FIX) */}
        <div className="flex-1">

          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">

            {/* IMAGE */}
            <img
              src={bannerImg}
              alt="banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* LIGHT OVERLAY (design match) */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;