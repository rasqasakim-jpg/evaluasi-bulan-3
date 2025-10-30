// src/pages/Dashboard.tsx
import React, { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import type { Product } from "../contexts/ProductContext";
import ProductForm from "../components/ProductForm";

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = useCallback((product: Product) => {
    setEditing(product);
    setShowForm(true);
    // Scroll ke atas agar form terlihat
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Cek apakah ada state 'productToEdit' saat komponen dimuat
  useEffect(() => {
    const productToEdit = location.state?.productToEdit;
    if (productToEdit) {
      handleEdit(productToEdit);
      // Hapus state dari lokasi agar tidak terpicu lagi saat navigasi
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]); // Hanya jalankan saat location.state berubah

  const handleDelete = useCallback((id: number) => deleteProduct(id), [deleteProduct]);

  const handleSubmit = (data: Product) => {
    if (editing) updateProduct({ ...editing, ...data });
    else addProduct({ ...data, id: Date.now() });
    setShowForm(false);
    setEditing(null);
  };

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button
          onClick={() => {
            setEditing(null); // Pastikan mode edit mati
            setShowForm(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >Tambah Produk</button>
      </div>

      {showForm && (
        <div className="mb-4 p-4 border rounded shadow bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <ProductForm product={editing ?? undefined} onSubmit={handleSubmit} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...products].reverse().map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
            isAdmin 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
