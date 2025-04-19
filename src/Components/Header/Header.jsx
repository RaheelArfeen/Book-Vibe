import React, { useState } from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink to="/" className="block px-4 py-2 hover:text-[#23BE0A] w-fit">Home</NavLink>
      <NavLink to="/readList" className="block px-4 py-2 hover:text-[#23BE0A] w-fit">Listed Books</NavLink>
      <NavLink to="/pagesToRead" className="block px-4 py-2 hover:text-[#23BE0A] w-fit">Pages to Read</NavLink>
    </>
  );

  const authButtons = (
    <>
      <button className="w-fit text-base font-medium py-2 px-4 bg-[#23BE0A] text-white rounded-lg">
        Sign In
      </button>
      <button className="w-fit text-base font-medium py-2 px-4 bg-[#59C6D2] text-white rounded-lg">
        Sign Up
      </button>
    </>
  );

  return (
    <div className="w-full bg-[#ffffff] mx-auto">
      <div className="md:container mx-auto py-6 px-4 flex justify-between items-center">
        {/* Left side - Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <a className="text-2xl font-bold">Book Vibe</a>
        </div>

        {/* Desktop nav links */}
        <div className="nav hidden md:flex gap-6 items-center">
          {navLinks}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-base w-fit font-medium py-2 px-6 bg-[#23BE0A] text-white rounded-lg">
            Sign In
          </button>
          <button className="text-base w-fit font-medium py-2 px-6 bg-[#59C6D2] text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="nav lg:hidden px-4 pb-4 flex flex-col gap-2">
          {navLinks}
          <div className="mt-2 flex gap-2">
            {authButtons}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
