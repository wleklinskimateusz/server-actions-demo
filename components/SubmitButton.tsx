"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./Button";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? "Saving..." : "Save"}
    </Button>
  );
};
