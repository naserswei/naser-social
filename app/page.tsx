import AddPost from "@/components/center/AddPost";
import PostFeed from "@/components/center/PostFeed";
import Stories from "@/components/center/Stories";
import LeftMenu from "@/components/leftbar/LeftMenu";
import RightMenu from "@/components/rightbar/RightMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className=" w-full lg:w-[70%] xl:[50%]">
        <div className=" flex flex-col gap-6">
          <Stories />
          <AddPost />
          <PostFeed />
        </div>
      </div>
      <div className="hidden lg:block min-w-[30%]">
        <RightMenu />
      </div>
    </main>
  );
}
