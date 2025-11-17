import { useEffect } from "react";
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Product } from "@/data/productsMock";
import { TypographyP } from "../ui/typography";

import {
  productFormSchema,
  type ProductFormValues,
} from "@/components/AppProductFrom/AppProductFrom.schema";

import { AppProductFrom } from "@/components/AppProductFrom";

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
  const resolver = zodResolver(productFormSchema) as Resolver<
    ProductFormValues,
    any
  >;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductFormValues>({
    resolver,
    defaultValues: {
      title: "",
      description: "",
      image: "",
      calories: 0,
      carbs: undefined,
      protein: undefined,
      fat: undefined,
      fiber: undefined,
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

        <AppProductFrom onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Product name"
            />
            {errors.title && (
              <TypographyP className="text-sm text-red-600 mt-1">
                {errors.title.message}
              </TypographyP>
            )}
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Product description"
            />
            {errors.description && (
              <TypographyP className="text-sm text-red-600 mt-1">
                {errors.description.message}
              </TypographyP>
            )}
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              {...register("image")}
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && (
              <TypographyP className="text-sm text-red-600 mt-1">
                {errors.image.message}
              </TypographyP>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calories">Calories *</Label>
              <Input
                id="calories"
                {...register("calories", { valueAsNumber: true })}
                type="number"
                placeholder="160"
              />
              {errors.calories && (
                <TypographyP className="text-sm text-red-600 mt-1">
                  {errors.calories.message}
                </TypographyP>
              )}
            </div>

            <div>
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                {...register("carbs")}
                type="number"
                placeholder="9"
              />
              {errors.carbs && (
                <TypographyP className="text-sm text-red-600 mt-1">
                  {errors.carbs.message}
                </TypographyP>
              )}
            </div>

            <div>
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                {...register("protein")}
                type="number"
                placeholder="2"
              />
              {errors.protein && (
                <TypographyP className="text-sm text-red-600 mt-1">
                  {errors.protein.message}
                </TypographyP>
              )}
            </div>

            <div>
              <Label htmlFor="fat">Fat (g)</Label>
              <Input
                id="fat"
                {...register("fat")}
                type="number"
                placeholder="15"
              />
              {errors.fat && (
                <TypographyP className="text-sm text-red-600 mt-1">
                  {errors.fat.message}
                </TypographyP>
              )}
            </div>

            <div>
              <Label htmlFor="fiber">Fiber (g)</Label>
              <Input
                id="fiber"
                {...register("fiber")}
                type="number"
                placeholder="7"
              />
              {errors.fiber && (
                <TypographyP className="text-sm text-red-600 mt-1">
                  {errors.fiber.message}
                </TypographyP>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !isDirty}>
              Add Product
            </Button>
          </DialogFooter>
        </AppProductFrom>
      </DialogContent>
    </Dialog>
  );
};
