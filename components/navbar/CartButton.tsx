import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

function CartButton() {
  //temp
  const numItemsInCart = 9;
  return (
    <Button
      size="icon"
      variant="ghost"
      asChild
      className="bg-primary dark:bg-primary/20 border b-1 rounded-md flex justify-center items-center relative"
    >
      <Link href="/cart" className="relative ">
        <LuShoppingCart className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
