"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import {Loader2} from 'lucide-react'

export const SubmitButton = ({ children, loading }) => {
  const { pending, error } = useFormStatus();
  return (
    <>{loading ? <Button disabled> <Loader2 className="h-4 w-4 animate-spin mr-2"/> {children}</Button> : <Button>{children}</Button>}</>
  );
};

 