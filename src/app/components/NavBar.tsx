import LogoutButton from "@/app/components/LogoutButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/auth";

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          home
        </a>
        <a
          href="/cotizacion"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          cotizaciones
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          blog
        </a>

        {session?.user && (
          <span className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            user: {session.user.name}
          </span>
        )}

        <a
          href="/login"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        ></a>

        <LogoutButton />
      </div>
    </nav>
  );
}
