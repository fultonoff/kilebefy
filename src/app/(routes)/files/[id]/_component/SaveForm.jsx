'use client'

import { SaveButton } from '@/components/SaveButton'
import { Input } from '@/components/ui/input'
import React, { Suspense } from 'react'
import Editor from '@/components/editor/Editor'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'

import { updateFile } from '@/actions/updateFile'
const LazyEditor = dynamic(() => import('@/components/editor/Editor'), { ssr: false })

const SaveForm = ({documents}) => {

    async function handleUpdateFile(formData){

        const updating = toast.loading('Saving...')
        const res = await updateFile(formData)
        toast.dismiss(updating)

        if(res?.error){
            toast.error(res.error)
        }else{
            toast.success('Saved successfully')
        }

    }
  
        return (
          <main className="mt-10 border rounded-sm p-2">
            <form action={handleUpdateFile}>
    
    
            <div className='flex p-2 items-center justify-between' >
              <input type="hidden" name='documentId' value={documents[0].$id}/>
            <Input type="text" name='title' placeholder="Title" className='max-w-[300px]' defaultValue={documents[0].name}/>
            <SaveButton>Save</SaveButton>
    
    
            </div>
      
            <div className="grid grid-cols-1 w-full sm:grid-cols-2">
              {/* <Editor document={documents[0].document}/> */}
    
              <Suspense fallback = { <div> Please Wait... </div> }>
    
              <LazyEditor document={documents[0].document}/>
    
              </Suspense>
      
              <div>Whiteboard</div>
            </div>
            </form>
          </main>
        )
    
}

export default SaveForm