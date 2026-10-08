import "server-only";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { ObjectId } from "mongodb";
import { db } from "@/lib/mongodb";
import { syncAuthUser, syncUpdatedUser } from "@/lib/user-sync";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

export const auth = betterAuth({
  appName: "Bazar Dor",

  baseURL: process.env.BETTER_AUTH_URL,

  secret: process.env.BETTER_AUTH_SECRET,

  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8,
  },

  socialProviders: {
    ...(googleClientId && googleClientSecret
      ? {
          google: {
            clientId: googleClientId,
            clientSecret: googleClientSecret,
          },
        }
      : {}),

    ...(githubClientId && githubClientSecret
      ? {
          github: {
            clientId: githubClientId,
            clientSecret: githubClientSecret,
          },
        }
      : {}),
  },

  databaseHooks: {
    account: {
      create: {
        after: async (account) => {
          if (!ObjectId.isValid(account.userId)) {
            return;
          }

          const user = await db.collection("user").findOne({
            _id: new ObjectId(account.userId),
          });

          if (!user) {
            return;
          }

          await syncAuthUser(account.providerId, {
            userId: String(account.userId),
            name: String(user.name || ""),
            email: String(user.email || ""),
            image: typeof user.image === "string" ? user.image : null,
          });
        },
      },
    },

    user: {
      update: {
        after: async (user) => {
          await syncUpdatedUser({
            userId: String(user.id),
            name: user.name,
            email: user.email,
            image: user.image,
          });
        },
      },
    },
  },

  plugins: [nextCookies()],
});
