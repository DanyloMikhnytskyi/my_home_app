import ProductItem from "@/components/ProductsItem";
import { TypographyH2 } from "@/components/ui/typography";
import { productsMock } from "@/data/productsMock";
import type { Product } from "@/data/productsMock";

export function ProductsList() {
  const products: Product[] = productsMock;

  const renderItem = (product: Product) => {
    return <ProductItem key={product.id} product={product} />;
  };

  return (
    <section className="p-6">
      <TypographyH2 className="mb-4">Products</TypographyH2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(renderItem)}
      </div>
    </section>
  );
}
