// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            E-Commerce Lite adalah platform belanja online yang berkomitmen untuk memberikan pengalaman berbelanja terbaik
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Cerita Kami
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Didirikan dengan visi untuk menghadirkan pengalaman berbelanja online yang mudah, aman, dan menyenangkan. Kami percaya bahwa setiap orang berhak mendapatkan akses ke produk berkualitas dengan harga yang terjangkau.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Sejak awal berdiri, kami telah melayani ribuan pelanggan dengan kepuasan sebagai prioritas utama. Tim kami bekerja keras untuk memastikan setiap transaksi berjalan lancar dan setiap produk memenuhi standar kualitas tinggi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dengan teknologi terkini dan layanan pelanggan yang responsif, kami terus berinovasi untuk memberikan yang terbaik bagi Anda.
              </p>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-6">🏢</div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                Platform Terpercaya
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Fokus Pelanggan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kepuasan pelanggan adalah prioritas utama kami
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Kualitas Terbaik
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hanya produk berkualitas tinggi yang kami tawarkan
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Integritas
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Transparansi dan kejujuran dalam setiap transaksi
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Inovasi
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Terus berkembang mengikuti kebutuhan pasar
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-xl text-blue-100">Pelanggan Puas</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">Produk Tersedia</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-xl text-blue-100">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;