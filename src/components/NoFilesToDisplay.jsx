import {FileX2} from 'lucide-react'
const NoFilesToDisplay = () => {
  return (
    <div className="border w-full mt-2 rounded-md border-dashed border-primary/40 min-h-[200px] flex flex-col gap-2 items-center justify-center">
    
    <div className="bg-primary/20 p-4 rounded-full">
    <FileX2 className="h-10 w-10 text-primary"/>

    </div>
    <div>
      No files to Show, Please add a new File
    </div>

  </div>
  )
}

export default NoFilesToDisplay