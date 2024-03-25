import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { AlertDialogHeader } from './ui/alert-dialog'
import DeleteForm from './DeleteForm'




const DeleteFileDialog = ({fileId}) => {


  return (
    <Dialog>
    <DialogTrigger asChild>
<Button variant="destructive">Delete File</Button>
</DialogTrigger>

<DialogContent className="sm:max-w-[425px]">
<AlertDialogHeader>
  <DialogTitle>Delete File</DialogTitle>
  <DialogDescription>
   Are you sure, you want to delete this file?
  </DialogDescription>
</AlertDialogHeader>

<DialogFooter>
  {/* <DeleteButton>Delete File</DeleteButton> */}
  <DeleteForm fileId={fileId}/>
</DialogFooter>
</DialogContent>
    </Dialog>
  )
}

export default DeleteFileDialog