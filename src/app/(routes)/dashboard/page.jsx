

import { getCurrentUser } from "@/actions/currentUser";
import { saveUser } from "@/actions/saveUserToDb";
import { Greeting } from "@/components/Greeting";
import SidebarLayout from "@/components/SidebarLayout";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import Image from 'next/image'
import torus from '../../../../public/torus.png'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AddFileButton } from "@/components/AddFileButton";
import Records from "@/components/Records";
import UserFilesDashboard from "@/components/UserFilesDashboard";
import { unstable_noStore as noStore } from 'next/cache';



const saveCurrentUsertTodb = async ({ fullname, userEmail, image, userId }) => {
  noStore()
  const data = {
    fullname,
    userEmail,
    image,
    userId,
  };

  try {
    const saved = await saveUser(data);
    return saved;
  } catch (error) {
    console.log(error);
  }
};



const Dashbaord = async () => {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);

  const savedUser = await saveCurrentUsertTodb({
    fullname: user?.name,
    userEmail: user?.email,
    image: "",
    userId: user?.$id,
  });

  if (!user) {
    redirect("/login");
  }
  return (
    <SidebarLayout>
      <div className="w-full">
        <div className="bg-gradient-to-tr from-foreground dark:from-primary to-ring rounded-md h-[100px] sm:min-h-[200px] w-full p-2 overflow-hidden">
          <div className=" text-xl sm:text-3xl font-bold uppercase text-white relative">
            <Greeting /> <span>{user?.name}</span>
            <div className="hidden sm:block sm:w-52 absolute right-2 top-2">
              <Image
                src={torus}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Records/>
          <div className="flex items-center justify-between">
          <AddFileButton />
          <Link href='/files' className="text-xs underline">View All Files</Link>

          </div>
          <Separator />
          <UserFilesDashboard/>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashbaord;

