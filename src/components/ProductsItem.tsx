import type { Product } from "@/data/productsMock";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
  TypographySmall,
  TypographyList,
  TypographyListItem,
} from "@/components/ui/typography";
interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const { id, title, description, meta, image } = product;
  const { counts, addProduct, removeProduct } = useCart();

  return (
    <article
      key={id}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col"
    >
      <AspectRatio
        ratio={16 / 9}
        className="mb-4 bg-gray-100 rounded-lg overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/400x300?text=no+image";
          }}
        />
      </AspectRatio>

      <h3 id={`product-${id}-title`} className="text-lg font-semibold mb-1">
        {title}
      </h3>

      <TypographyP className="line-clamp-3 mb-3 text-gray-600">
        {description}
      </TypographyP>
      <TypographyList className="mt-auto">
        {Object.entries(meta).map(([key, value]) => (
          <TypographyListItem key={key}>
            <span className="font-medium capitalize">{key}:</span> {value}
          </TypographyListItem>
        ))}
      </TypographyList>

      <TypographyP>Count: {counts[id] || 0}</TypographyP>

      <div className="flex gap-2 justify-center">
        <Button variant="outline" onClick={() => addProduct(id)}>
          Add
        </Button>
        <Button variant="outline" onClick={() => removeProduct(id)}>
          Remove
        </Button>
      </div>
    </article>
  );
}
