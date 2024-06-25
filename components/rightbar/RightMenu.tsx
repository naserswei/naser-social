import React from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "./Ad";

function RightMenu() {
  return (
    <div className="flex flex-col gap-6">
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
