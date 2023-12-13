import { revalidateTag } from "next/cache";

import prisma from "@/prisma/db";
import { User } from "@/components/User";
import { Input } from "@/components/Input";
import { getUser } from "@/services/getUser";
import { z } from "zod";
import { validateFormData } from "@/services/validateFormData";
import { SubmitButton } from "@/components/SubmitButton";

export default async function Home() {
  const user = await getUser();
  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData) => {
        "use server";
        const { name, email, error } = validateFormData(
          formData,
          z.object({
            name: z.string(),
            email: z.string(),
            error: z.literal("on").optional(),
          })
        );

        if (error) {
          throw new Error("Invalid form data");
        }

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            email,
            name,
          },
        });

        revalidateTag("user");
      }}
    >
      <Input
        defaultValue={user.name ?? ""}
        label="Name (Must be a John)"
        name="name"
        id="name"
        required
        pattern="John [A-Za-z]+"
      />
      <Input
        required
        defaultValue={user.email}
        label="Email"
        type="email"
        name="email"
        id="email"
      />
      <Input
        id="error"
        name="error"
        type="checkbox"
        label="Error on server"
        className="ring-0"
      />
      <SubmitButton />
    </form>
  );
}
