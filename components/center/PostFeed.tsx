import React from "react";
import Post from "./Post";

function PostFeed() {
  return (
    <div className="p-4 flex flex-col gap-12 bg-white rounded-lg shadow-md divide-y-2">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostFeed;
