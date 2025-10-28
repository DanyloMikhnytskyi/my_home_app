import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/productsMock";

type TotalsProps = {
  cart: Product[];
  counts: { [id: number]: number };
};

const Totals: FC<TotalsProps> = ({ cart, counts }) => {
  const totalCalories = cart.reduce((acc, product) => {
    const count = counts[product.id] || 0;
    return acc + product.meta.calories * count;
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
