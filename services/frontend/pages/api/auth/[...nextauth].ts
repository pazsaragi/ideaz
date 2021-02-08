import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next-auth/_utils";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.NEXTAUTH_GITHUB_ID as string,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET as string,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};

const Auth = (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, options);

export default Auth;
