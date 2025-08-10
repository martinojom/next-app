"use client";
import { usePathname } from "next/navigation";

const ProductNotFoundPage = () => {
  const pathname = usePathname();
  const productId = usePathname().split("/")[2];

  console.log("Current Pathname:", pathname);
  console.log("Product ID:", productId);

  if (!productId) return <div>Product ID is not specified</div>;
  if (parseInt(productId) > 10)
    return <div>Product with id: {productId} is not found</div>;
};

export default ProductNotFoundPage;
