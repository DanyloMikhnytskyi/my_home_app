import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/productsMock";
import type { Counts } from "@/hooks/useCart";

type TotalsProps = {
  products: Product[];
  counts: Counts;
};

const Totals: FC<TotalsProps> = ({ products, counts }) => {
  const totalCalories = products.reduce((acc, { id, meta: { calories } }) => {
    const count = counts[id] || 0;
    return acc + calories * count;
  }, 0);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Totals</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Badge>Total Calories: {totalCalories} kcal</Badge>
      </CardContent>
    </Card>
  );
};

export default Totals;
