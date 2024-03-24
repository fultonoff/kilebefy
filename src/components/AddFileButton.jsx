
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createDocument } from "@/actions/createDocument";
import { getCurrentUser } from "@/actions/currentUser";
import { getUser } from "@/lib/getUser";
import { AddButton } from "./AddButton";

export async function AddFileButton() {

  const user = await getUser()
  const currentUser = await getCurrentUser(user?.$id)
    

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='my-10 flex items-center gap-1'>
            <Plus/>
            <span>Add File</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new File</DialogTitle>
          <DialogDescription>
            Add your file's name. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          <form className=" flex flex-col gap-4" action={createDocument}>
            <div className="flex flex-col gap-2 items-start">
            <Label htmlFor="username" className="text-right">
              File Name
            </Label>
            <Input
              id="username"
              type='text'
              defaultValue="Untitled File"
              required
              name='name'
              className="col-span-3"
            />
            <input type="hidden" name='userId' value={currentUser.$id}/>


            </div>
          <AddButton type="submit">Add File</AddButton>
          </form>
        </div>
        
      </DialogContent>
    </Dialog>
  )
}
