import Image from "next/image";
import React from "react";

const stories = [
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Martin",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Martin",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Martin",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Martin",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "naser",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "swei",
  },
  {
    src: "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "swei",
  },
];

function Stories() {
  return (
    <div className=" p-2 bg-white rounded-lg shadow-md overflow-scroll scroll-bar text-sm">
      <div className=" flex gap-8 w-max">
        {stories.map((storie, index) => (
          <div
            key={index}
            className=" flex flex-col gap-2 cursor-pointer items-center"
          >
            <Image
              className=" rounded-full object-cover w-20 h-20 ring-2"
              src={storie.src}
              height={80}
              width={80}
              alt="stories"
            />
            <span className=" font-medium">{storie.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
