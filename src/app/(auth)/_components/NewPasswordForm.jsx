'use client'

import { SubmitButton } from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/newPassword';
import toast from "react-hot-toast";



const NewPasswordForm = () => {
    const [loading, setLoading] = useState(false);
    const param = useSearchParams()
    const userId = param.get('userId')
    const secret = param.get('secret')

    console.log(secret);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const password = data.password
    const repeatPassword = data.repeatPassword
    // console.log(data);

    const userData = {
        userId,
        secret,
        password,
        repeatPassword
    }

    setLoading(true);
    try {
      const result= await newPassword(userId, secret, password, repeatPassword)

        if (result?.error) {
            toast.error(result.error);
          }
    } catch (error) {
      console.log(error);
        
    }finally{
        setLoading(false);
    }
  }
  return (
    <form
      className="sm:w-1/3 w-full mt-10 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
    
      
      <div>
        <Label>New Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>
      <div>
        <Label>Repeat Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...register("repeatPassword", {
            required: "This field is Required",
            validate: (value) => {
              const { password } = getValues();
              return password === value || "Password should match";
            },
          })}
        />
        {errors.repeatPassword && (
          <p className="text-xs text-destructive">
            {errors.repeatPassword.message}
          </p>
        )}
      </div>
      <SubmitButton loading={loading}>Submit</SubmitButton>
      
    </form>
  )
}

export default NewPasswordForm