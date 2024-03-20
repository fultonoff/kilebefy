"use client";

import { useState } from "react";
import { signInWithEmail } from "@/actions/authActions";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signInWithEmail(data.email, data.password);
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: "Password is Required" })}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <div className="text-sm flex gap-1 ml-auto">
        <Link href="/reset-password" className="font-bold text-xs underline">
          Forgot Password?
        </Link>
      </div>
      <SubmitButton loading={loading}>Log in</SubmitButton>
      <div className="text-sm flex gap-1 justify-center mt-10">
        <span className="text-muted-foreground">New to Kilebefy?</span>
        <Link href="/register" className="font-bold underline">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
