"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { z } from "zod";

// type LoginFormInputs = z.infer<typeof loginSchema>;
interface LoginFormInputs {
  username: string;
  password: string;
}

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "kedevs",
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    // TODO: add debounce in error messages
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    res?.ok ? router.push("/") : console.log("Error");
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mt-4">
        <label className="block text-sm text-gray-800 dark:text-gray-200">
          Username
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder="Username"
          aria-label="Email Address"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm text-gray-800 dark:text-gray-200">
          Password
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          placeholder="****"
          aria-label="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="w-full flex justify-center py-2">
        <button
          type="submit"
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
