import { useState } from "react";
import { productsMock } from "@/data/productsMock";
import type { Product } from "@/data/productsMock";
import { ProductItem } from "@/components/ProductsItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddProductDialog } from "@/components/AddProductDialog/AddProductDialog";
import { DeleteProductDialog } from "@/components/DeleteProductDialog/DeleteProductDialog";

export function Products() {
  const [products, setProducts] = useState<Product[]>(productsMock);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isValidationAlertOpen, setIsValidationAlertOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
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

    setProductToDelete(product);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts((prevProducts: Product[]) =>
        prevProducts.filter((p: Product) => p.id !== productToDelete.id)
      );
      setProductToDelete(null);
    }
    setIsDeleteAlertOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (!formData.title || !formData.description || formData.calories === "") {
      setIsValidationAlertOpen(true);
      return;
    }

    const caloriesNum = Number(formData.calories);
    if (!Number.isFinite(caloriesNum) || caloriesNum <= 0) {
      setIsValidationAlertOpen(true);
      return;
    }

    const optionalNumericFields = ["carbs", "protein", "fat", "fiber"] as const;
    for (const key of optionalNumericFields) {
      const val = formData[key];
      if (val !== "") {
        const num = Number(val);
        if (!Number.isFinite(num) || num <= 0) {
          setIsValidationAlertOpen(true);
          return;
        }
      }
    }

    const newProduct: Product = {
      id: Math.max(...products.map((p) => p.id), 0) + 1,
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

    setProducts((prev: Product[]) => [...prev, newProduct]);
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

      <AddProductDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleAddProduct={handleAddProduct}
      />

      <DeleteProductDialog
        isDeleteAlertOpen={isDeleteAlertOpen}
        setIsDeleteAlertOpen={setIsDeleteAlertOpen}
        productToDelete={productToDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
}
