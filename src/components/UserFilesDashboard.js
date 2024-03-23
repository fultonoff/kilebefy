
import { getCurrentUser } from "@/actions/currentUser";
import { getFiles } from "@/actions/getFiles";
import { getUser } from "@/lib/getUser";
import React from "react";
import DateFormatter from "./DateFormatter";
import { File, EllipsisVertical } from "lucide-react";
import Link from 'next/link'
import UserHorizontalCards from "./UserHorizontalCards";


const getUserFiles = async (userId) => {
  try {
    const files = await getFiles(userId);
    return files;
  } catch (error) {
    console.log(error);
  }
};

const UserFilesDashboard = async () => {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);
  const files = await getUserFiles(currentUser.$id);
  const userFiles = files.documents.slice(0, 4);
  return (
   
   <UserHorizontalCards userFiles={userFiles}/>
  );
};
export default UserFilesDashboard;
