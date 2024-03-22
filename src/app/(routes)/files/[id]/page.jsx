import { Input } from "@/components/ui/input";
import React from "react";
import Editor from "@/components/editor/Editor";
import dynamic from 'next/dynamic'
const LazyEditor = dynamic(() => import('@/components/editor/Editor'), { ssr: false })

const SinglePage = () => {
  return (
    <main className="mt-10 border rounded-sm p-2">
      <Input type="text" placeholder="Title" className='max-w-[300px]'/>

      <div className="grid grid-cols-1 w-full sm:grid-cols-2">
        {/* Editor */}
        <LazyEditor/>

        <div>Whiteboard</div>
      </div>
    </main>
  )
}

export default SinglePage