
// import { logout } from "@/actions/authActions";
import { createSessionClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { SESSION_COOKIE } from "../lib/appwrite";
import { redirect } from "next/navigation";
import { LogOutButton } from "./LogOutButton";
import {LogOut} from 'lucide-react'

const LogoutComponent = () => {
  async function logout() {
    "use server";
  
    const { account } = createSessionClient(cookies());
  
    cookies().delete(SESSION_COOKIE);
    await account.deleteSession("current");
  
    redirect("/");
  }
 
  return (
    <form action={logout}>
      <LogOutButton className="flex gap-2">
        <LogOut className="w-5" />
        <span className="text-sm">Log out</span>
      </LogOutButton>


       
      
    </form>
  );
};

export default LogoutComponent;
