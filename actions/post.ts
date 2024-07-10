"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createpost = async (formData: FormData) => {
  const { userId } = auth();
  const desc = formData.get("desc") as string;
  try {
    const res = await prisma.post.create({
      data: {
        userId: userId as string,
        desc,
      },
    });
    return { message: "post has been created secssfully" };
  } catch (error) {
    return { error: "falied to create post" };
  }
};

export const deletepost = async (id: number) => {
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    return { message: "post deleted secssfully" };
  } catch (error) {
    return { error: "something went wrong" };
  }
};
