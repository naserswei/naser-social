import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div className=" relative w-full min-h-48">
        <Image
          className=" object-cover rounded-md"
          src="https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="stories"
        />
        <Image
          className=" object-cover rounded-full absolute left-0 right-0 mx-auto z-30 w-28 h-28 -bottom-16 ring-4 ring-white"
          src="https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={112}
          height={112}
          alt="stories"
        />
      </div>
      <div className=" flex justify-center items-center flex-col gap-4">
        <span className=" font-bold text-2xl">Naser swei</span>

        <div className="flex gap-6 ml-6 font-medium ">
          <div className="flex flex-col justify-center items-center">
            <span>123</span>
            <span>post</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>1.2k</span>
            <span>follwers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>1.3k</span>
            <span>follwoing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
