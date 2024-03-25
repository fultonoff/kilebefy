"use client";
import { deleteFile } from "@/actions/deleteFile";
import toast from "react-hot-toast";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";

const DeleteForm = ({fileId}) => {
  async function handleUpdateFile(FormData) {
    const updating = toast.loading("Saving...");
    const res = await deleteFile(FormData);
    toast.dismiss(updating);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Saved successfully");
    }
  }
  return (
    <form action={handleUpdateFile}>
      <Button className="flex items-center gap-2">
        <Trash className="size-5" />
        <input type="hidden" name='documentId' value={fileId}/>
        <span>Delete</span>
      </Button>
    </form>
  );
};

export default DeleteForm;
