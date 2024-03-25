"use client";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";
import DateFormatter from "./DateFormatter";
import { File, EllipsisVertical, FileX2 } from "lucide-react";
import NoFilesToDisplay from "./NoFilesToDisplay";


const UserHorizontalCards = ({ userFiles }) => {


 
  if(userFiles.length === 0){
    return (

  <NoFilesToDisplay/>

    )
  }
  return (

    <div className=" w-full overflow-x-hidden">
      <h3 className="mt-2">Recently Added</h3>
    <ScrollContainer
      className="flex gap-4 items-center mt-5  w-full"
      horizontal
      vertical={false}
    >
      {userFiles.map((file) => (
        <Link
          href={`/files/${file.$id}`}
          key={file.$id}
          className="bg-primary/10 flex flex-col justify-between rounded-md p-2 min-w-[200px] min-h-[150px] shadow"
        >
          <div className="flex items-center gap-1">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <File className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-bold text-xl">{file.name}</h2>
          </div>
          <div className="mt-10  h-full">
            <div className="text-xs  flex flex-col mt-auto">
              <span className="flex items-center gap-1">

              <p>Created: </p>
              <DateFormatter className="text-xs" date={file.$createdAt} />
              </span>
              <span className="flex items-center gap-1">
              <p>Updates: </p>
              <DateFormatter className="text-xs" date={file.$updatedAt} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </ScrollContainer>

    </div>
  );
};

export default UserHorizontalCards;
