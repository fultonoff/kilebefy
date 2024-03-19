import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { getCurrentUser } from "@/actions/currentUser";
import { logout } from "@/actions/authActions";
import {LogOut} from 'lucide-react'
import { SubmitButton } from "../SubmitButton";
import { LogOutButton } from "../LogOutButton";
import LogoutComponent from "../LogoutComponent";
import { getUser } from "@/lib/getUser";




const UserNav = async () => {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);
  return (
    <nav className="p-4 border-b">
      <div className="flex items-center justify-between">
        <div className="">
          <Image
            src="/kilebefy-black.png"
            className=""
            width={40}
            height={30}
            alt='logo'
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 bg-muted p-2 rounded-md">
            <Avatar className="ring ring-primary ">Hello world</Avatar>
            <span className="text-xs ">{currentUser?.fullname}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2">
            <DropdownMenuLabel className="flex flex-col items-center justify-center">
              <span className="font-bold text-base">
                {currentUser?.fullname}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentUser?.userEmail}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
        
            <LogoutComponent/>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default UserNav;

