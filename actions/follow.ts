"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const acceptFollow = async (senderId: string, receiverId: string) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("user is not authanticated");
  }
  try {
    await prisma.followRequest.delete({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });
    await prisma.follower.create({
      data: {
        followerId: receiverId,
        followingId: senderId,
      },
    });

    return { message: "Follow request accepted successfully" };
  } catch (error) {
    return { error: "something went wrong" };
  }
};

export const rejectFollow = async (senderId: string, receiverId: string) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("user is not authanticated");
  }
  try {
    await prisma.followRequest.delete({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });
    return { message: "Follow request rejected successfully" };
  } catch (error) {
    return { error: "something went wrong" };
  }
};
