import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-[#f3f3f3] rounded-3xl flex items-center justify-between px-32 py-[80px] mx-auto overflow-hidden">

      <div className="relative z-10 max-w-xl">
        <span className="text-sm font-semibold text-sky-600 bg-sky-100 px-4 py-1 rounded-full mb-6 inline-block">
          Editor’s Picks for 2025
        </span>

        <h1 className="playfair text-[56px] font-bold mb-6 leading-[72px]">
          Books to freshen up <br /> your bookshelf
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Discover handpicked books across genres to inspire, educate, and
          entertain. Perfect for cozy weekends or thoughtful gifts.
        </p>

        <button className="text-2xl font-bold py-4 px-8 bg-sky-500 rounded-xl text-white hover:bg-sky-600 transition duration-300 cursor-pointer">
          View The List
        </button>

        <div className="flex gap-4 mt-10">
          <img
            src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
            className="w-16 h-24 object-cover rounded-md shadow-md"
            alt="Book 1"
          />
          <img
            src="https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp"
            className="w-16 h-24 object-cover rounded-md shadow-md"
            alt="Book 2"
          />
          <img
            src="https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg"
            className="w-16 h-24 object-cover rounded-md shadow-md"
            alt="Book 3"
          />
        </div>
      </div>

      <div className="relative z-10">
        <img
          className="w-[490px]"
          src="https://i.ibb.co.com/wby26gj/svgviewer-png-output.png"
          alt="Books illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
