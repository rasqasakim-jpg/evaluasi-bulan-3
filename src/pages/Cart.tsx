import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";

const Cart: React.FC = () => {
  const { cartItems, totalPrice, removeFromCart, clearCart, updateQuantity } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("⚠️ Kamu harus login dulu sebelum checkout!");
      navigate("/login");
      return;
    }
    clearCart(); // Mengosongkan keranjang
    alert("🎉 Barang berhasil di checkout!"); // Menampilkan notifikasi
    navigate("/products"); // Kembali ke halaman produk
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">🛒 Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">Keranjang kamu kosong 😢</p>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-4 transition-colors duration-300">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    ${item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-3 border">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t font-semibold text-lg">
            <p>Total:</p>
            <p>${totalPrice.toLocaleString()}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Checkout Sekarang
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
