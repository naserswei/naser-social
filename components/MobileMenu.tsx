import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
type MenuProps = {
  className?: string;
};

function MobileMenu({ className }: MenuProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          className={cn("dark:stroke-black", className)}
          color="white"
          strokeWidth={2}
        />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <nav className="flex flex-col justify-center items-center mt-10 gap-10 ">
          <Link className="" href="/">
            Home
          </Link>

          <Link href="/friends">Friends</Link>

          <Link href="/groups">Groups</Link>

          <Link href="/stories">Stories</Link>

          <Link href="/profile">Profile</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
