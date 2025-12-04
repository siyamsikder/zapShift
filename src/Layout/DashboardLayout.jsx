// Updated Dashboard Layout with MENU & GENERAL aligned top-to-bottom
// Unified icon color

import React from "react";
import { MdOutlineDashboard, MdOutlineStore } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiHelpCircle, FiKey } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { CiDeliveryTruck, CiLogout, CiSettings } from "react-icons/ci";

import { Link, NavLink, Outlet } from "react-router";

const menuItemStyle =
  "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all text-gray-700";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4">
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">Navbar Title</div>
        </nav>

        {/* Routed Content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          aria-label="close sidebar"></label>

        <div className="flex min-h-full flex-col bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 p-2">
          <ul className="menu w-full">
            {/* MENU TITLE */}
            <li className="text-md font-bold is-drawer-close:hidden px-3 py-2">
              MENU
            </li>

            {/* Homepage */}
            <li>
              <Link
                to="/"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Homepage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* All Deliveries */}
            <li>
              <NavLink
                to="/dashboard/my-parcels"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="All Deliveries">
                <CiDeliveryTruck className="text-2xl" />
                <span className="is-drawer-close:hidden">All Deliveries</span>
              </NavLink>
            </li>

            {/* Invoices */}
            <li>
              <NavLink
                to="/dashboard/invoices"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Invoices">
                <AiOutlineFileText className="text-2xl" />
                <span className="is-drawer-close:hidden">Invoices</span>
              </NavLink>
            </li>

            {/* Stores */}
            <li>
              <NavLink
                to="/dashboard/stores"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Stores">
                <MdOutlineStore className="text-2xl" />
                <span className="is-drawer-close:hidden">Stores</span>
              </NavLink>
            </li>

            {/* Pricing */}
            <li>
              <NavLink
                to="/dashboard/pricing"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Pricing Plan">
                <RiPriceTag3Line className="text-2xl" />
                <span className="is-drawer-close:hidden">Pricing Plan</span>
              </NavLink>
            </li>

            {/* Coverage */}
            <li>
              <NavLink
                to="/dashboard/coverage"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Coverage Area">
                <GrMapLocation className="text-2xl" />
                <span className="is-drawer-close:hidden">Coverage Area</span>
              </NavLink>
            </li>
          </ul>

          {/* GENERAL TITLE */}
          <li className="text-md font-bold is-drawer-close:hidden px-3 mt-4">
            GENERAL
          </li>

          <ul className="menu w-full">
            {/* Settings */}
            <li>
              <NavLink
                to="/dashboard/settings"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Settings">
                <CiSettings className="text-2xl" />
                <span className="is-drawer-close:hidden">Settings</span>
              </NavLink>
            </li>

            {/* Change Password */}
            <li>
              <NavLink
                to="/dashboard/change-password"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Change Password">
                <FiKey className="text-2xl" />
                <span className="is-drawer-close:hidden">Change Password</span>
              </NavLink>
            </li>

            {/* Help */}
            <li>
              <NavLink
                to="/dashboard/help"
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Help">
                <FiHelpCircle className="text-2xl" />
                <span className="is-drawer-close:hidden">Help</span>
              </NavLink>
            </li>

            {/* Logout */}
            <li>
              <button
                className={`${menuItemStyle} is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                data-tip="Logout">
                <CiLogout className="text-2xl" />
                <span className="is-drawer-close:hidden">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
