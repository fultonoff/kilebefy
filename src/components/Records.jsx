import { getCurrentUser } from '@/actions/currentUser'
import { getFiles } from '@/actions/getFiles'
import { getUser } from '@/lib/getUser'
import { unstable_noStore as noStore } from 'next/cache';

const getUserFiles = async(userId)=>{
  noStore()
    try {
        const files = await getFiles(userId)
        return files
    } catch (error) {
        console.log(error);
    }
}

const Records = async() => {
    const user = await getUser()
    const currentUser = await getCurrentUser(user?.$id)

    const userFiles = await getUserFiles(currentUser.$id)

    if(!userFiles){

        <p>Loading...</p>
    }
    
  return (
    <div>
        <h3 className="text-xl sm:text-2xl text-muted-foreground">Records</h3>
          <div className="flex gap-2 items-center text-2xl font-bold uppercase sm:text-3xl">
            <p>{userFiles.documents.length}</p>
            <span>Records</span>
          </div>
    </div>
  )
}

export default Records