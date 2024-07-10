"use client";
import { deletepost } from "@/actions/post";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditIcon, Trash2Icon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
interface props {
  postid: number;
}

function MoreinfoDropdown({ postid }: props) {
  const router = useRouter();
  const handleDelete = async (postid: number) => {
    const res = await deletepost(postid);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
      router.refresh();
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className=" rounded-full focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 select-none object-cover w-5 h-5 cursor-pointer"
          src="/img/more.png"
          height={20}
          width={20}
          alt="stories"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-52 ">
        <DropdownMenuItem className="flex justify-between cursor-pointer group">
          <span className=" font-medium text-md group-hover:text-blue-500 transition-colors ">
            Edit post
          </span>
          <EditIcon
            className="group-hover:text-blue-500 transition-colors"
            size={20}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDelete(postid)}
          className=" flex justify-between cursor-pointer group "
        >
          <button className=" font-medium text-md group-hover:text-red-500 transition-colors  ">
            Delete post
          </button>
          <Trash2Icon
            className=" group-hover:text-red-500 transition-colors"
            size={20}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreinfoDropdown;
