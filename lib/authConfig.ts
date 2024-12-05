export const authConfig = {
    providers:[],
    pages: {
      signIn: "/login",
    },
    callbacks: {
        // @ts-ignore
        authorized({auth, request: {nextUrl}}){
            const isLoggedIn = !!auth?.user;
            const ProtectedRoutes = ["/dashboard", "/dashboard/user", "/dashboard/product", "/dashboard/product/add"];
            if(!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)){
              return Response.redirect(new URL("/login", nextUrl));
            }
            if(isLoggedIn && nextUrl.pathname.startsWith("/login")){
              return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
          },
    },
  };