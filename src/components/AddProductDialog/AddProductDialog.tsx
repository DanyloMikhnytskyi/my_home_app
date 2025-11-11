import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
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

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? "" : v))
    .refine((val) => val === "" || /^https?:\/\//.test(val), {
      message: "Image must be a valid URL or empty",
    }),

  calories: z.preprocess((val) => {
    if (typeof val === "string") return val.trim();
    return val;
  }, z.coerce.number().positive({ message: "Calories must be a positive number" })),

  carbs: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    if (typeof val === "string") return val.trim();
    return val;
  }, z.coerce.number().positive().optional()),

  protein: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    if (typeof val === "string") return val.trim();
    return val;
  }, z.coerce.number().positive().optional()),

  fat: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    if (typeof val === "string") return val.trim();
    return val;
  }, z.coerce.number().positive().optional()),

  fiber: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    if (typeof val === "string") return val.trim();
    return val;
  }, z.coerce.number().positive().optional()),
});

type FormValues = z.infer<typeof schema>;

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
  const resolver = zodResolver(schema) as Resolver<FormValues, any>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormValues>({
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
    if (!isDialogOpen) {
      reset();
    }
  }, [isDialogOpen, reset]);

  const onSubmit = (values: FormValues) => {
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Product name"
            />
            {errors.title && (
              <p className="text-sm text-red-600 mt-1">
                {errors.title.message}
              </p>
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
              <p className="text-sm text-red-600 mt-1">
                {errors.description.message}
              </p>
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
              <p className="text-sm text-red-600 mt-1">
                {errors.image.message}
              </p>
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
                <p className="text-sm text-red-600 mt-1">
                  {errors.calories.message}
                </p>
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
                <p className="text-sm text-red-600 mt-1">
                  {errors.carbs.message}
                </p>
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
                <p className="text-sm text-red-600 mt-1">
                  {errors.protein.message}
                </p>
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
                <p className="text-sm text-red-600 mt-1">
                  {errors.fat.message}
                </p>
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
                <p className="text-sm text-red-600 mt-1">
                  {errors.fiber.message}
                </p>
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
        </form>
      </DialogContent>
    </Dialog>
  );
};
