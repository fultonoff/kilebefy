'use server'
import { cookies } from "next/headers";
import { SESSION_COOKIE, createAdminClient, createSessionClient } from '../lib/appwrite';
import { redirect } from "next/navigation";
import { ID } from "node-appwrite";



export async function signInWithEmail(email, password) {
  try {
    // const email = formData.get("email");
    // const password = formData.get("password");

    if (email === null) {
      throw new Error("Email is required");
    }

    if (password === null) {
      throw new Error("Password is required");
    }

    const { account } = createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set(SESSION_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    
    
    
  } catch (error) {
    return { error: error.message };
  }
  redirect("/dashboard");
}

export async function signUpWithEmail(email, password, name) {
  try {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const name = formData.get("name");

    if (email === null) {
      throw new Error("Email is required");
    }

    if (password === null) {
      throw new Error("Password is required");
    }

    const { account } = createAdminClient();

    await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set(SESSION_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    
  } catch (error) {
    return { error: error.message };
  }
  redirect("/dashboard");
}

export async function logout() {
  const { account } = createSessionClient(cookies());

  cookies().delete(SESSION_COOKIE);
  await account.deleteSession("current");

  redirect("/");
}