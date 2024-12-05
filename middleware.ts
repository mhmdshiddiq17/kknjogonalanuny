// import { NextRequest, NextResponse } from 'next/server';
// import { isAuthenticated } from '@/lib/jwtTokenControl';

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/dashboard',
//     '/login',
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// };

// export async function middleware(request: NextRequest) {
//   const result = await isAuthenticated(request);
//   const loginUrl = new URL('/login', request.url);
//   const dashboardUrl = new URL('/dashboard', request.url); // URL untuk dashboard
//   const nextUrl = request.nextUrl;
//   console.log(nextUrl);
//   console.log(result);
//   // Jika tidak terotentikasi dan mencoba mengakses halaman login
//   // if (!result && request.nextUrl.pathname === '/login') {
//   //   return NextResponse.next(); // Biarkan akses ke halaman login
//   // }

//   // // Jika terotentikasi dan mencoba mengakses halaman login
//   if (result && nextUrl.href === 'http://localhost:3000/login') {
//     return NextResponse.redirect(dashboardUrl); // Alihkan ke dashboard
//   }
//   // if (result && request.nextUrl.pathname === '/dashboard') {
//   //   return NextResponse.redirect(dashboardUrl); // Alihkan ke dashboard
//   // }

//   // // Jika tidak terotentikasi dan mencoba mengakses dashboard
//   // if (!result && request.nextUrl.pathname === '/dashboard') {
//   //   return NextResponse.redirect(loginUrl); // Alihkan ke login
//   // }

//   // Jika terotentikasi, lanjutkan ke halaman yang diminta
//   return NextResponse.next();
// }

import NextAuth from "next-auth";
import { authConfig } from "@/lib/authConfig";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};