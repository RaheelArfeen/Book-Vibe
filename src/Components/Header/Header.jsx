import React from "react";
import { NavLink } from "react-router";
import "./Header.css"

const Header = () => {

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/readList">Listed Books</NavLink>
        <NavLink to="/pagesToRead">Pages to Read</NavLink>
    </>
  return (
    <div>
      <div className="navbar md:container mx-auto py-[30px] flex justify-between items-center">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{" "}<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>{" "}</svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow-md flex flex-col gap-3">
              {links}
            </ul>
          </div>
          <a className="text-[28px] font-bold">Book Vibe</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-4 items-center">
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-4">
            <button className="text-base cursor-pointer font-medium py-2 px-6 bg-[#23BE0A] text-white rounded-lg">Sign In</button>
            <button className="text-base cursor-pointer font-medium py-2 px-6 bg-[#59C6D2] text-white rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
