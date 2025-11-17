import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TypographyP } from "@/components/ui/typography";

export function AddProductDescription() {
  let register: any = undefined;
  let errors: any = undefined;

  try {
    const ctx = useFormContext();
    register = ctx?.register;
    errors = ctx?.formState?.errors;
  } catch (errors) {}

  return (
    <div>
      <Label htmlFor="description">Description *</Label>
      <Textarea
        id="description"
        {...register("description")}
        placeholder="Product description"
      />
      {errors.description && (
        <TypographyP className="text-sm text-red-600 mt-1">
          {errors.description.message}
        </TypographyP>
      )}
    </div>
  );
}
