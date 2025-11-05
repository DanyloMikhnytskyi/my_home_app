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
  const [productIdToDelete, setProductIdToDelete] = useState<number>();

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
          <ProductItem
            key={product.id}
            {...product}
            onDelete={() => setProductIdToDelete(product.id)}
          />
        ))}
      </div>

      <AddProductDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        onAddProduct={(product) => setProducts((prev) => [...prev, product])}
      />

      <DeleteProductDialog
        isOpen={productIdToDelete !== undefined}
        onCancel={() => setProductIdToDelete(undefined)}
        onConfirm={() => {
          if (productIdToDelete !== undefined) {
            setProducts((prev) =>
              prev.filter((product) => product.id !== productIdToDelete)
            );
            setProductIdToDelete(undefined);
          }
        }}
        productToDeleteTitle={
          products.find((p) => p.id === productIdToDelete)?.title
        }
      />
    </div>
  );
}
