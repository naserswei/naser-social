import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function UserUpdate() {
  return (
    <Dialog>
      <DialogTrigger>
        <p className=" text-blue-500">Update all</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-center mb-2 capitalize">
            update your information
          </DialogTitle>
        </DialogHeader>
        <form action="" className="flex flex-col gap-7 p-1">
          <div className="flex gap-4">
            <div>
              <Label htmlFor="text">name</Label>
              <Input id="name" type="text" placeholder="firstname" required />
            </div>
            <div>
              <Label htmlFor="text">surname</Label>
              <Input id="email" type="text" placeholder="surname" required />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <Label htmlFor="text">city</Label>
              <Input id="city" type="text" placeholder="city" required />
            </div>
            <div>
              <Label htmlFor="text">school</Label>
              <Input id="school" type="text" placeholder="school" required />
            </div>
          </div>
          <div>
            <Label htmlFor="text">description :</Label>
            <Input
              id="description"
              type="text"
              placeholder="description"
              required
            />
          </div>
          <Button>Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UserUpdate;
