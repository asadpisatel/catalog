import { Product } from "@/types/product";

export function findProductById(
  products: Product[],
  id: string
): Product | undefined {
  return products.find((product) => product.id === Number(id));
}
