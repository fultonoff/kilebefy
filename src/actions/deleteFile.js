"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const deleteFile = async (formData) => {
  
  const documentId = formData.get("documentId");
  

 

  try {
    client
      .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)
      .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
   const deleteFile= await databases.deleteDocument(
      process.env.PUBLIC_DATABASE_ID,
      process.env.PUBLIC_FILES_COLLECTION_ID,
      documentId,
    );

    // if(!deleteFile)return {error: 'Could not delete the file.'};
} catch (error) {
    console.log(error);
    return { error: error.message };
}
revalidatePath("/", "layout", "/files", "/files/[id]", "/dashboard");
redirect('/files')
};
