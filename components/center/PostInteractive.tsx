import Image from "next/image";
import React from "react";

function PostInteractive({
  likes,
  postid,
  commentcount,
}: {
  likes: string[];
  postid: number;
  commentcount: number;
}) {

    
  return (
    <>
      {/* left intraction */}
      <div className="flex gap-8">
        <div className=" bg-slate-100 rounded-2xl flex items-center gap-4 py-1 px-4">
          <Image src="/img/like.png" width={20} height={20} alt="likes" />
          <span>|</span>
          <span>
            123 <span className=" hidden md:inline"> likes</span>
          </span>
        </div>

        <div className=" bg-slate-100 rounded-2xl flex items-center gap-4 py-1 px-4">
          <Image src="/img/comment.png" width={20} height={20} alt="stories" />
          <span>|</span>
          <span>
            {commentcount} <span className=" hidden md:inline"> comments</span>
          </span>
        </div>
      </div>
      {/* right interaction */}
      <div>
        <div className=" bg-slate-100 rounded-2xl flex items-center gap-4 py-1 px-4">
          <Image src="/img/share.png" width={20} height={20} alt="share" />
          <span>|</span>
          <span>
            <span className=" hidden md:inline"> share</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default PostInteractive;
