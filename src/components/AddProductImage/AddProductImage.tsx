import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";

export function AddProductImage() {
  let register: any = undefined;
  let errors: any = undefined;

  try {
    const ctx = useFormContext();
    register = ctx?.register;
    errors = ctx?.formState?.errors;
  } catch (errors) {}

  return (
    <div>
      <Label htmlFor="image">Image URL</Label>
      <Input
        id="image"
        {...register("image")}
        placeholder="https://example.com/image.jpg"
      />
      {errors.image && (
        <TypographyP className="text-sm text-red-600 mt-1">
          {errors.image.message}
        </TypographyP>
      )}
    </div>
  );
}
