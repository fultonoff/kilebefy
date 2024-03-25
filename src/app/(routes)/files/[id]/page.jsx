import { Input } from "@/components/ui/input";
import React, { Suspense } from "react";
import Editor from "@/components/editor/Editor";
import dynamic from 'next/dynamic'
import { getSingleFile } from "@/actions/getSingleFile";
import { getUser } from "@/lib/getUser";
import { getCurrentUser } from "@/actions/currentUser";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/SubmitButton";
import { updateFile } from "@/actions/updateFile";
import { LogOutButton } from "@/components/LogOutButton";
import { SaveButton } from "@/components/SaveButton";
import SaveForm from "./_component/SaveForm";
const LazyEditor = dynamic(() => import('@/components/editor/Editor'), { ssr: false })



const getFile = async (fileId)=>{

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

  console.log(documents);
  
  if(!user){
    redirect('/login')
  }
  if(!documents){
    <p>Loading...</p>
  }

  if(documents[0]?.user.userId === user?.$id){
    return (
      // <main className="mt-10 border rounded-sm p-2">
      //   <form action={updateFile}>


      //   <div className='flex p-2 items-center justify-between' >
      //     <input type="hidden" name='documentId' value={documents[0].$id}/>
      //   <Input type="text" name='title' placeholder="Title" className='max-w-[300px]' defaultValue={documents[0].name}/>
      //   <SaveButton>Save</SaveButton>


      //   </div>
  
      //   <div className="grid grid-cols-1 w-full sm:grid-cols-2">
      //     {/* <Editor document={documents[0].document}/> */}

      //     <Suspense fallback = { <div> Please Wait... </div> }>

      //     <LazyEditor document={documents[0].document}/>

      //     </Suspense>
  
      //     <div>Whiteboard</div>
      //   </div>
      //   </form>
      // </main>
      <SaveForm documents={documents}/>
    )

  }else{
    redirect('/dashboard')
  }
}

export default SinglePage