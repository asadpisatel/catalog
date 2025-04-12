"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { findProductById } from "@/utils/helpers";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  async function fetchData() {
    try {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      setProduct(findProductById(data.products, String(id)));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!product) return <p className="text-center mt-8">Product not found.</p>;

  return (
    <div className="flex items-center justify-center p-4 mt-10">
      <div className="p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="max-w-md p-4">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-green-600 my-8">${product.price}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
