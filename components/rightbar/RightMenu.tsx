import React from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformation from "./UserInformation";
import UserMedia from "./UserMedia";
import { User as PrismaUser } from "@prisma/client";
type ExtendedUser = PrismaUser & {
  _count: {
    followers: number;
    posts: number;
    followings: number;
  };
};

type ProfileProps = {
  user?: ExtendedUser | null | undefined;
};

function RightMenu({ user }: ProfileProps) {
  return (
    <div className="flex flex-col gap-6">
      {user ? <UserInformation user={user} /> : null}
      {user ? <UserMedia /> : null}
      {/* friend requests */}
      <FriendRequest />
      {/* birthdays */}
      <Birthdays />
      {/*Sponsored ADs*/}
      <Ad />
    </div>
  );
}

export default RightMenu;
