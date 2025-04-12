"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <Card
      className="w-full max-w-sm p-4 m-auto shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleClick}>
      <CardHeader>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
