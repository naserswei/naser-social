import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserInformation() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="text-gray-500 font-medium">User information</span>
        <Link className=" text-blue-500" href="/">
          See all
        </Link>
      </div>
      {/* username */}
      <div className="flex gap-2">
        <h1 className=" font-bold text-xl">Naserswei</h1>
        <span className="text-gray-500">@swei</span>
      </div>
      {/* bio text */}
      <div>
        <p className="text-gray-500 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          asperiores expedita perspiciatis, veniam nihil omnis natus quidem
          atque Quae.
        </p>
      </div>

      {/* more information */}

      <div className="flex gap-2">
        <Image src="/img/map.png" width={20} height={20} alt="map" />
        <p className="text-gray-400">
          Living in
          <span className="ml-1 text-gray-600 font-semibold">Denver</span>
        </p>
      </div>

      <div className="flex gap-2">
        <Image src="/img/School.png" width={20} height={20} alt="School" />
        <p className="text-gray-400">
          Went to
          <span className="ml-1 text-gray-600 font-semibold">EMU</span>
        </p>
      </div>

      <div className="flex gap-2">
        <Image src="/img/work.png" width={20} height={20} alt="work" />
        <p className="text-gray-400">
          Works at
          <span className="ml-1 text-gray-600 font-semibold">Apple inc</span>
        </p>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1 font-medium">
          <Image src="/img/link.png" width={20} height={20} alt="link" />
          <p className=" text-blue-500">lama.dev</p>
        </span>
        <p className="flex gap-1 items-center">
          <Image src="/img/date.png" width={20} height={20} alt="link" />
          <span className=" text-xs">joined November 2024</span>
        </p>
      </div>
      <div>
        <button className=" bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-700 transition-colors">
          Follow
        </button>
      </div>
    </div>
  );
}

export default UserInformation;
