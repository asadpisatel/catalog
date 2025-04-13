"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const {addToCart} = useCart()

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <Card
      className="w-full max-w-sm p-4 m-auto shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
      <CardHeader onClick={handleClick}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent onClick={handleClick}>
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(product)} className="w-full mt-2 cursor-pointer">
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
