import { type PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  productFormSchema,
  type ProductFormValues,
} from "@/components/AddProductFrom/AddProductFrom.schema";

export interface AppProductFromProps {
  onSubmit: (data: ProductFormValues) => void;
}

export const AppProductFrom = ({
  children,
  onSubmit,
}: PropsWithChildren<AppProductFromProps>) => {
  const methods = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      calories: 0,
      carbs: undefined,
      protein: undefined,
      fat: undefined,
      fiber: undefined,
    } satisfies ProductFormValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
