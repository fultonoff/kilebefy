'use server'
const sdk = require('node-appwrite');
import {redirect} from 'next/navigation'
// import { SESSION_COOKIE } from '@/lib/appwrite';

// Init SDK
const client = new sdk.Client();

const account = new sdk.Account(client);

;

export const getResetPasswordLink = async (email)=>{

    try {
        client
            .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
            .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
    
    
            await account.createRecovery(email, `${process.env.NEXT_PUBLIC_URL}/new-password`);

        
    } catch (error) {
        console.log(error);
    }
    redirect('/reset-link-sent')
}

