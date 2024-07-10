import { User as PrismaUser } from "@prisma/client";
import Image from "next/image";

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
function Profile({ user }: ProfileProps) {
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div className=" relative w-full min-h-48">
        <Image
          className=" object-cover rounded-md"
          src={user.cover || "/img/noCover.png"}
          fill
          alt="stories"
        />
        <Image
          className=" object-cover rounded-full absolute left-0 right-0 mx-auto z-30 w-28 h-28 -bottom-16 ring-4 ring-white"
          src={user.avatar || "/img/noAvatar.png"}
          width={112}
          height={112}
          alt="stories"
        />
      </div>
      <div className=" flex justify-center items-center flex-col gap-4">
        <span className=" font-bold text-2xl">{user.username}</span>

        <div className="flex gap-6 ml-6 font-medium ">
          <div className="flex flex-col justify-center items-center">
            <span>{user._count.posts}</span>
            <span>post</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>{user._count.followers}</span>
            <span>follwers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>{user._count.followings}</span>
            <span>follwoing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
