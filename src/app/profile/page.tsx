import Link from "next/link";
import { requireAuth } from "@/lib/require-auth";

export default async function ProfilePage() {
  const session = await requireAuth("/profile");

  return (
    <div className="container-custom py-12">
      <div className="surface-card mx-auto max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-foreground">আমার প্রোফাইল</h1>

        <p className="mt-4 text-foreground">{session.user.name}</p>

        <p className="mt-1 text-sm text-muted">{session.user.email}</p>

        <Link
          href="/"
          className="btn mt-6 border-0 bg-primary text-white hover:bg-primary-hover"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
