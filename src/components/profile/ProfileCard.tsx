"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      const result = await signOut();

      if (result.error) {
        toast.error(result.error.message || "সাইন আউট করা যায়নি", {
          id: "profile-signout-error",
        });
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে", {
        id: "profile-signout-success",
      });

      router.push("/");
      router.refresh();
    } catch {
      toast.error("সাইন আউট করতে সমস্যা হয়েছে", {
        id: "profile-signout-error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="surface-card flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex min-w-0 items-center gap-4">
        <div className="avatar shrink-0">
          <div className="h-18 w-18 rounded-2xl bg-surface-muted">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={72}
                height={72}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                <FaUser size={28} />
              </div>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-foreground">
            {user.name}
          </h2>

          <p className="mt-1 truncate text-sm text-muted">{user.email}</p>
        </div>
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={handleSignOut}
        className="btn btn-outline btn-error self-start sm:self-center"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          <FaArrowRightFromBracket size={15} />
        )}
        সাইন আউট
      </button>
    </section>
  );
}
