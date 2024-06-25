import Image from "next/image";
import React from "react";

function Birthdays() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      <h1>Birthdays</h1>
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
          <button className=" bg-blue-500 text-white py-1 px-2 rounded-md">
            celebrate
          </button>
        </div>
      </div>

      <div className=" bg-slate-100 p-2 flex gap-2 items-center">
        <Image
          className="rounded-full object-cover w-12 h-12"
          src="/img/gift.png"
          height={48}
          width={48}
          alt="stories"
        />

        <div className="flex flex-col gap-1">
          <span className=" font-medium">Upcoming Birhdays</span>
          <p className=" text-xs">See other 16 have upcoming birthdays</p>
        </div>
      </div>
    </div>
  );
}

export default Birthdays;
