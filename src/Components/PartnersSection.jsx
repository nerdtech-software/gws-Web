import React from "react";

const PartnersSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <p className="text-gray-400 mb-8">
          Our team can create amazing web experiences, app experiences, beginning
          with deep market research, practical strategies, and professional execution.
        </p>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          <div className="bg-gray-800 rounded-lg px-6 py-3 shadow-lg">
            <p className="text-gray-300 font-semibold">Upglam</p>
          </div>
          <div className="bg-purple-600 rounded-lg px-6 py-3 shadow-lg">
            <p className="text-white font-semibold">Nutrilix</p>
          </div>
          <div className="bg-gray-800 rounded-lg px-6 py-3 shadow-lg">
            <p className="text-gray-300 font-semibold">Investify</p>
          </div>
          <div className="bg-gray-800 rounded-lg px-6 py-3 shadow-lg">
            <p className="text-gray-300 font-semibold">Knewish</p>
          </div>
        </div>
<div className="bg-white w-full h-0.5 mb-5 "></div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
          <div>
            <p className="text-2xl font-bold">20K+</p>
            <p className="text-gray-400">Happy Customer</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1200+</p>
            <p className="text-gray-400">Project Delivered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p className="text-gray-400">Award Winner</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3200+</p>
            <p className="text-gray-400">Worker in worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
