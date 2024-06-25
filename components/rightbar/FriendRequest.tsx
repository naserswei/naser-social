import Image from "next/image";
import React from "react";

function FriendRequest() {
  return (
    <div className=" bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      <div className="flex justify-between">
        <span className=" text-gray-500">Friend Requests</span>
        <span className="text-blue-500">See all</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full object-cover w-12 h-12"
            src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={48}
            width={48}
            alt="stories"
          />
          <span className=" font-bold">naser swei</span>
        </div>
        <div className="flex gap-2">
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/accept.png"
            height={20}
            width={20}
            alt="stories"
          />
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/reject.png"
            height={20}
            width={20}
            alt="stories"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full object-cover w-12 h-12"
            src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={48}
            width={48}
            alt="stories"
          />
          <span className=" font-bold">naser swei</span>
        </div>
        <div className="flex gap-2">
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/accept.png"
            height={20}
            width={20}
            alt="stories"
          />
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/reject.png"
            height={20}
            width={20}
            alt="stories"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full object-cover w-12 h-12"
            src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={48}
            width={48}
            alt="stories"
          />
          <span className=" font-bold">naser swei</span>
        </div>
        <div className="flex gap-2">
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/accept.png"
            height={20}
            width={20}
            alt="stories"
          />
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/reject.png"
            height={20}
            width={20}
            alt="stories"
          />
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
