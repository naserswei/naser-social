import Image from "next/image";
import Link from "next/link";
import React from "react";

function LeftNav() {
  return (
    <div className=" p-4 bg-white shadow-md rounded-lg text-sm text-gray-500 flex flex-col gap-2">
      <nav className="flex flex-col gap-3">
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/posts.png" width={20} height={20} alt="my posts" />
          <span>My posts</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image
            src="/img/activity.png"
            width={20}
            height={20}
            alt="my posts"
          />
          <span>Activity</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/market.png" width={20} height={20} alt="my posts" />
          <span>Markitplace</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/events.png" width={20} height={20} alt="my posts" />
          <span>Events</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/albums.png" width={20} height={20} alt="my posts" />
          <span>Albums</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/videos.png" width={20} height={20} alt="my posts" />
          <span>videos</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/news.png" width={20} height={20} alt="my posts" />
          <span>News</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/courses.png" width={20} height={20} alt="my posts" />
          <span>Courses</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image src="/img/lists.png" width={20} height={20} alt="my posts" />
          <span>Lists</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 hover:bg-slate-100 items-center p-2"
        >
          <Image
            src="/img/settings.png"
            width={20}
            height={20}
            alt="my posts"
          />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}

export default LeftNav;
