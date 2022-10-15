import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/nub_logo_276x80.png";
import Icons from "../Helpers/Icons";

export default function MobileSidebar({ sidebar, action }) {
  return (
    <div className="w-full h-full">
      {/* logo-area */}
      <div className="w-full flex items-center transition-all duration-300 relative ease-in-out mb-14">
        <div className="sidebar-logo enter">
          <NavLink
            className="nav-item flex items-center justify-start space-x-3.5"
            to="/"
          >
            <img src={logo} alt="nft" onClick={action} />
          </NavLink>
        </div>
      </div>
      {/* menu and settings item */}
      <div className="menu-setting-items mb-11">
        {/* menus item */}
        <div className="menu-item transition-all duration-300 ease-in-out mb-14">
          <div className="heading mb-5 active">
            <h1 className="title text-xl font-bold text-purple">Menu</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <NavLink
                  className="nav-item flex items-center justify-start space-x-3.5"
                  to="/"
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="dashboard" />
                  </span>
                  <span className="item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium active flex-1">
                    Market Overview
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/dashboard"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="star" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/lend"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="star" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Lend
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/borrow"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="star" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Borrow
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-item">
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Settings</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <NavLink
                  to="/profile"
                  className="nav-item flex items-center justify-start space-x-3.5"
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="people-two" />
                  </span>
                  <span className="item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium active flex-1">
                    My Profile
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/settings"
                  className="nav-item flex items-center justify-start space-x-3.5"
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple rounded-full text-dark-gray">
                    <Icons name="setting" />
                  </span>
                  <span className="item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium active flex-1">
                    Settings
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
