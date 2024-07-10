import Post from "./Post";

import NoPost from "../fallbacks/NoPost";
import Addpost_dialog from "../Addpost_dialog";
import { auth } from "@clerk/nextjs/server";
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

async function PostFeed({ user }: ProfileProps) {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });
  const posts = await res.json();
  const { userId } = auth();

  return (
    <div className="p-4 flex flex-col gap-12 bg-white rounded-lg shadow-md divide-y-2 mb-2">
      {posts && posts.length > 0 ? (
        posts.map((post: any) => <Post key={post.id} post={post} />)
      ) : (
        <div className="flex flex-col  gap-2 justify-center items-center h-72">
          <NoPost />
          <p className=" text-2xl  font-semibold text-blue-500">No Posts Yet</p>
          {userId === user?.id && (
            <p className="font-medium flex items-center gap-3">
              Add your first post <Addpost_dialog />
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PostFeed;
