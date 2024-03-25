"use client";
import { deleteFile } from "@/actions/deleteFile";
import toast from "react-hot-toast";


import { DeleteButton } from "./DeleteButton";

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
    <form action={handleUpdateFile} className="mt-2">
        <input type="hidden" name='documentId' value={fileId}/>
      {/* <Button variant='destructive' className="flex items-center gap-2 w-full">
        <Trash className="size-5" />
        <span>Delete</span>
      </Button> */}
      <DeleteButton>Delete</DeleteButton>
    </form>
  );
};

export default DeleteForm;
