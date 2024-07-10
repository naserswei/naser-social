"use client";

import { acceptFollow, rejectFollow } from "@/actions/follow";
import { FollowRequest } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function FreindreqInteraction({ req }: { req: FollowRequest }) {
  const router = useRouter();
  async function accept(sender: string, receiver: string) {
    const res = await acceptFollow(sender, receiver);
    router.refresh();
    if (res.message) {
      toast.success(res.message);
    } else {
      toast.error(res.error);
    }
  }

  async function reject(sender: string, receiver: string) {
    const res = await rejectFollow(sender, receiver);
    router.refresh();
    if (res.message) {
      toast.success(res.message);
    } else {
      toast.error(res.error);
    }
  }
  return (
    <div className="flex gap-2">
      <form action={() => accept(req.senderId, req.receiverId)}>
        <button>
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/accept.png"
            height={20}
            width={20}
            alt="stories"
          />
        </button>
      </form>
      <form action={() => reject(req.senderId, req.receiverId)}>
        <button>
          <Image
            className="rounded-full object-cover w-5 h-5"
            src="/img/reject.png"
            height={20}
            width={20}
            alt="stories"
          />
        </button>
      </form>
    </div>
  );
}

export default FreindreqInteraction;
