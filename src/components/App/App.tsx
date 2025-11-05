import { useState } from "react";
import { Products } from "@/components/Products";
import { ProductsList } from "@/components/ProductsList";
import { Sidebar } from "@/components/Sidebar";

type View = "products" | "calculator";

export function App() {
  const [view, setView] = useState<View>("products");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <aside className="w-0 md:w-64">
            <Sidebar currentView={view} onChangeView={(v) => setView(v)} />
          </aside>

          <main className="flex-1 p-6">
            {view === "products" && <Products />}

            {view === "calculator" && <ProductsList />}
          </main>
        </div>
      </div>
    </div>
  );
}
