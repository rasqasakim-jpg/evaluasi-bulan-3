// src/components/ProductCard.tsx
import React from "react";
import type { Product } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: number) => void;
  isAdmin?: boolean;
}

const ProductCard: React.FC<Props> = ({ product, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-2" />
      <h3 className="font-semibold text-center">{product.title}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <Link to={`/products/${product.id}`} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Detail</Link>
      
      {isAdmin && (
        <div className="mt-2 flex gap-2">
          <button onClick={() => onEdit?.(product)} className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500">Edit</button>
          <button onClick={() => onDelete?.(product.id)} className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 text-white">Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
