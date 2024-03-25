const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const getSingleFile = async(fileId)=>{
    try {
        client
          .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
          .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
          .setKey(process.env.PUBLIC_APPWRITE_API_KEY); // Your secret API key
        
          const files = await databases.listDocuments(
            process.env.PUBLIC_DATABASE_ID,
            process.env.PUBLIC_FILES_COLLECTION_ID,
            [
        
            sdk.Query.equal("$id", fileId)
        ],
            
          );

          return files
    } catch (error) {
        console.log(error);
    }

}
