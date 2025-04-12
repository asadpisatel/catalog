"use client";
import ProductCard from "@/components/productCard";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product: Product) => (
        <div key={product.id}>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Page;
