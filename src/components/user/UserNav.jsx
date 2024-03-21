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

import LogoutComponent from "../LogoutComponent";
import { getUser } from "@/lib/getUser";
import { Home, Files, User, Settings } from "lucide-react";
import Link from 'next/link'





const UserNav = async () => {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);

  const links = [
    {
      id: 1,
      name: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      id: 2,
      name: "Files",
      url: "/files",
      icon: Files,
    },
    {
      id: 3,
      name: "Profile",
      url: "/profile",
      icon: User,
    },
    {
      id: 4,
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="p-4">
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
        <DropdownMenu >
          <DropdownMenuTrigger className="flex items-center gap-2 bg-muted p-2 rounded-md">
            <Avatar className="ring ring-primary ">Hello world</Avatar>
            <span className="text-xs ">{currentUser?.fullname}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2" >
            <DropdownMenuLabel className="flex flex-col items-center justify-center">
              <span className="font-bold text-base">
                {currentUser?.fullname}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentUser?.userEmail}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {links.map((item)=>(
              
              <DropdownMenuItem key={item.id}>
                <Link href={item.url} className={`flex items-center gap-2  `}>
            <item.icon className='text-muted-foreground h-5 w-5'/>
            {item.name}
          </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
        
            <LogoutComponent/>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default UserNav;

