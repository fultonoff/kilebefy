'use client'
import { Home, Files, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
    const pathname = usePathname()
   

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
    <aside className="w-1/4 hidden lg:block">
      <ul className="flex flex-col ">
        {links.map((item) => (
          <Link href={item.url} className={`flex items-center gap-2 py-4 ${pathname === item.url ? 'text-primary': 'text-muted-foreground'}`} key={item.id}>
            <item.icon />
            {item.name}
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
