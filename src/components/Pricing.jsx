import React from "react";

const Pricing = () => {
  return (
    <div className="py-16 bg-base-200">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">

        {/* Starter */}
        <div className="group card w-80 bg-base-100 shadow-md border transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:scale-105 hover:shadow-2xl">

          <div className="card-body text-left">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-sm text-gray-500 group-hover:text-white">
              Perfect for getting started
            </p>

            <h2 className="text-3xl font-bold mt-4">
              $0 <span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="btn w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none transition-all duration-300 
              group-hover:!bg-white group-hover:!text-purple-600 
              hover:!text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Pro */}
        <div className="group card w-80 text-white shadow-xl border bg-gradient-to-r from-purple-600 to-indigo-600 relative transition-all duration-300 hover:scale-105 hover:shadow-2xl">

          {/* Badge */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <span className="badge badge-warning">Most Popular</span>
          </div>

          <div className="card-body text-left">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29 <span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="btn w-full bg-white text-purple-600 border-none hover:bg-white hover:text-purple-600">
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise */}
        <div className="group card w-80 bg-base-100 shadow-md border transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:scale-105 hover:shadow-2xl">

          <div className="card-body text-left">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-sm text-gray-500 group-hover:text-white">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mt-4">
              $99 <span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="btn w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none transition-all duration-300 
              group-hover:!bg-white group-hover:!text-purple-600 
              hover:!text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;