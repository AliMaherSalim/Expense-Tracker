import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl text-white font-bold">Expense Tracker</span>
        </Link>

        <div className="hidden md:flex space-x-6 ">
          <Link to="/" className="nav-link  ">
            Home
          </Link>
          <Link to="/add-expense" className="nav-link">
            Add Expense
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          {menuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-700 py-3 transition-all duration-300">
          <Link to="/" className="block text-center py-2 hover:bg-blue-800">
            Home
          </Link>
          <Link
            to="/add-expense"
            className="block text-center py-2 hover:bg-blue-800">
            Add Expense
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
