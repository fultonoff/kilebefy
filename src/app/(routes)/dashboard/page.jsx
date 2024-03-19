

import { getCurrentUser } from "@/actions/currentUser";
import { saveUser } from "@/actions/saveUserToDb";
import UserNav from "@/components/user/UserNav";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

const saveCurrentUsertTodb = async ({fullname, userEmail, image, userId} ) => {
  const data = {
    fullname,
    userEmail,
    image,
    userId,
  };

  try {
    const saved = await saveUser(data)
    return saved
  } catch (error) {
    console.log(error);
  }
};



const Dashbaord = async () => {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);
  
const savedUser = await saveCurrentUsertTodb({fullname:user?.name, userEmail:user?.email, image:"", userId:user?.$id});
 
    
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="container mx-auto">
      <UserNav />
      <h1>{user.name}</h1>
      <h1>{user.$id}</h1>
      <h1>{user.email}</h1>

     
    </main>
  );
};

export default Dashbaord;
