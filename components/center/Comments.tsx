import Image from "next/image";
import AddComment from "./AddComment";
import prisma from "@/lib/db";
import getUser from "@/lib/getUser";

async function Comments({ postid }: { postid: number }) {
  const user = await getUser();
  const comments = await prisma.comment.findMany({
    where: {
      postId: postid,
    },
    include: {
      user: true,
      _count: {
        select: {
          likes: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      {/* add comment */}
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover w-9 h-9"
          src={user?.imageUrl || "noAvatar.png"}
          height={36}
          width={36}
          alt="stories"
        />
        <AddComment postid={postid} />
      </div>

      {/* view comment */}
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="flex gap-4">
            <Image
              className="rounded-full  w-12 h-12"
              src={comment.user.avatar || "noAvatar.png"}
              height={48}
              width={48}
              alt="useravatar"
            />
            <div className="flex-1 flex flex-col gap-2">
              <span className=" flex justify-between items-center font-medium">
                {comment.user.username}
                <span>
                  <Image
                    className="rounded-full  w-5 h-5"
                    src="/img/more.png"
                    height={20}
                    width={20}
                    alt="stories"
                  />
                </span>
              </span>
              <p>{comment.desc}</p>
              <div className="rounded-2xl flex items-center gap-4 py-1 text-gray-400">
                <Image src="/img/like.png" width={20} height={20} alt="likes" />
                <span>|</span>
                <span>
                  {comment._count.likes}{" "}
                  <span className=" hidden md:inline"> likes</span>
                </span>
                <span>Reply</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
