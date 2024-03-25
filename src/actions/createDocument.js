'use server'



const { ID } = require("node-appwrite");
const { getCurrentUser } = require("./currentUser");
import { redirect } from "next/navigation";


const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const createDocument = async (formData) => {
  
  const documentName = formData.get('name')
  const userId = formData.get('userId')

  const data={
    name: documentName,
    user: userId
  }

 
    try {
      client
        .setEndpoint(process.env.APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)
        .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
      await databases.createDocument(
        process.env.PUBLIC_DATABASE_ID,
        process.env.PUBLIC_FILES_COLLECTION_ID,
        ID.unique(),
        data
      );
     
    } catch (error) {
      console.log(error);
      return {error: error.message}
    }

    redirect('/files')
  
};