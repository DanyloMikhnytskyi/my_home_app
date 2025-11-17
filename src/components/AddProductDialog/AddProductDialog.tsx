import { useEffect } from "react";
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  productFormSchema,
  type ProductFormValues,
} from "@/components/AddProductFrom/AddProductFrom.schema";
import type { Product } from "@/data/productsMock";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  AppProductFrom,
  AddProductTitle,
  AddProductDescription,
  AddProductImage,
  AddProductNumber,
} from "@/components/AddProductFrom";
interface AddProductDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  onAddProduct: (product: Product) => void;
}

export const AddProductDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  onAddProduct,
}: AddProductDialogProps) => {
  const resolver = zodResolver(
    productFormSchema
  ) as Resolver<ProductFormValues>;

  const {
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<ProductFormValues>({
    resolver,
    defaultValues: {
      title: "",
      description: "",
      image: "",
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
    },
  });

  useEffect(() => {
    if (!isDialogOpen) reset();
  }, [isDialogOpen, reset]);

  const onSubmit: SubmitHandler<ProductFormValues> = (values) => {
    const newProduct: Product = {
      id: new Date().getTime(),
      title: values.title,
      description: values.description,
      image:
        values.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      meta: {
        calories: values.calories,
        carbs: values.carbs,
        protein: values.protein,
        fat: values.fat,
        fiber: values.fiber,
      },
    };

    onAddProduct(newProduct);
    setIsDialogOpen(false);
    reset();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <AppProductFrom key={String(isDialogOpen)} onSubmit={onSubmit}>
          <AddProductTitle />
          <AddProductDescription />
          <AddProductImage />

          <div className="grid grid-cols-2 gap-4">
            {(
              [
                { name: "calories", label: "Calories *", placeholder: "160" },
                { name: "carbs", label: "Carbs (g)", placeholder: "9" },
                { name: "protein", label: "Protein (g)", placeholder: "2" },
                { name: "fat", label: "Fat (g)", placeholder: "15" },
                { name: "fiber", label: "Fiber (g)", placeholder: "7" },
              ] as const
            ).map((f) => (
              <AddProductNumber
                key={f.name}
                name={f.name}
                label={f.label}
                placeholder={f.placeholder}
              />
            ))}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || isDirty}>
              Add Product
            </Button>
          </DialogFooter>
        </AppProductFrom>
      </DialogContent>
    </Dialog>
  );
};
