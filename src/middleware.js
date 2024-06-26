// middleware.ts

export { default } from "next-auth/middleware";

export const config = {
  //matcher: ["/home/:path*", "/cursos/:path*"], //Proteger todas las rutas despues de
  matcher: ["/((?!login).*)"], //Proteger todo menos admin
};
