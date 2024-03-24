import Nav from "@/components/navigation/Nav";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser()
  

  if(user){
    redirect('/dashboard')
  }
  return (
   <main className="">
    <Nav/>

    <h1>Home</h1>
   </main>
  );
}
