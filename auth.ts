import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter" 
import {prisma} from './lib/prisma'
import Credentials from "next-auth/providers/credentials"
import { SignInSchema } from "./lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, signIn, signOut, auth } = NextAuth({
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  session: {strategy:"jwt"},
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      // @ts-ignore
      authorize: async(credentials) => {
        const validatedField = SignInSchema.safeParse(credentials);
        if(!validatedField.success){
          return null;
        }

        const {email, password} = validatedField.data;
        const user = await prisma.user .findUnique({
          where: {email}
        })
        if(!user || !user.password){
          throw new Error("User not found");
        }

        const passwordMatch = compareSync(password, user.password);
        if(!passwordMatch){
          return null
        }
        return user;
      },
    }),
  ],

  // callback
  callbacks: {
    authorized({auth, request: {nextUrl}}){
      const isLoggedIn = !!auth?.user;
      const ProtectedRoutes = ["/dashboard", "/user", "/product", "/product/add"];
      if(!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)){
        return Response.redirect(new URL("/login", nextUrl));
      }
      if(isLoggedIn && nextUrl.pathname.startsWith("/login")){
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    jwt({token, user}){
      if(user) token.role = user.role;
      return token;
    },
    session({session, token}){
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    }
  }
});