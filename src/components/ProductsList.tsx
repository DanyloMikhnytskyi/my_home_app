import { ProductItem } from "@/components/ProductsItem";
import { TypographyH2 } from "@/components/ui/typography";
import { productsMock } from "@/data/productsMock";
import type { Product } from "@/data/productsMock";
import { useCart } from "@/hooks/useCart";

export function ProductsList() {
  const products: Product[] = productsMock;
  const { counts, addProduct, removeProduct } = useCart();

  return (
    <section className="p-6">
      <TypographyH2 className="mb-4">Products</TypographyH2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            onAddClick={addProduct}
            onRemoveClick={removeProduct}
            count={counts[product.id] || 0}
          />
        ))}
      </div>
    </section>
  );
}
