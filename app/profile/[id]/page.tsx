import Profile from "@/components/Profile";

import PostFeed from "@/components/center/PostFeed";

import LeftMenu from "@/components/leftbar/LeftMenu";
import RightMenu from "@/components/rightbar/RightMenu";
import React from "react";

function page() {
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className=" flex flex-col gap-6">
          <Profile />
          <PostFeed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu type="profile" />
      </div>
    </main>
  );
}

export default page;
