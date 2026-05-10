import React from 'react';
import banner from '../assets/banner-img-1.png'
const Banner = () => {
    return (
       <div className="bg-gray-100 rounded-2xl px-6 py-10 md:px-12 md:py-14">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Dependable Care, Backed by Trusted <br />
          Professionals.
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
          Compassionate healthcare you can trust, delivered by experienced
          professionals dedicated to your well-being. Your health is our
          priority, every step of the way.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="w-full md:w-96 px-5 py-3 rounded-full border border-gray-200 outline-none"
          />

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
            Search Now
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src={banner}
            alt="doctor"
            className="w-full h-56 object-cover rounded-2xl"
          />

          <img
            src={banner }
            alt="doctor"
            className="w-full h-56 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
    );
};

export default Banner;