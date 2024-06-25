import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div className="flex flex-col gap-4">
      {/* add comment */}
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover w-9 h-9"
          src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={36}
          width={36}
          alt="stories"
        />
        <div className=" bg-slate-100 rounded-3xl flex p-2 flex-1 justify-between">
          <input
            placeholder="Add comment"
            type="text"
            className=" bg-transparent outline-none"
          />
          <span>😉</span>
        </div>
      </div>
      {/* view comment */}
      <div className="flex gap-4">
        <Image
          className="rounded-full  w-12 h-12"
          src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={48}
          width={48}
          alt="stories"
        />
        <div className="flex-1 flex flex-col gap-2">
          <span className=" flex justify-between items-center font-medium">
            Mohammed swei
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            quod nisi blanditiis fugiat nesciunt voluptate facilis eos natus.
          </p>
          <div className="rounded-2xl flex items-center gap-4 py-1 text-gray-400">
            <Image src="/img/like.png" width={20} height={20} alt="likes" />
            <span>|</span>
            <span>
              123 <span className=" hidden md:inline"> likes</span>
            </span>
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
