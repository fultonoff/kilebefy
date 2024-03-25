import { getCurrentUser } from '@/actions/currentUser';
import { getFiles } from '@/actions/getFiles';
import DateFormatter from '@/components/DateFormatter';
import SidebarLayout from '@/components/SidebarLayout'
import { Separator } from '@/components/ui/separator';
import { getUser } from '@/lib/getUser';
import React from 'react'
import Link from 'next/link'
import FilesTable from './_components/FilesTable';
import { AddFileButton } from '@/components/AddFileButton';
import NoFilesToDisplay from '@/components/NoFilesToDisplay';



const getUserFiles = async (userId) => {
  try {
    const files = await getFiles(userId);
    return files;
  } catch (error) {
    console.log(error);
  }
};

const Files = async() => {
  const user = await getUser()
  const currentUser = await getCurrentUser(user?.$id);

  const files = await getUserFiles(currentUser?.$id)

  // console.log('doc',files);

 
  return (

    <SidebarLayout>

        <main>



          {/* table */}

          <div>
            <AddFileButton/>
            
          </div>

          <Separator/>
    

{/* <div className="overflow-x-auto mt-5">
  <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
    <thead className="text-left">
      <tr className='font-bold'>
        <th className="whitespace-nowrap py-2">Name</th>
        <th className="whitespace-nowrap py-2 ">Created</th>
        <th className="whitespace-nowrap py-2 ">Updated</th>
        <th className="whitespace-nowrap py-2 ">Salary</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">

      {files.documents.length > 0 &&
      
      files.documents.map((item)=>(
      <tr key={item.$id}>
       
        
        <td className="whitespace-nowrap  py-2 font-medium ">{item.name}</td>
        <td className="whitespace-nowrap py-2 text-gray-700"><DateFormatter date={item.$createdAt}/> </td>
        <td className="whitespace-nowrap py-2 text-gray-700"><DateFormatter date={item.$updatedAt}/> </td>
        <td className="whitespace-nowrap  py-2 text-gray-700">$120,000</td>
        
        <td className="whitespace-nowrap py-2">
          <div
            
            className="inline-block rounded bg-indigo-600  py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </div>
        </td>
      </tr>


      ))
      }
    </tbody>
  </table>
</div> */}
<FilesTable files={files}/>
        </main>
    </SidebarLayout>
  )
}

export default Files