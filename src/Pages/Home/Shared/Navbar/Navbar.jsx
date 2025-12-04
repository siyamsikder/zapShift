import React from "react";
import Logo from "../../../../Components/Logo/Logo";
import { Link, NavLink, useLocation } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";
import useAuth from "../../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
      <li><NavLink to="/send-parcel">Send Parcel</NavLink></li>

      {user && (
        <li>
          <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm rounded-2xl px-4 lg:px-6 py-3">

      {/* LEFT - LOGO + Mobile Menu */}
      <div className="navbar-start flex items-center gap-3">

        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-3 shadow bg-white rounded-xl w-48 space-y-1 text-gray-600">
            {links}
          </ul>
        </div>

        {/* LOGO */}
        <Link>
          <Logo />
        </Link>
      </div>

      {/* CENTER MENU - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-gray-600">
          {links}
        </ul>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="navbar-end flex items-center gap-4">

        {/* Login / Logout */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="px-5 py-2 rounded-xl text-gray-700 font-medium border border-gray-300 hover:bg-primary hover:text-black transition">
            Log Out
          </button>
        ) : (
          <Link to="/register">
            <button className="px-5 py-2 rounded-xl text-gray-700 font-medium border border-gray-300 hover:bg-primary hover:text-black transition">
              Sign In
            </button>
          </Link>
        )}

        {/* Rider Button */}
        <Link to="/rider" state={location.state}>
          <button className="px-5 py-2 bg-primary text-black font-semibold rounded-xl hover:bg-white hover:text-black hover:border-2 border-primary transition">
            Be a Rider
          </button>
        </Link>

        {/* Arrow Icon */}
        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
          <LuArrowUpRight className="text-primary text-lg" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
