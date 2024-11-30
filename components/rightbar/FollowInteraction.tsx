"use client";

import { sendfollow } from "@/actions/follow";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function FollowInteraction({
  reciever,
  sender,
}: {
  reciever: string;
  sender: string;
}) {
  const router = useRouter();
  const [isfollow, setisfollow] = useState(false);
  //TODO:fix the follow button after refresh it changes
  const handleFollow = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reciever && sender) {
      const res = await sendfollow(reciever, sender);
      router.refresh();
      setisfollow((prev) => !prev);
      if (res.message) {
        toast.success(res.message);
      } else {
        toast.error(res.error);
      }
    }
  };

  return (
    <form onSubmit={handleFollow}>
      <button
        type="submit"
        className=" bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {isfollow ? "request send" : "Follow"}
      </button>
    </form>
  );
}

export default FollowInteraction;
