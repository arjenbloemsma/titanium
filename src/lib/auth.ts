import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"

const getGithubCredentials = () => {
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_ID.length) {
    throw new Error('GITHUB_CLIENT_ID is not set')
  }
  if (!GITHUB_CLIENT_SECRET || !GITHUB_CLIENT_SECRET.length) {
    throw new Error('GITHUB_CLIENT_SECRET is not set')
  }
  return {
    clientId: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: 'login',
  },
  providers: [
    GithubProvider({
      ...getGithubCredentials(),
    })
  ],
}
