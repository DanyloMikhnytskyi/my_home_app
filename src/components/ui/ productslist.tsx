import ProductItem from "@/components/ui/productitem";
import { productsMock } from "@/data/productsMock";

export default function ProductsList() {
  const products = productsMock;

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
