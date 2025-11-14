import { z } from "zod";
const trimIfString = (val: unknown) =>
  typeof val === "string" ? val.trim() : val;

export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),

  description: z.string().min(1, "Description is required"),

  image: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? "" : v))
    .refine((val) => val === "" || /^https?:\/\//.test(val), {
      message: "Image must be a valid URL or empty",
    }),

  calories: z.preprocess(
    (val) => trimIfString(val),
    z.coerce
      .number()
      .positive({ message: "Calories must be a positive number" })
  ),

  carbs: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    return trimIfString(val);
  }, z.coerce.number().positive().optional()),

  protein: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    return trimIfString(val);
  }, z.coerce.number().positive().optional()),

  fat: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    return trimIfString(val);
  }, z.coerce.number().positive().optional()),

  fiber: z.preprocess((val) => {
    if (val === "" || val === undefined) return undefined;
    return trimIfString(val);
  }, z.coerce.number().positive().optional()),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
