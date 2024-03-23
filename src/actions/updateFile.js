"use server";

const { ID } = require("node-appwrite");
const { getCurrentUser } = require("./currentUser");
import { revalidatePath } from "next/cache";

const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const updateFile = async (formData) => {
  const title = formData.get("title");
  const documentId = formData.get("documentId");
  const document = formData.get("document");

  const data = {
    name: title,
    document: document,
  };

  try {
    client
      .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)
      .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
   const updateFile= await databases.updateDocument(
      process.env.PUBLIC_DATABASE_ID,
      process.env.PUBLIC_FILES_COLLECTION_ID,
      documentId,
      data
    );

    if(!updateFile)return {error: 'Could not update the file.'};
} catch (error) {
    console.log(error);
    return { error: error.message };
}
revalidatePath("/", "layout", "/file", "/file/[id]", "/dashboard");
};
