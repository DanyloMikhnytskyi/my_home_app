import { ProductsList } from "@/components/ProductsList";

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">My KBJU App</div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <ProductsList />
      </main>
    </div>
  );
}
