"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

const CartPreview = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="cursor-pointer"><ShoppingCart /> ({cartItems.length})</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] p-4">
        <SheetHeader>
          <SheetTitle>Ваша корзина</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">Корзина пуста</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <Button
                  className="cursor-pointer"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <X />
                </Button>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartPreview;
