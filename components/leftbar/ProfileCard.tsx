import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileCard() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-500">
      <div className=" relative w-full h-20">
        <Image
          className=" object-cover rounded-md"
          src="https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="stories"
        />
        <Image
          className=" object-cover rounded-full absolute left-0 right-0 mx-auto z-30 w-10 h-10 -bottom-4 ring-2 ring-white"
          src="https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={40}
          height={40}
          alt="stories"
        />
      </div>
      <div className=" flex justify-center items-center flex-col mt-5 gap-1">
        <span className=" font-medium">Naserswei</span>
        <div>
          <span>500 followers</span>
        </div>
        <Link
          className=" bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
          href="/profile/123"
        >
          MY Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
