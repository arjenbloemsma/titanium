import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0"

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

const getAuth0Credentials = () => {
  const { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_ISSUER } = process.env
  if (!AUTH0_CLIENT_ID || !AUTH0_CLIENT_ID.length) {
    throw new Error('AUTH0_CLIENT_ID is not set')
  }
  if (!AUTH0_CLIENT_SECRET || !AUTH0_CLIENT_SECRET.length) {
    throw new Error('AUTH0_CLIENT_SECRET is not set')
  }
  if (!AUTH0_ISSUER || !AUTH0_ISSUER.length) {
    throw new Error('AUTH0_ISSUER is not set')
  }
  return {
    clientId: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    issuer: AUTH0_ISSUER,
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: 'login',
  },
  providers: [
    GithubProvider({
      ...getGithubCredentials(),
    }),
    Auth0Provider({
      ...getAuth0Credentials(),
    }),
  ],
}
