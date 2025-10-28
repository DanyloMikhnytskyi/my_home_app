import type { Product } from "@/data/productsMock";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  TypographyH3,
  TypographyP,
  TypographyList,
  TypographyListItem,
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
      <TypographyList className=" flex  flex-col mt-auto">
        {Object.entries(meta).map(([key, value]) => (
          <TypographyListItem key={key}>
            <span className="font-medium capitalize">{key}:</span> {value}
          </TypographyListItem>
        ))}
      </TypographyList>

      <TypographyP className="mt-auto text-gray-600 text-center mb-2">
        Count: {count || 0}
      </TypographyP>

      <div className="flex gap-2 justify-center ">
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
