import React from "react";
import LeftNav from "./LeftNav";
import ProfileCard from "./ProfileCard";

function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" ? <ProfileCard /> : null}
      <LeftNav />
    </div>
  );
}

export default LeftMenu;
