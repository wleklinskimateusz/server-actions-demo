import { z } from "zod";

export const validateFormData = <T>(
  formData: FormData,
  schema: z.ZodSchema<T>
) => {
  const entries = Array.from(formData.entries());
  return schema.parse(Object.fromEntries(entries));
};
