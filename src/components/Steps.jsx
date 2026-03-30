import React from "react";
import { User, Box, Rocket } from "lucide-react";

const Steps = () => {
  return (
    <div className="py-20 bg-base-200">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">

        {/* Step 1 */}
        <div className="relative w-80 bg-base-100 border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300">

          {/* Number badge */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            01
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-5 rounded-full">
              <User className="text-purple-600" size={28} />
            </div>
          </div>

          <h3 className="text-lg font-semibold">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative w-80 bg-base-100 border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300">

          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            02
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-5 rounded-full">
              <Box className="text-purple-600" size={28} />
            </div>
          </div>

          <h3 className="text-lg font-semibold">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative w-80 bg-base-100 border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300">

          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            03
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-5 rounded-full">
              <Rocket className="text-purple-600" size={28} />
            </div>
          </div>

          <h3 className="text-lg font-semibold">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;