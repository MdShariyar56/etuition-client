import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdPersonSearch, MdInfo, MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-[15px] font-semibold
    ${
      isActive
        ? "bg-slate-900 text-white shadow-md"
        : "text-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-sm"
    }`;

  const authLinkClass = ({ isActive }) =>
    `block w-full px-4 py-2 rounded-lg border font-semibold text-center transition-all
    ${
      isActive
        ? "bg-slate-900 text-white border-slate-900"
        : "text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white"
    }`;

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-green-100 shadow-md fixed top-0 left-0 w-full z-50 border-b border-green-200">
      <div className="max-w-9xl mx-auto px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/1f2vNxWk/edited-photo-1.png"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl text-slate-900">E-TuitionBD</h1>
          </Link>

          {/* Desktop Links */}
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

          {/* Auth Links */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login" className={authLinkClass}>Login</NavLink>
            <NavLink to="/register" className={authLinkClass}>Signup</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <svg
                className="w-7 h-7 text-green-900"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-green-50 border-t border-green-200 px-4 py-4 space-y-3 shadow-lg rounded-b-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
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
            <NavLink to="/login" className={authLinkClass} onClick={() => setMenuOpen(false)}>Login</NavLink>
            <NavLink to="/register" className={authLinkClass} onClick={() => setMenuOpen(false)}>Signup</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
