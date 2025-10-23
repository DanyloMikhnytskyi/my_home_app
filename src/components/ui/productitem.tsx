import type { Product } from "@/data/productsMock";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const { title, description, meta, image, id } = product;
  const { counts, addProduct, removeProduct } = useCart();

  return (
    <article
      key={id}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col"
      role="article"
      aria-labelledby={`product-${id}-title`}
    >
      <div className="h-40 w-full mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/400x300?text=no+image";
          }}
        />
      </div>

      <h3 id={`product-${id}-title`} className="text-lg font-semibold mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

      <dl className="flex flex-wrap gap-2 mt-auto">
        {Object.entries(meta).map(([k, v]) => (
          <div
            key={k}
            className="px-2 py-1 bg-gray-50 border rounded-md text-xs text-gray-700"
            title={k}
          >
            <dt className="font-medium">{k}</dt>
            <dd className="text-sm">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="text-count text-gray-600 mb-3 font-medium text-center">
        Count: {counts[id] || 0}
      </p>

      <div className="flex gap-2 justify-center">
        <Button variant="outline" onClick={() => addProduct(id)}>
          Add
        </Button>
        <Button variant="outline" onClick={() => removeProduct(id)}>
          Remove
        </Button>
      </div>

      <div className="text-xs text-gray-500 mt-2 text-center">ID: {id}</div>
    </article>
  );
}
