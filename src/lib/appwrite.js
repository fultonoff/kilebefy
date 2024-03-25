import { Account, Client } from "node-appwrite";
export const SESSION_COOKIE = "appwrite-session";




export function createAdminClient() {
    const endpoint = 'http://localhost:8000/v1';
	const apiKey = process.env.PUBLIC_APPWRITE_API_KEY;
	const projectId = process.env.PUBLIC_APPWRITE_PROJECT_ID;
    


	const client = new Client()
		.setEndpoint(endpoint)
		.setProject(projectId)
		.setKey(apiKey);

	return {
		get account() {
			return new Account(client);
		}
	}
}

export function createSessionClient(cookies) {
	const endpoint = process.env.PUBLIC_APPWRITE_ENDPOINT;
	const projectId = process.env.PUBLIC_APPWRITE_PROJECT_ID;


	const client = new Client()
		.setEndpoint(endpoint)
		.setProject(projectId);

	const session = cookies.get(SESSION_COOKIE);

	if (session) {
		client.setSession(session.value);
	}

	return {
		get account() {
			return new Account(client);
		}
	}
}
