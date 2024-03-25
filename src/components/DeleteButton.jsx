"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import {Loader2, Trash} from 'lucide-react'


export const DeleteButton = ({ children }) => {
  const { pending, error } = useFormStatus();
  return (
    <>{pending ? <Button variant='destructive' size='sm' className='w-full ' disabled> <Loader2 className="h-4 w-4 animate-spin mr-2"/> {children}</Button > : <Button variant='destructive' className='w-full flex items-center gap-2'  type='submit' size='sm'>
        <Trash className="size-5" />
        {children}
    
    </Button>}</>
  );
};