import "server-only";
import { db } from "@/lib/mongodb";

type AuthProvider = "credential" | "google" | "github";

interface UserRecord {
  userId: string;
  name: string;
  email: string;
  image?: string | null;
}

const collections: Record<AuthProvider, string> = {
  credential: "email-users",
  google: "google-users",
  github: "github-users",
};

export async function syncAuthUser(provider: string, user: UserRecord) {
  if (!(provider in collections)) {
    return;
  }

  const collectionName = collections[provider as AuthProvider];

  await db.collection(collectionName).updateOne(
    { userId: user.userId },
    {
      $set: {
        name: user.name,
        email: user.email,
        image: user.image || null,
        provider,
        updatedAt: new Date(),
      },
      $setOnInsert: {
        userId: user.userId,
        createdAt: new Date(),
      },
    },
    { upsert: true },
  );
}

export async function syncUpdatedUser(user: UserRecord) {
  await db.collection("updated-users").updateOne(
    { userId: user.userId },
    {
      $set: {
        name: user.name,
        email: user.email,
        image: user.image || null,
        updatedAt: new Date(),
      },
      $setOnInsert: {
        userId: user.userId,
        createdAt: new Date(),
      },
    },
    { upsert: true },
  );
}
