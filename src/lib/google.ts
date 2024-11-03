/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      if (account) {
        token.accessToken = account.access_token;

        // Check if user exists in the database
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        console.log("existingUser", existingUser);

        // If user doesn't exist, create a new user
        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
            },
          });

          console.log("newUser", existingUser);
        }

        token.userId = existingUser.id;

        console.log("token", token);
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.accessToken = token.accessToken;
      session.userId = token.userId;
      return session;
    },
  },
};
