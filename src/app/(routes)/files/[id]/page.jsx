import { getSingleFile } from "@/actions/getSingleFile";
import { getUser } from "@/lib/getUser";
import { getCurrentUser } from "@/actions/currentUser";
import { redirect } from "next/navigation";

import SaveForm from "./_component/SaveForm";
import { unstable_noStore as noStore } from 'next/cache';



const getFile = async (fileId)=>{
  noStore()

  try {
    const file = await getSingleFile(fileId)
    return file
  } catch (error) {

    console.log(error);
    
  }

}

const SinglePage = async({params}) => {

  const fileId = params.id
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);

  const file = await getFile(fileId)


  const {documents} = file

  
  if(!user){
    redirect('/login')
  }
  if(!documents){
    <p>Loading...</p>
  }

  if(documents[0]?.user.userId === user?.$id){
    return (
     
      <SaveForm documents={documents}/>
    )

  }else{
    redirect('/dashboard')
  }
}

export default SinglePage