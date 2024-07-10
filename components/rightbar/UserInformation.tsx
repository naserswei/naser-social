import Image from "next/image";
import Link from "next/link";
import React from "react";

import { User as PrismaUser } from "@prisma/client";
import { formatDate } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

type ExtendedUser = PrismaUser & {
  _count: {
    followers: number;
    posts: number;
    followings: number;
  };
};

type ProfileProps = {
  user: ExtendedUser | null;
};

async function UserInformation({ user }: ProfileProps) {
  const { userId } = auth();
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="text-gray-500 font-medium">User information</span>
        {user?.id === userId && (
          <Link className=" text-blue-500" href="/">
            Update all
          </Link>
        )}
      </div>
      {/* username */}
      <div className="flex gap-2">
        <h1 className=" font-bold text-xl">{user?.username}</h1>
        <span className="text-gray-500">@swei</span>
      </div>
      {/* bio text */}
      <div>
        <p className="text-gray-500 font-normal">{user?.description}</p>
      </div>
      {/* more information */}
      {user?.city ? (
        <div className="flex gap-2">
          <Image src="/img/map.png" width={20} height={20} alt="map" />
          <p className="text-gray-400">
            Living in
            <span className="ml-1 text-gray-600 font-semibold">
              {user.city}
            </span>
          </p>
        </div>
      ) : null}
      {user?.school ? (
        <div className="flex gap-2">
          <Image src="/img/School.png" width={20} height={20} alt="School" />
          <p className="text-gray-400">
            Went to
            <span className="ml-1 text-gray-600 font-semibold">
              {user.school}
            </span>
          </p>
        </div>
      ) : null}

      {user?.work ? (
        <div className="flex gap-2">
          <Image src="/img/work.png" width={20} height={20} alt="work" />
          <p className="text-gray-400">
            Works at
            <span className="ml-1 text-gray-600 font-semibold">
              {user.work}
            </span>
          </p>
        </div>
      ) : null}

      <div className="flex justify-between">
        <span className="flex gap-1 font-medium">
          <Image src="/img/link.png" width={20} height={20} alt="link" />
          <p className=" text-blue-500">lama.dev</p>
        </span>
        <p className="flex gap-1 items-center">
          <Image src="/img/date.png" width={20} height={20} alt="link" />
          <span className=" text-xs">joined {formatDate(user?.createdAt)}</span>
        </p>
      </div>
      <div>
        <button className=" bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-700 transition-colors">
          Follow
        </button>
      </div>
    </div>
  );
}

export default UserInformation;
