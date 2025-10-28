// src/pages/Products.tsx
import React, { useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => 
    products.filter(p => p.title.toLowerCase().includes(search.toLowerCase())), 
    [search, products]
  );

  if (!products.length) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <input 
        type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 transition-colors duration-300"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
