import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";

function page() {
  return (
    <div className="flex w-full h-screen items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <Image
              className="w-auto h-7 sm:h-8"
              width={100}
              height={100}
              src="https://merakiui.com/images/logo.svg"
              alt=""
            ></Image>
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Kedevs Login
          </p>

          <LoginForm />
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Forget Password?{" "}
          </span>

          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            change password
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
