import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../contexts/ThemeContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, logout } = useAuth();
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-blue-600 dark:text-blue-400 pr-4 transition-colors duration-300">
          {isLoggedIn ? (
            <div className="flex flex-col leading-tight text-center">
              <span className="text-base">Product</span>
              <span className="text-xs">Catalog</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-xl">🛍️</span>
              <div className="flex flex-col leading-tight">
                <span className="text-xl">E-Commerce</span>
                <span className="text-lg">Lite</span>
              </div>
            </div>
          )}
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 "
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
                `hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 "
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
                `relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 "
                }`
              }
            >
              Keranjang
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </NavLink>
          )}

          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md transition"
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
      </div>
    </nav>
  );
};

export default Navbar;
