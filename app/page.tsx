import { getuser } from "@/actions/user";
import AddPost from "@/components/center/AddPost";
import PostFeed from "@/components/center/PostFeed";
import Stories from "@/components/center/Stories";
import LeftMenu from "@/components/leftbar/LeftMenu";
import RightMenu from "@/components/rightbar/RightMenu";

export default async function Home() {
  const user = await getuser();
  if ("error" in user) {
    return <div>Error: {user.error}</div>; // You can show an error message or handle it differently
  }

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
