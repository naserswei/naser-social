import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function ProfileCard() {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: userId as string,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-500">
      <div className=" relative w-full h-20">
        <Image
          className=" object-cover rounded-md"
          src={user?.cover || "/img/noCover.png"}
          fill
          alt="stories"
        />
        <Image
          className=" object-cover rounded-full absolute left-0 right-0 mx-auto z-30 w-10 h-10 -bottom-4 ring-2 ring-white"
          src={user?.avatar || "/img/noAvatar.png"}
          width={40}
          height={40}
          alt="stories"
        />
      </div>
      <div className=" flex justify-center items-center flex-col mt-5 gap-1">
        <span className=" font-medium">{user?.username}</span>
        <div>
          <span>{user?._count.followers} followers</span>
        </div>
        <Link
          className=" bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
          href={`/profile/${userId}`}
        >
          MY Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
