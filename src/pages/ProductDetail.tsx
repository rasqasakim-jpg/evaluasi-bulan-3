import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { role } = useAuth();
  const { addToCart } = useCart();
  const { products } = useProducts();

  // Mengambil data produk asli dari context berdasarkan ID
  const product = products.find((p) => p.id === Number(id));

  // Tampilkan loading atau pesan jika produk tidak ditemukan
  if (!product) {
    return <div className="p-6 text-center">Loading product details...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    alert("✅ Produk berhasil dimasukkan ke keranjang!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md transition-colors duration-300">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{product.description}</p>
        <p className="font-semibold text-lg text-blue-600 mb-4">
          ${product.price.toLocaleString()}
        </p>

        <div className="flex gap-3">
          {role === "admin" ? (
            <button
              onClick={() =>
                // Navigasi ke dashboard dan kirim data produk via state
                navigate("/dashboard", { state: { productToEdit: product } })
              }
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              ✏️ Edit Produk
            </button>
          ) : (
            <>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                🛒 Masukkan Keranjang
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Checkout
              </button>
            </>
          )}

          <button // Tombol kembali
            onClick={() => navigate("/products")}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 ml-auto"
          >
            🔙 Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
