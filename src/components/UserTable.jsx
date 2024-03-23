
import { getCurrentUser } from "@/actions/currentUser";
import { getFiles } from "@/actions/getFiles";
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUser } from "@/lib/getUser";
import DateFormatter from "./DateFormatter";



const getUserFiles = async (userId) => {
  try {
    const files = await getFiles(userId);
    return files;
  } catch (error) {
    console.log(error);
  }
};

export async function UserTable() {
  const user = await getUser();
  const currentUser = await getCurrentUser(user?.$id);

  const userFiles = await getUserFiles(currentUser.$id);

  return (
    <Table className='overflow-hidden'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">NAME</TableHead>
          <TableHead>CREATED</TableHead>
          <TableHead>EDITED</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {userFiles?.documents.map((file) => (
            
          <TableRow key={file?.$id}>
            
            <TableCell className="font-medium">
            <Link href={'/'}>
              
              {file?.name}
            
            </Link>
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <DateFormatter date={file.$createdAt}/>
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              <DateFormatter date={file.$updatedAt}/>

            </TableCell>
            
          </TableRow>
          
          
        ))}
      
      </TableBody>
    </Table>
  );
}
