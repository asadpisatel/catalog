"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { findProductById } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const router = useRouter();

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

  function handleClick() {
    router.back();
  }

  if (!product) return <p className="text-center mt-8">Product not found.</p>;

  return (
    <>
    <Button onClick={handleClick} className="mt-10 cursor-pointer">
    <ChevronLeft />
    </Button>
    <div className="flex items-center justify-center flex-wrap p-4">
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-green-600 my-8">
          ${product.price}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
    </>
    
  );
};

export default ProductPage;
