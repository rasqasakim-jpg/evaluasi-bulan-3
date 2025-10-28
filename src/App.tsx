// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cart from "./pages/Cart"; // 🔥 Impor komponen Cart
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import ErrorBoundary from "./components/ErrorBoundary";

// Contexts
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext"; // 🔥 Tambahkan ini

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        {/* Semua provider dibungkus di sini */}
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} /> {/* 🔥 Tambahkan rute untuk keranjang */}
                <Route path="/login" element={<Login />} />

                {/* Hanya admin yang bisa ke dashboard */}
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute allowedRoles={["admin"]}>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
