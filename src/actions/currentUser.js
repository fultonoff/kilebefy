
const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const getCurrentUser = async(userId)=>{
    try {
        client
          .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
          .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
          .setKey(process.env.PUBLIC_APPWRITE_API_KEY); // Your secret API key
        
          const isUser = await databases.listDocuments(
            process.env.PUBLIC_DATABASE_ID,
            process.env.PUBLIC_USERS_COLLECTION_ID,
            [sdk.Query.equal("userId", userId)]
          );

          return isUser.documents[0]
    } catch (error) {
        console.log(error);
    }

}

