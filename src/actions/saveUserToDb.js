const { ID } = require("node-appwrite");
const { getCurrentUser } = require("./currentUser");

const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

export const saveUser = async (data) => {
  const currentUser = await getCurrentUser(data?.userId);

  if (!currentUser) {
    try {
      client
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)
        .setKey(process.env.PUBLIC_APPWRITE_API_KEY);
      await databases.createDocument(
        process.env.PUBLIC_DATABASE_ID,
        process.env.PUBLIC_USERS_COLLECTION_ID,
        ID.unique(),
        data
      );
    } catch (error) {
      console.log(error);
    }
  }
};
