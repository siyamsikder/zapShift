import React from "react";
import Logo from "../../../../Components/Logo/Logo";
import { NavLink } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  const link = (
    <>
      <li className="text-gray-600 font-medium">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="text-gray-600 font-medium">
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li className="text-gray-600 font-medium">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="text-gray-600 font-medium">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="text-gray-600 font-medium">
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm rounded-2xl px-8 py-3">
      {/* LEFT LOGO */}
      <div className="navbar-start">
        <a>
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{link}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <button
          className="
            px-7 py-2 
            border border-gray-300 
            rounded-xl 
            text-gray-700 
            font-medium 
            hover:bg-gray-100
          ">
          Sign In
        </button>
        <button
          className="
            px-7 py-2 
            bg-primary
            text-black 
            font-semibold 
            rounded-xl 
            hover:bg-[#c8e85c]
          ">
          Be a rider
        </button>
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
          <LuArrowUpRight className="text-primary text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
