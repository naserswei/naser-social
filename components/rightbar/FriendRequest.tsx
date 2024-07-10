import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import Link from "next/link";
import FreindreqInteraction from "../FreindreqInteraction";

async function FriendRequest() {
  const { userId } = auth();
  if (!userId) return null;
  const request = await prisma.followRequest.findMany({
    where: {
      receiverId: userId as string,
    },
    include: {
      sender: true,
    },
  });

  return (
    <div className=" bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      <div className="flex justify-between">
        <span className=" text-gray-500">Friend Requests</span>
        <span className="text-blue-500">See all</span>
      </div>
      {request.length !== 0 ? (
        request.map((req) => (
          <div
            key={req.id}
            className="flex justify-between items-center hover:bg-slate-100 transition-colors rounded-md p-2"
          >
            <Link
              href={`/profile/${req.senderId}`}
              className="flex gap-2 items-center"
            >
              <Image
                className="rounded-full object-cover w-12 h-12"
                src={req.sender.avatar || "/img/noAvatar.png"}
                height={48}
                width={48}
                alt="stories"
              />
              <span className=" font-bold">{req.sender.username}</span>
            </Link>
            <FreindreqInteraction req={req} />
          </div>
        ))
      ) : (
        <div>No Friend Requests yet</div>
      )}
    </div>
  );
}

export default FriendRequest;
