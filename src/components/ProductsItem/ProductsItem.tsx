import type { Product } from "@/data/productsMock";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

interface ProductItemProps extends Product {
  onAddClick?: (productId: number) => void;
  onRemoveClick?: (productId: number) => void;
  count?: number;
}

export function ProductItem({
  id,
  title,
  description,
  meta,
  image,
  onAddClick,
  onRemoveClick,
  count,
}: ProductItemProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col">
      <AspectRatio
        ratio={16 / 9}
        className="mb-4 bg-gray-200 rounded-lg overflow-hidden"
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </AspectRatio>

      <TypographyH3
        id={`product-${id}-title`}
        className="text-lg font-semibold mb-1"
      >
        {title}
      </TypographyH3>

      <TypographyP className="line-clamp-3 mb-3 text-gray-600">
        {description}
      </TypographyP>
      <div className="outline-none mb-4 grid grid-cols-3 gap-2 justify-items-center">
        {Object.entries(meta).map(([key, value]) => (
          <Badge
            variant="outline"
            key={key}
            className="w-full max-w-[8rem] text-center"
          >
            {key}: {value}
          </Badge>
        ))}
      </div>
      <TypographyP className="mt-auto text-gray-600 text-center mb-2">
        Count: {count || 0}
      </TypographyP>

      <div className="flex gap-2 justify-center">
        <Button variant="outline" onClick={() => onAddClick?.(id)}>
          Add
        </Button>
        <Button variant="outline" onClick={() => onRemoveClick?.(id)}>
          Remove
        </Button>
      </div>
    </article>
  );
}
