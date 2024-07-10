import AddPost from "@/components/center/AddPost";
import PostFeed from "@/components/center/PostFeed";
import Stories from "@/components/center/Stories";
import LeftMenu from "@/components/leftbar/LeftMenu";
import RightMenu from "@/components/rightbar/RightMenu";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
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
  if (!user) return null;

  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className=" flex flex-col gap-6">
          <Stories />
          <AddPost user={user} />
          <PostFeed user={user} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </main>
  );
}
