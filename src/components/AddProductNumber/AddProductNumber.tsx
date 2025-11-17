import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";

type AddProductNumberProps = {
  name: string;
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
};

export function AddProductNumber({
  name,
  label,
  id,
  placeholder = "",
  type = "number",
}: AddProductNumberProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div>
      {label && <Label htmlFor={id || name}>{label}</Label>}

      <Input
        id={id || name}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber: type === "number" })}
      />

      {error && (
        <TypographyP className="text-sm text-red-600 mt-1">{error}</TypographyP>
      )}
    </div>
  );
}
