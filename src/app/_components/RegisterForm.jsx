"use client";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { signUpWithEmail } from "@/actions/authActions";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signUpWithEmail(
        data.email,
        data.repeatPassword,
        data.name
      );
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
        <Label>Full Name</Label>
        <Input
          type="text"
          placeholder="Full name"
          name="name"
          {...register("name", {
            required: "name is required",
            minLength: {
              value: 10,
              message: "The minimum length is 10 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>
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
      <SubmitButton loading={loading}>Register</SubmitButton>
      <div className="text-sm flex gap-1 justify-center mt-10">
        <span className="text-muted-foreground">Have an Account?</span>
        <Link href="/login" className="font-bold underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
