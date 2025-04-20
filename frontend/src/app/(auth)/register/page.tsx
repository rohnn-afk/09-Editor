"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z
  .object({
    name: z.string({ message: " Name is required" }).min(3),
    email: z.string({ message: "Email is required" }).email(),
    password: z
      .string({ message: "Password is required" })
      .min(8, { message: "Mininum 8 characters required" })
      .max(25)
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string({ message: "Confirm password is required" })
      .min(8, { message: "Mininum 8 characters required" })
      .max(25),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });



const Registerpage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true)
  }

  return (
    <div className="lg:p-10 space-y-10">
      <h1 className="text-2xl text-semibold text-center">Create Account</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-md mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter your name.."
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter your registered email.."
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter a password "
                    {...field}
                    value={field.value ?? ""}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter your password again"
                    {...field}
                    value={field.value ?? ""}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="cursor-pointer" disabled={isLoading} type="submit">
            {isLoading ? ( <svg
            className="w-5 h-5 animate-spin "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="text-white" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
            />
          </svg>) : 'Submit'}
            </Button>
        </form>
      </Form>

      <div className="max-w-md mx-auto flex flex-row gap-2 drop-shadow-2xl">
        <p>Already a user ?</p>
        <Link href={'/login'} className="text-blue-500 font-bold hover:underline">
          Login 
        </Link>
      </div>
    </div>
  );
};

export default Registerpage;
