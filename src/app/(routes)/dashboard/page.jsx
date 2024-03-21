

import { getCurrentUser } from "@/actions/currentUser";
import { saveUser } from "@/actions/saveUserToDb";
import { Greeting } from "@/components/Greeting";
import SidebarLayout from "@/components/SidebarLayout";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import Image from 'next/image'
import torus from '../../../../public/torus.png'

const saveCurrentUsertTodb = async ({ fullname, userEmail, image, userId }) => {
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
      <div className="container mx-auto">
        <div className="bg-gradient-to-tr from-foreground to-ring rounded-md h-[100px] sm:min-h-[250px] w-full p-2">
          <div className=" text-xl sm:text-3xl font-bold uppercase text-white relative">
            <Greeting /> <span>{user?.name}</span>
            <div className="hidden sm:block sm:w-52 absolute right-2 top-2">
              <Image src={torus} alt="image" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <h1>{user.name}</h1>
        <h1>{user.$id}</h1>
        <h1>{user.email}</h1>
      </div>
    </SidebarLayout>
  );
};

export default Dashbaord;

