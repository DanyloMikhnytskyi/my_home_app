import { useState } from "react";
import { productsMock } from "@/data/productsMock";
import type { Product } from "@/data/productsMock";
import { ProductItem } from "@/components/ProductsItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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

export function Products() {
  const [products, setProducts] = useState<Product[]>(productsMock);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const handleDelete = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.title}"?`
    );

    if (confirmed) {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== productId)
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    // Validate required fields
    if (!formData.title || !formData.description || !formData.calories) {
      alert("Please fill in at least title, description, and calories");
      return;
    }

    const newProduct: Product = {
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      title: formData.title,
      description: formData.description,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      meta: {
        calories: Number(formData.calories),
        carbs: formData.carbs ? Number(formData.carbs) : undefined,
        protein: formData.protein ? Number(formData.protein) : undefined,
        fat: formData.fat ? Number(formData.fat) : undefined,
        fiber: formData.fiber ? Number(formData.fiber) : undefined,
      },
    };

    setProducts((prev) => [...prev, newProduct]);
    setIsDialogOpen(false);
    // Reset form
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button className="gap-2" onClick={() => setIsDialogOpen(true)}>
          <Plus className="h-4 w-4" />
          Add new product
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} onDelete={handleDelete} />
        ))}
      </div>

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
    </div>
  );
}
