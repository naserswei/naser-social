"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const createComment = async (formData: FormData, postid: number) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("user is not authanticated");
  }
  const desc = formData.get("desc") as string;
  try {
    await prisma.comment.create({
      data: {
        userId: userId as string,
        postId: postid,
        desc: desc,
      },
    });
    return { message: "post has been created secssfully" };
  } catch (error) {
    return { error: "falied to create post" };
  }
};
