"use client";
import ProductCard from "@/components/productCard";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  async function fetchData() {
    try {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 m-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Показать больше
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
