'use server'
const sdk = require('node-appwrite');
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast'

// Init SDK
const client = new sdk.Client();

const account = new sdk.Account(client);

;

export const newPassword = async (userId, secret, password, repeatPassword)=>{

    try {
        client
            .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
            .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
    
    
           const result =  await account.updateRecovery(userId, secret, password, repeatPassword)

           if(result){
            toast.success("Password updated successfully")
           }

            console.log('clicked');
            
        } catch (error) {
            return{error: error.message}
        }
        
        redirect('/login')
}

