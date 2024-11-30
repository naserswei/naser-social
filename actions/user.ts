"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export type getUser = {
  id: string;
  username: string;
  avatar: string | null;
  cover: string | null;
  name: string | null;
  surname: string | null;
  description: string | null;
  city: string | null;
  school: string | null;
  work: string | null;
  website: string | null;
  createdAt: Date;
  _count: {
    followers: number;
    posts: number;
    followings: number;
  };
};

export const getuser = async (): Promise<getUser | { error: string }> => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("user is not authanticated");
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId as string,
      },
      include: {
        _count: {
          select: {
            followers: true,
            posts: true,
            followings: true,
          },
        },
      },
    });
    if (!user) {
      return { error: "User not found" };
    }

    return user;
  } catch (error) {
    return { error: "something went wrong" };
  }
};
