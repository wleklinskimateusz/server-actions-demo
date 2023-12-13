import { unstable_cache as cache } from "next/cache";
import prisma from "@/prisma/db";

export const getUser = cache(
  () => {
    const user = prisma.user.upsert({
      where: {
        id: 1,
      },
      create: {
        email: "",
        name: "",
      },
      update: {},
    });
    return user;
  },
  ["user"],
  { tags: ["user"] }
);
