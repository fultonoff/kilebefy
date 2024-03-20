'use client'
import { SubmitButton } from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import { getResetPasswordLink } from '@/actions/createPasswordRecovery';
import toast from 'react-hot-toast'

const RecoverForm = () => {

    const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data)=> {
    setLoading(true);
    try {
    const result = await  getResetPasswordLink(data.email)
    if (result?.error) {
      toast.error(result.error);
    }
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false);
    }
    
  
  };
  return (
    <>
    <h2 className='text-base mt-5'>Enter your Email address</h2>
    <form
      className="sm:w-1/3 w-full mt-10 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>
     
      <SubmitButton loading={loading}>Submit</SubmitButton>
      <div className="text-sm flex gap-1 justify-center mt-10">
        <span className="text-muted-foreground">Don't Have an Account?</span>
        <Link href="/register" className="font-bold underline">
          Register
        </Link>
      </div>
    </form>
    
    </>
  )
}

export default RecoverForm