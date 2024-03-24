'use client'

import { SaveButton } from '@/components/SaveButton'
import { Input } from '@/components/ui/input'
import React, { Suspense } from 'react'
import Editor from '@/components/editor/Editor'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { File, Ellipsis } from "lucide-react";

import { updateFile } from "@/actions/updateFile";
import Canvas from "@/components/Canvas";
const LazyEditor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});

const SaveForm = ({ documents }) => {
  async function handleUpdateFile(formData) {
    const updating = toast.loading("Saving...");
    const res = await updateFile(formData);
    toast.dismiss(updating);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Saved successfully");
    }
  }

  return (
    <main className=" rounded-sm p-2">
      <form action={handleUpdateFile}>
        <div className="flex flex-col gap-2 sm:flex-row p-2 items-center justify-between">
          <input type="hidden" name="documentId" value={documents[0].$id} />
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              className="w-fit text-2xl font-bold"
              defaultValue={documents[0].name}
            />
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Ellipsis className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <SaveButton>Save</SaveButton>
        </div>

        <div className="flex flex-col-reverse sm:flex-row w-full h-screen sm:h-[80vh]">
          {/* <Editor document={documents[0].document}/> */}

          <Suspense fallback={<div> Please Wait... </div>}>
            <LazyEditor document={documents[0].document} />
          </Suspense>

          <div className=" w-full sm:w-3/3 border-l ">
            <Canvas />
          </div>
        </div>
      </form>
    </main>
  );
};

export default SaveForm