import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="relative bg-[#f3f3f3] rounded-3xl px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 lg:py-[80px] mx-auto overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* Text Section */}
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <span className="text-sm font-semibold text-sky-600 bg-sky-100 px-4 py-1 rounded-full mb-6 inline-block">
            Editor’s Picks for 2025
          </span>

          <h1 className="playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 leading-tight lg:leading-[72px]">
            Books to freshen up <br className="hidden md:block" /> your
            bookshelf
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
            Discover handpicked books across genres to inspire, educate, and
            entertain. Perfect for cozy weekends or thoughtful gifts.
          </p>

          <Link
            to="/ReadList"
            className="text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-6 sm:px-8 bg-sky-500 rounded-xl text-white hover:bg-sky-600 transition duration-300 cursor-pointer"
          >
            View The List
          </Link>

          {/* Small Book Thumbnails */}
          <div className="flex justify-center lg:justify-start gap-4 mt-10">
            <img
              src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
              className="w-12 sm:w-14 md:w-16 h-20 sm:h-22 md:h-24 object-cover rounded-md shadow-md"
              alt="Book 1"
            />
            <img
              src="https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp"
              className="w-12 sm:w-14 md:w-16 h-20 sm:h-22 md:h-24 object-cover rounded-md shadow-md"
              alt="Book 2"
            />
            <img
              src="https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg"
              className="w-12 sm:w-14 md:w-16 h-20 sm:h-22 md:h-24 object-cover rounded-md shadow-md"
              alt="Book 3"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative z-10">
          <img
            className="w-64 sm:w-80 md:w-[400px] lg:w-[490px] mx-auto"
            src="https://i.ibb.co.com/wby26gj/svgviewer-png-output.png"
            alt="Books illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
