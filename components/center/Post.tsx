import Image from "next/image";
import React from "react";
import Comments from "./Comments";

function Post() {
  return (
    <div className=" flex flex-col gap-4 pt-4">
      {/* top part */}
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover w-12 h-12"
          src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={48}
          width={48}
          alt="stories"
        />
        <span className="flex-1 font-semibold text-xl">Naserswei</span>
        <Image
          className=" rounded-full object-cover w-5 h-5"
          src="/img/more.png"
          height={20}
          width={20}
          alt="stories"
        />
      </div>
      {/* center */}
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae
          illum qui magnam in vitae deleniti molestiae necessitatibus corrupti
          pariatur.
        </p>
        <div className=" relative mt-1 w-full min-h-96">
          <Image
            className=" object-cover rounded-md"
            src="https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="stories"
          />
        </div>
      </div>
      {/* bottom */}
      <div className=" text-gray-400 flex justify-between">
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
            <Image
              src="/img/comment.png"
              width={20}
              height={20}
              alt="stories"
            />
            <span>|</span>
            <span>
              123 <span className=" hidden md:inline"> comments</span>
            </span>
          </div>
        </div>
        {/* right interaction */}
        <div>
          <div className=" bg-slate-100 rounded-2xl flex items-center gap-4 py-1 px-4">
            <Image src="/img/share.png" width={20} height={20} alt="share" />
            <span>|</span>
            <span>
              123 <span className=" hidden md:inline"> share</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <Comments />
      </div>
    </div>
  );
}

export default Post;
