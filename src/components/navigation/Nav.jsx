import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const link = [
  {
    id: 1,
    name: "Feature",
    url: "/features",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Pricing",
    url: "/pricing",
  },
  {
    id: 4,
    name: "Help",
    url: "/help",
  },
];
const Nav = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-8 px-2">
      <div className="">
        <div className="">
          <Image src="/kilebefy-black.png" alt="logo" width={30} height={30} />
        </div>
      </div>

      <ul className="flex items-center gap-2">
        {link.map((link)=>{
            return (
                <Link href={link.url} key={link.id}>{link.name}</Link>
            )
        })}
      </ul>

      <div className="flex items-center gap-2">
        <Button variant='outline'>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
