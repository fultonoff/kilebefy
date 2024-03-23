'use client'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Link from 'next/link'
import DateFormatter from './DateFormatter'
import { File, EllipsisVertical } from "lucide-react";



const UserHorizontalCards = ({userFiles}) => {
    console.log(userFiles);
  return (
      
          <ScrollContainer className="flex gap-4 items-center mt-5" horizontal vertical={false}>
    {userFiles.map((file) => (
        
        <Link href={`/files/${file.$id}`}
        key={file.$id}
        className="bg-accent rounded-md p-2 min-w-[250px] min-h-[200px] shadow"
        >
        <div className="flex items-center gap-1">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <File className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
        <h2 className="font-bold text-xl">{file.name}</h2>
          
        </div>
        <div className="mt-10  h-full">
        
          <div className="text-xs mt-5">
            <DateFormatter className="text-xs" date={file.$createdAt} />
            <DateFormatter className="text-xs" date={file.$updatedAt} />
          </div>


        </div>
        
      </Link>


))}
</ScrollContainer>
 
  )
}

export default UserHorizontalCards