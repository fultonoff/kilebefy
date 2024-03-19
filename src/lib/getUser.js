
import { cookies } from "next/headers";
import { createSessionClient } from "./appwrite";
import toast from 'react-hot-toast'

export const getUser = async ()=>{

  
    try {
      const { account } = createSessionClient(cookies());
      const user = await account.get();

      return user
      
    } catch (error) {
      // toast.error(error.message)
    }
  }


 