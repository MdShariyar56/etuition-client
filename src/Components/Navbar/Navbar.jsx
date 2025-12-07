import React, { useState } from "react";
import { Link, NavLink } from "react-router";

import { FaHome } from "react-icons/fa";
import { IoIosBrowsers, IoIosListBox } from "react-icons/io";
import { MdPersonSearch, MdInfo, MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-[15px] font-semibold
    ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-blue-700 hover:bg-blue-600 hover:text-white hover:shadow-sm"
    }`;

  const authLinkClass = ({ isActive }) =>
    `block w-full px-4 py-2 rounded-lg border font-semibold text-center transition-all
    ${
      isActive
        ? "bg-blue-500 text-white border-blue-500"
        : "text-blue-600 border-blue-500 hover:bg-blue-600 hover:text-white"
    }`;

  return (
    <nav className="bg-base-100 shadow fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/v6ZVQxfr/Gemini-Generated-Image-x08urhx08urhx08u-1.png"
              alt="logo"
              className="w-20 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">

            <NavLink to="/" className={navLinkClass}>
              <FaHome size={20} /> Home
            </NavLink>

            <NavLink to="/tuitions" className={navLinkClass}>
              <IoIosListBox size={20} /> Tuitions
            </NavLink>

            <NavLink to="/tutors" className={navLinkClass}>
              <MdPersonSearch size={20} /> Tutors
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              <MdInfo size={20} /> About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              <MdContactMail size={20} /> Contact
            </NavLink>
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login" className={authLinkClass}>Login</NavLink>
            <NavLink to="/register" className={authLinkClass}>Signup</NavLink>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus:outline-none"
            >
              <svg
                className="w-7 h-7 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 shadow-lg">

          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <FaHome size={20} /> Home
          </NavLink>

          <NavLink to="/tuitions" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <IoIosListBox size={20} /> Tuitions
          </NavLink>

          <NavLink to="/tutors" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <MdPersonSearch size={20} /> Tutors
          </NavLink>

          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <MdInfo size={20} /> About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <MdContactMail size={20} /> Contact
          </NavLink>

          <NavLink to="/login" className={authLinkClass} onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/register" className={authLinkClass} onClick={() => setMenuOpen(false)}>
            Signup
          </NavLink>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
