import { useState } from "react";
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    fiber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (!formData.title || !formData.description || formData.calories === "") {
      return;
    }

    const caloriesNum = Number(formData.calories);

    if (!Number.isFinite(caloriesNum) || caloriesNum <= 0) {
      return;
    }

    const optionalNumericFields = ["carbs", "protein", "fat", "fiber"] as const;

    for (const key of optionalNumericFields) {
      const val = formData[key];

      if (val !== "") {
        const num = Number(val);

        if (!Number.isFinite(num) || num <= 0) {
          return;
        }
      }
    }

    const newProduct: Product = {
      id: new Date().getTime(),
      title: formData.title,
      description: formData.description,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      meta: {
        calories: caloriesNum,
        carbs: formData.carbs ? Number(formData.carbs) : undefined,
        protein: formData.protein ? Number(formData.protein) : undefined,
        fat: formData.fat ? Number(formData.fat) : undefined,
        fiber: formData.fiber ? Number(formData.fiber) : undefined,
      },
    };

    onAddProduct(newProduct);
    setIsDialogOpen(false);
    setFormData({
      title: "",
      description: "",
      image: "",
      calories: "",
      carbs: "",
      protein: "",
      fat: "",
      fiber: "",
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Product name"
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Product description"
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calories">Calories *</Label>
              <Input
                id="calories"
                name="calories"
                type="number"
                value={formData.calories}
                onChange={handleInputChange}
                placeholder="160"
              />
            </div>

            <div>
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                name="carbs"
                type="number"
                value={formData.carbs}
                onChange={handleInputChange}
                placeholder="9"
              />
            </div>

            <div>
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                name="protein"
                type="number"
                value={formData.protein}
                onChange={handleInputChange}
                placeholder="2"
              />
            </div>

            <div>
              <Label htmlFor="fat">Fat (g)</Label>
              <Input
                id="fat"
                name="fat"
                type="number"
                value={formData.fat}
                onChange={handleInputChange}
                placeholder="15"
              />
            </div>

            <div>
              <Label htmlFor="fiber">Fiber (g)</Label>
              <Input
                id="fiber"
                name="fiber"
                type="number"
                value={formData.fiber}
                onChange={handleInputChange}
                placeholder="7"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddProduct}>Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
