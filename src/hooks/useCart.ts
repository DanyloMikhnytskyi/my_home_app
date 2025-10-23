import { useState } from "react";

type Counts = {
  [id: number]: number;
};

export function useCart() {
  const [counts, setCounts] = useState<Counts>({});

  const addProduct = (id: number) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] ? prev[id] + 1 : 1 }));
  };

  const removeProduct = (id: number) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] ? prev[id] - 1 : 0 }));
  };

  return { counts, addProduct, removeProduct };
}
