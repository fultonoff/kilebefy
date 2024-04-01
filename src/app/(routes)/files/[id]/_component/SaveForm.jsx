'use client'

import { SaveButton } from '@/components/SaveButton'
import { Input } from '@/components/ui/input'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import Link from "next/link";

import { updateFile } from "@/actions/updateFile";
import Canvas from "@/components/Canvas";
import { Resizable } from "@/components/Resizable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import DeleteFileDialog from "@/components/DeleteFileDialog";
const LazyEditor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});
import Editor from '@/components/editor/Editor'

const SaveForm = ({ documents }) => {
  async function handleUpdateFile(formData) {
    const updating = toast.loading("Saving...");
    const res = await updateFile(formData);
    toast.dismiss(updating);

    console.log(typeof window);

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
          <input type="hidden" name="documentId" value={documents[0]?.$id} />
          <div className="flex gap-2 items-center w-fit">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              className="w-fit text-2xl font-bold"
              defaultValue={documents[0]?.name}
            />
          </div>

          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/files">Files</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <p href="/docs/components">{documents[0].name}</p>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-1">
            <SaveButton>Save</SaveButton>

            <DeleteFileDialog fileId={documents[0]?.$id}/>
          </div>
        </div>
        <Resizable
          left={
            <Suspense fallback={<div> Please Wait... </div>}>
              <Editor document={documents[0].document} />
            </Suspense>
            
          }
          right={
            <div className="h-full w-full border-l ">
              <Canvas whiteboardData={documents[0]?.whiteboard} />
            </div>
          }
        />
      </form>
    </main>
  );
};

export default SaveForm