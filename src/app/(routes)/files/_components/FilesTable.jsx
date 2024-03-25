"use client";

import DateFormatter from "@/components/DateFormatter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Ellipsis, Eye, FilePenLine, Trash } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DeleteForm from "@/components/DeleteForm";
import NoFilesToDisplay from "@/components/NoFilesToDisplay";

const FilesTable = ({ files }) => {
  const router = useRouter();
  if(files.documents.length === 0){
    return(
      <NoFilesToDisplay/>
    )
  }else{


    return (
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
          <thead className="text-left">
            <tr className="font-bold">
              <th className="whitespace-nowrap py-2">Name</th>
              <th className="whitespace-nowrap py-2 ">Created</th>
              <th className="whitespace-nowrap py-2 ">Updated</th>
              <th className="whitespace-nowrap py-2 ">Salary</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
  
          <tbody className="divide-y divide-gray-200">
            {files.documents.length > 0 &&
              files.documents.map((item) => (
                <tr key={item.$id} className="">
                  <td
                    className="whitespace-nowrap  py-2 font-bold dark:text-white cursor-pointer"
                    onClick={() => router.push(`/files/${item.$id}`)}
                  >
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap py-2 text-gray-700">
                    <DateFormatter date={item.$createdAt} />{" "}
                  </td>
                  <td className="whitespace-nowrap py-2 text-gray-700">
                    <DateFormatter date={item.$updatedAt} />{" "}
                  </td>
                  <td className="whitespace-nowrap  py-2 text-gray-700">
                    $120,000
                  </td>
  
                  <td className="whitespace-nowrap py-2">
                    <DropdownMenu className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <DropdownMenuTrigger className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Ellipsis className="text-primary" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>{item?.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
  
                        <DropdownMenuItem className="">
                          <Link
                            href={`/files/${item.$id}`}
                            className="flex items-center gap-2"
                          >
                            <Eye className="size-5" />
                            <span>Open</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="">
                          <Link
                            href={`/files/${item.$id}`}
                            className="flex items-center gap-2"
                          >
                            <FilePenLine className="size-5" />
                            <span>Edit</span>
                          </Link>
                        </DropdownMenuItem>
                     
                        <DeleteForm fileId={item.$id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );

  }
};

export default FilesTable;
