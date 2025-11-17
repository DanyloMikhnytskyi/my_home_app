import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";

export function AddProductTitle() {
  let register: any = undefined;
  let errors: any = undefined;

  try {
    const ctx = useFormContext();
    register = ctx?.register;
    errors = ctx?.formState?.errors;
  } catch (errors) {}

  return (
    <div>
      <Label htmlFor="title">Title *</Label>
      <Input
        id="title"
        {...(register ? register("title") : {})}
        placeholder="Product name"
      />
      {errors?.title && (
        <TypographyP className="text-sm text-red-600 mt-1">
          {errors.title.message}
        </TypographyP>
      )}
    </div>
  );
}
