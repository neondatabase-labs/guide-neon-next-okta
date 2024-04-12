import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Okta],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
