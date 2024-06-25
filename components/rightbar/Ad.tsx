import Image from "next/image";
import React from "react";

function Ad() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      {/* title */}
      <div className="flex items-center justify-between">
        <span className=" text-gray-400">Sponsored Ads</span>
        <Image src="/img/more.png" height={16} width={16} alt="stories" />
      </div>
      <div
        className=" relative w-full h-40
       2xl:h-48 rounded-lg overflow-hidden"
      >
        <Image
          src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="stories"
        />
      </div>

      {/* descrption of the ad */}
      <div className="flex gap-2 items-center">
        <Image
          className=" rounded-full object-cover w-7 h-7"
          src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={28}
          height={28}
          alt="stories"
        />
        <span className=" text-blue-500 font-medium">BigChef tounge</span>
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab esse quas
        sunt aut, natus porro quia dolore nemo saepe enim!
      </div>
      <button className=" w-full bg-slate-200 py-2 px-4 rounded-lg text-gray-500">
        Learn more
      </button>
    </div>
  );
}

export default Ad;
