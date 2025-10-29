import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../contexts/ThemeContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, logout } = useAuth();
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 flex-shrink-0"
            onClick={closeMobileMenu}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-lg">E-Commerce</span>
                <span className="text-sm">Lite</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Produk
            </NavLink>

            {/* Admin Only: Dashboard */}
            {isLoggedIn && role === "admin" && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                    isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}

            {/* User Only: Keranjang */}
            {isLoggedIn && role === "user" && (
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                    isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Keranjang
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 min-w-[20px] h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            )}

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition text-sm font-medium"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition text-sm font-medium"
              >
                Logout
              </button>
            )}

            {/* Tombol Ganti Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded ${
                    isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded ${
                    isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded ${
                    isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/products"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded ${
                    isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Produk
              </NavLink>

              {/* Admin Only: Dashboard */}
              {isLoggedIn && role === "admin" && (
                <NavLink
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded ${
                      isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}

              {/* User Only: Keranjang */}
              {isLoggedIn && role === "user" && (
                <NavLink
                  to="/cart"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium px-2 py-2 rounded flex items-center justify-between ${
                      isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  <span>Keranjang</span>
                  {totalItems > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                      {totalItems}
                    </span>
                  )}
                </NavLink>
              )}

              {/* Auth Buttons */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition text-sm font-medium"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition text-sm font-medium"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;