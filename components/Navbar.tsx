import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Navbar() {
  return (
    <div className="flex justify-between  py-6 items-center">
      {/* right */}
      <div className=" w-[20%] md:hidden lg:block">
        <Link className="text-blue-600 font-bold text-lg" href="/">
          NASERSOCIAL
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-[50%] items-center justify-between">
        <div className="flex gap-6 text-gray-600 text-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className=" w-4 h-4"
              src="/img/home.png"
              width={24}
              height={24}
              alt="home page"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              className=" w-4 h-4"
              src="/img/friends.png"
              width={24}
              height={24}
              alt="home page"
            />
            <span>friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              className=" w-4 h-4"
              src="/img/stories.png"
              width={16}
              height={16}
              alt="home page"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className=" hidden text-sm  xl:flex bg-slate-100 items-center p-2 rounded-xl">
          <input
            placeholder="Search..."
            type="text"
            className=" bg-transparent outline-none"
          />
          <Image
            className=" w-4 h-4"
            src="/img/search.png"
            width={16}
            height={16}
            alt="home page"
          />
        </div>
      </div>
      {/* left */}
      <div className=" w-[30%] flex gap-2 items-center justify-end">
        <div className=" md:flex items-center flex-row-reverse gap-8 ">
          <Link href="/profile/123">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <div className="hidden xl:flex gap-6">
            <Image
              src="/img/people.png"
              width={20}
              height={20}
              alt="home page"
            />
            <Image
              src="/img/messages.png"
              width={20}
              height={20}
              alt="home page"
            />
            <Image
              src="/img/notifications.png"
              width={20}
              height={20}
              alt="home page"
            />
          </div>
        </div>
        <div className=" md:hidden">
          <MobileMenu className="dark:stroke-white stroke-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
