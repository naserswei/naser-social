"use client";

import { createpost } from "@/actions/post";
import { getUser } from "@/actions/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type props = {
  user: getUser;
};

function AddPost({ user }: props) {
  const router = useRouter();
  async function handleSubmit(formData: FormData) {
    const result = await createpost(formData);

    if (result.message) {
      toast.success(result.message);

      router.refresh();
    } else if (result.error) {
      toast.error(result.error);
    }
  }
  return (
    <div className="p-4 flex gap-4 justify-between bg-white rounded-lg shadow-md text-sm">
      {/* avatar */}
      <Image
        className=" self-start rounded-full object-cover w-12 h-12"
        src={user?.avatar || "/img/noAvatar.png"}
        height={48}
        width={48}
        alt="stories"
      />
      {/* ADD post */}
      <div className=" flex flex-col flex-1 gap-2">
        <form action={handleSubmit} className=" flex gap-2 flex-1">
          <textarea
            className=" bg-slate-100 p-2 rounded-md flex-1"
            placeholder="What's on your mind"
            name="desc"
            id=""
          ></textarea>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className=" bg-blue-500 p-2 text-white rounded-md"
            >
              send
            </button>
            <Image
              className=" cursor-pointer object-cover w-5 h-5 self-start"
              src="/img/emoji.png"
              height={20}
              width={20}
              alt="stories"
            />
          </div>
        </form>
        {/* post options */}
        <div className="flex flex-wrap gap-4 text-gray-400 mt-4 ">
          <div className="flex cursor-pointer gap-1 items-center">
            <Image
              className=" object-cover w-5 h-5 self-end"
              src="/img/addimage.png"
              height={20}
              width={20}
              alt="Add Photo"
            />
            <span>Photo</span>
          </div>

          <div className="flex cursor-pointer gap-1 items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/addvideo.png"
              height={20}
              width={20}
              alt="video"
            />
            <span>Video</span>
          </div>

          <div className="flex gap-1 cursor-pointer items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/poll.png"
              height={20}
              width={20}
              alt="poll"
            />
            <span>poll</span>
          </div>

          <div className="flex gap-1 cursor-pointer items-center">
            <Image
              className="  object-cover w-5 h-5 self-end"
              src="/img/addevent.png"
              height={20}
              width={20}
              alt="stories"
            />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
