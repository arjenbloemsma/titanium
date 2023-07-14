import { z } from 'zod'

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app
 * isn't built with invalid env vars.
 */
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  GITHUB_CLIENT_ID: z.string().min(1, 'GITHUB_CLIENT_ID is required'),
  GITHUB_CLIENT_SECRET: z.string().min(1, 'GITHUB_CLIENT_SECRET is required'),
  AUTH0_CLIENT_ID: z.string().min(1, 'AUTH0_CLIENT_ID is required'),
  AUTH0_CLIENT_SECRET: z.string().min(1, 'AUTH0_CLIENT_SECRET is required'),
  AUTH0_ISSUER: z.url(),
  DATABASE_HOST: z.string().min(1, 'DATABASE_HOST is required'),
  DATABASE_USERNAME: z.string().min(1, 'DATABASE_USERNAME is required'),
  DATABASE_PASSWORD: z.string().min(1, 'DATABASE_PASSWORD is required'),
  DATABASE_URL: z
    .string()
    .min(1, 'DATABASE_URL is required')
    .startsWith('mysql://'),
  // NEXTAUTH_SECRET:
  //   process.env.NODE_ENV === "production"
  //     ? z.string().min(1)
  //     : z.string().min(1).optional(),
  // NEXTAUTH_URL: z.preprocess(
  //   // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
  //   // Since NextAuth.js automatically uses the VERCEL_URL if present.
  //   (str) => process.env.VERCEL_URL ?? str,
  //   // VERCEL_URL doesn't include `https` so it cant be validated as a URL
  //   process.env.VERCEL ? z.string().min(1) : z.string().url()
  // ),
})

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 */
export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER: process.env.AUTH0_ISSUER,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_URL: process.env.DATABASE_URL,
})
