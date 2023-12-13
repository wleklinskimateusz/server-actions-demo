import { unstable_cache as cache } from "next/cache";
import prisma from "@/prisma/db";
import { getUser } from "@/services/getUser";

export const User = async () => {
  const user = await getUser();
  return (
    <div className="p-2 h-fit m-2 shadow rounded flex flex-col">
      <span className="font-bold">{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
};
