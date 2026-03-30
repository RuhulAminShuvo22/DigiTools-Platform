import React from "react";

const WorkflowSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#a100ff] py-20 px-6 text-center text-white -mb-1">
      
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          
          <button className="bg-white text-purple-700 font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-gray-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default WorkflowSection;