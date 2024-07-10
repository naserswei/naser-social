import Profile from "@/components/Profile";

import PostFeed from "@/components/center/PostFeed";

import LeftMenu from "@/components/leftbar/LeftMenu";
import RightMenu from "@/components/rightbar/RightMenu";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findFirst({
    where: {
      id: params.id as string,
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
    notFound();
  }
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className=" flex flex-col gap-6">
          <Profile user={user} />
          <PostFeed user={user} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </main>
  );
}

export default page;
