// src/components/ProductForm.tsx
import React from "react";
import type { Product } from "../contexts/ProductContext";
import { useForm } from "react-hook-form";

interface Props {
  product?: Product;
  onSubmit: (data: Product) => void;
}

const ProductForm: React.FC<Props> = ({ product, onSubmit }) => {
  const { register, handleSubmit } = useForm<Product>({ defaultValues: product });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input {...register("title")} placeholder="Title" className="p-2 border rounded" />
      <input {...register("price")} type="number" placeholder="Price" className="p-2 border rounded" />
      <input {...register("category")} placeholder="Category" className="p-2 border rounded" />
      <input {...register("image")} placeholder="Image URL" className="p-2 border rounded" />
      <textarea {...register("description")} placeholder="Description" className="p-2 border rounded" />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2">Save</button>
    </form>
  );
};

export default ProductForm;
