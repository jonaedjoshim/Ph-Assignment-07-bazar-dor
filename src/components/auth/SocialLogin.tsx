"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";

type SocialProvider = "google" | "github";

export default function SocialLogin() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<SocialProvider | null>(null);

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function handleSocialLogin(provider: SocialProvider) {
    setLoading(provider);

    try {
      const result = await signIn.social({
        provider,
        callbackURL: callbackUrl,
      });

      if (result.error) {
        toast.error(result.error.message || "সোশ্যাল লগইন ব্যর্থ হয়েছে", {
          id: "social-login-error",
        });
        setLoading(null);
      }
    } catch {
      toast.error("সোশ্যাল লগইন করতে সমস্যা হয়েছে", {
        id: "social-login-error",
      });
      setLoading(null);
    }
  }

  return (
    <div>
      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted">অথবা</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          disabled={loading !== null}
          onClick={() => handleSocialLogin("google")}
          className="auth-social-btn"
        >
          {loading === "google" ? (
            <span className="loading loading-spinner loading-xs" />
          ) : (
            <FcGoogle size={18} />
          )}

          <span>Google দিয়ে লগইন</span>
        </button>

        <button
          type="button"
          disabled={loading !== null}
          onClick={() => handleSocialLogin("github")}
          className="auth-social-btn"
        >
          {loading === "github" ? (
            <span className="loading loading-spinner loading-xs" />
          ) : (
            <FaGithub size={17} />
          )}

          <span>GitHub দিয়ে লগইন</span>
        </button>
      </div>
    </div>
  );
}
