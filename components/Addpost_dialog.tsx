import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddPost from "./center/AddPost";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

async function Addpost_dialog() {
  const { userId } = auth();
  const user = await prisma.user.findFirst({
    where: {
      id: userId as string,
    },
  });
  if (!user) return null;
  return (
    <Dialog>
      <DialogTrigger>
        <span className=" bg-blue-500 p-2 text-white rounded-md">Add post</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add A Post</DialogTitle>
        </DialogHeader>
        <AddPost user={user} />
      </DialogContent>
    </Dialog>
  );
}

export default Addpost_dialog;
