import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";
import { type ProductFormValues } from "@/components/AddProductFrom/AddProductFrom.schema";

export function AddProductTitle() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <div>
      <Label htmlFor="title">Title *</Label>
      <Input
        id="title"
        {...(register ? register("title") : {})}
        placeholder="Product name"
      />
      {errors?.title && (
        <TypographyP className="text-sm text-red-600 mt-1">
          {errors.title.message}
        </TypographyP>
      )}
    </div>
  );
}
