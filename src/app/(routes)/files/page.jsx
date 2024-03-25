import { getCurrentUser } from '@/actions/currentUser';
import { getFiles } from '@/actions/getFiles';
import DateFormatter from '@/components/DateFormatter';
import SidebarLayout from '@/components/SidebarLayout'
import { Separator } from '@/components/ui/separator';
import { getUser } from '@/lib/getUser';
import React from 'react'
import FilesTable from './_components/FilesTable';
import { AddFileButton } from '@/components/AddFileButton';



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
    

<FilesTable files={files}/>
        </main>
    </SidebarLayout>
  )
}

export default Files