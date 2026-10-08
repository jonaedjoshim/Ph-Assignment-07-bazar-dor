import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function requireAuth(callbackUrl: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const searchParams = new URLSearchParams({
      callbackUrl,
      reason: "auth-required",
    });

    redirect(`/signin?${searchParams.toString()}`);
  }

  return session;
}
