import { useFormContext } from "react-hook-form";
import { type ProductFormValues } from "@/components/AddProductFrom/AddProductFrom.schema";
import { Button } from "../ui/button";

export function AddProductButton() {
  const {
    formState: { isSubmitting, isDirty },
  } = useFormContext<ProductFormValues>();

  return (
    <Button type="submit" disabled={isSubmitting || !isDirty}>
      Add Product
    </Button>
  );
}
