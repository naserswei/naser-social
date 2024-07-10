import Image from "next/image";
import Comments from "./Comments";

import { Post as PostType, User } from "@prisma/client";
import MoreinfoDropdown from "../MoreinfoDropdown";
import PostInteractive from "./PostInteractive";
import { auth } from "@clerk/nextjs/server";
import { formatCreatedAt } from "@/lib/utils";

type postprops = {
  post: PostType & { user: User } & { likes: string[] } & {
    _count: { comments: number };
  };
};

function Post({ post }: postprops) {
  const { userId } = auth();
  return (
    <div className=" flex flex-col gap-4 pt-4">
      {/* top part */}
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover w-12 h-12"
          src={post.user.avatar || "/img/noAvatar.png"}
          height={48}
          width={48}
          alt="stories"
        />
        <div className="flex flex-col gap-1 flex-1">
          <span className=" font-semibold text-xl">{post.user.username}</span>
          <span className=" text-xs text-gray-400">
            {formatCreatedAt(post.createdAt)} ago
          </span>
        </div>
        {post.userId === userId && <MoreinfoDropdown postid={post.id} />}
      </div>
      {/* center */}
      <div>
        <p>{post.desc}</p>

        {post.img ? (
          <div className=" relative mt-1 w-full min-h-96">
            <Image
              className=" object-cover rounded-md"
              src={post.img}
              fill
              alt="stories"
            />
          </div>
        ) : null}
      </div>

      {/* bottom */}
      <div className=" text-gray-400 flex justify-between">
        <PostInteractive
          postid={post.id}
          likes={post.likes}
          commentcount={post._count.comments}
        />
      </div>

      <div>
        <Comments />
      </div>
    </div>
  );
}

export default Post;
