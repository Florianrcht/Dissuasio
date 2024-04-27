import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/', '/unites', '/opex', '/actualites'],
  ignoredRoutes: ['/no-auth-in-this-route','/api/(.*)'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};