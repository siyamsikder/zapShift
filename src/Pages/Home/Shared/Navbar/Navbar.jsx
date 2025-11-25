import React from "react";
import Logo from "../../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";
import useAuth from "../../../../Hooks/useAuth";

const Navbar = () => {
  const { user ,logOut} = useAuth();
   
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    })
  }
  const links = (
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
    <div className="navbar bg-white shadow-sm rounded-2xl px-4 lg:px-8 py-3">
      {/* LEFT LOGO */}
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-4 shadow bg-white rounded-box w-52 space-y-2">
            {links}
          </ul>
        </div>

        <a>
          <Logo />
        </a>
      </div>

      {/* CENTER MENU (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="navbar-end flex items-center gap-3">
        {" "}
        {user ? (
          <button onClick={handleLogOut}
           className="
          px-6 py-2 
          rounded-xl 
          text-gray-700 
          font-medium 
           hover:bg-primary
          hover:border-2 border-primary
        ">
            Log Out
          </button>
        ) : (
          <Link to="/register">
            <button
              className="
          px-6 py-2 
          rounded-xl 
          text-gray-700 
          font-medium
          btn btn-neutral 
          btn-dash
          hover:bg-primary
          hover:border-2 border-primary
        ">
              Sign In
            </button>
          </Link>
        )}
        <button
          className="
          px-6 py-2 
          bg-primary
          text-black 
          font-semibold 
          rounded-xl 
          hover:bg-white
          hover:border-2 border-primary
        ">
          Be a Rider
        </button>
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
          <LuArrowUpRight className="text-primary text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
