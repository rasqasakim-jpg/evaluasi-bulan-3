// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Selamat Datang di E-Commerce Lite
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Platform belanja online terpercaya dengan berbagai pilihan produk berkualitas untuk kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Jelajahi Produk
            </Link>
            <Link
              to="/about"
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 dark:border-blue-400"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Produk Berkualitas
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kami menyediakan produk-produk pilihan dengan kualitas terbaik untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Pengiriman Cepat
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistem pengiriman yang efisien memastikan produk sampai dengan cepat dan aman
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Pembayaran Aman
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transaksi aman dengan berbagai metode pembayaran yang terpercaya dan mudah
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mulai Berbelanja Sekarang!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan penawaran menarik untuk pembelian pertama Anda
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Daftar / Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;