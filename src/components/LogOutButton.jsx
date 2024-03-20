"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import {Loader2} from 'lucide-react'

export const LogOutButton = ({ children }) => {
  const { pending, error } = useFormStatus();
  return (
    <>{pending ? <Button variants='outline' size='sm' className='w-full bg-destructive' disabled> <Loader2 className="h-4 w-4 animate-spin mr-2"/> {children}</Button > : <Button className='w-full' variant='destructive' type='submit' size='sm'>{children}</Button>}</>
  );
};
