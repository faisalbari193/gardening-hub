import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useTheme } from "../Provider/ThemeContext";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) return null;

  return (
    <div className="navbar flex flex-wrap items-center justify-between bg-gradient-to-l from-green-500 to-green-300 shadow-sm px-4 py-2 text-black dark:text-white">
      <div className="flex items-center gap-3">
        <img
          src="https://img.icons8.com/?size=100&id=ymauFo9rycvJ&format=png&color=000000"
          alt="Logo"
          className="w-10"
        />
        <h2 className="text-xl font-bold">Gardener's Hub</h2>
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <button onClick={toggleTheme} className="btn btn-sm">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link
              to="/"
              className="text-xl font-semibold flex items-center h-full"
            >
              Home
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/dashboard"
                className="text-xl font-semibold flex items-center h-full"
              >
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/browse-tips"
              className="text-xl font-semibold flex items-center h-full"
            >
              Browse Tips
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="text-xl font-semibold flex items-center h-full"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs"
              className="text-xl font-semibold flex items-center h-full"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-xl font-semibold flex items-center h-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="btn btn-sm hidden lg:inline-block"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {!user ? (
          <>
            <Link to="/signin">
              <button className="btn btn-outline btn-sm">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline btn-sm">Sign Up</button>
            </Link>
          </>
        ) : (
          <div className="relative">
            <img
              src={
                user.photoURL || "https://i.ibb.co/RN2qD3p/default-avatar.png"
              }
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            {hovered && !dropdownOpen && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black text-sm rounded shadow px-2 py-1 z-20">
                {user.displayName || "No Name"}
              </div>
            )}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg p-2 z-30">
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:bg-red-100 px-3 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full lg:hidden mt-4">
          <ul className="menu menu-vertical bg-white text-black rounded-box p-4 shadow">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/share-tips">Share Tips</Link>
                </li>
                <li>
                  <Link to="/my-tips">My Tips</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/browse-tips">Browse Tips</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
