import React from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformation from "./UserInformation";

function RightMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "profile" ? <UserInformation /> : null}
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
