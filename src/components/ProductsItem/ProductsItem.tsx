import type { Product } from "@/data/productsMock";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Trash2 } from "lucide-react";

interface ProductItemProps extends Product {
  onAddClick?: (productId: number) => void;
  onRemoveClick?: (productId: number) => void;
  onDelete?: (productId: number) => void;
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
  onDelete,
  count,
}: ProductItemProps) {
  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col relative">
      {onDelete && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 h-8 w-8 bg-white/80 hover:bg-red-50 hover:text-red-600"
          onClick={() => onDelete(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

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
      <div className="outline-none mb-4 grid grid-cols-3 gap-2 justify-items-center mt-auto">
        {Object.entries(meta).map(([key, value]) => (
          <Badge
            variant="outline"
            key={key}
            className="w-full max-w-[8rem] text-center relative"
          >
            {key}: {value}
          </Badge>
        ))}
      </div>

      {(onAddClick || onRemoveClick) && (
        <>
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
        </>
      )}
    </article>
  );
}
