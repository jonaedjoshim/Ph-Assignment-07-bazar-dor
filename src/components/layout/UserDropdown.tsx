"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaChevronDown,
  FaArrowRightFromBracket,
  FaUser,
} from "react-icons/fa6";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";

interface UserDropdownProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      const result = await signOut();

      if (result.error) {
        toast.error(result.error.message || "সাইন আউট করা যায়নি", {
          id: "signout-error",
        });
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে", {
        id: "signout-success",
      });

      router.push("/");
      router.refresh();
    } catch {
      toast.error("সাইন আউট করতে সমস্যা হয়েছে", {
        id: "signout-error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-surface-muted"
      >
        <div className="avatar">
          <div className="h-9 w-9 rounded-lg bg-surface-muted">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={36}
                height={36}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                <FaUser size={16} />
              </div>
            )}
          </div>
        </div>

        <span className="hidden max-w-28 truncate text-sm font-medium text-foreground sm:block">
          {user.name}
        </span>

        <FaChevronDown size={10} className="hidden text-muted sm:block" />
      </button>

      <div
        tabIndex={0}
        className="dropdown-content z-50 mt-3 w-64 rounded-2xl border border-border bg-white p-4 shadow-lg"
      >
        <div className="border-b border-border pb-3">
          <p className="truncate text-sm font-semibold text-foreground">
            {user.name}
          </p>

          <p className="mt-1 truncate text-xs text-muted">{user.email}</p>
        </div>

        <div className="mt-2 space-y-1">
          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-muted"
          >
            <FaUser size={14} className="text-muted" />
            আমার প্রোফাইল
          </Link>

          <button
            type="button"
            disabled={loading}
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-sm text-danger transition-colors hover:bg-red-50 disabled:opacity-50"
          >
            {loading ? (
              <span className="loading loading-spinner loading-xs" />
            ) : (
              <FaArrowRightFromBracket size={14} />
            )}
            সাইন আউট
          </button>
        </div>
      </div>
    </div>
  );
}
