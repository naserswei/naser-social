import Image from "next/image";
import React from "react";

function AddPost() {
  return (
    <div className="p-4 flex gap-4 justify-between bg-white rounded-lg shadow-md text-sm">
      {/* avatar */}
      <Image
        className=" self-start rounded-full object-cover w-12 h-12"
        src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height={48}
        width={48}
        alt="stories"
      />
      {/* post */}
      <div className=" flex flex-col flex-1 gap-2">
        <div className=" flex gap-2 flex-1">
          <textarea
            className=" bg-slate-100 p-2 rounded-md flex-1"
            placeholder="What's on your mind"
            name=""
            id=""
          ></textarea>
          <Image
            className=" cursor-pointer object-cover w-5 h-5 self-end"
            src="/img/emoji.png"
            height={20}
            width={20}
            alt="stories"
          />
        </div>
        {/* post options */}
        <div className="flex flex-wrap gap-4 text-gray-400 mt-4 ">
          <div className="flex cursor-pointer gap-1 items-center">
            <Image
              className=" object-cover w-5 h-5 self-end"
              src="/img/addimage.png"
              height={20}
              width={20}
              alt="Add Photo"
            />
            <span>Photo</span>
          </div>

          <div className="flex cursor-pointer gap-1 items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/addvideo.png"
              height={20}
              width={20}
              alt="video"
            />
            <span>Video</span>
          </div>

          <div className="flex gap-1 cursor-pointer items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/poll.png"
              height={20}
              width={20}
              alt="poll"
            />
            <span>poll</span>
          </div>

          <div className="flex gap-1 cursor-pointer items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/addevent.png"
              height={20}
              width={20}
              alt="stories"
            />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
