"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";
import { signInSchema, type SignInValues } from "@/lib/validations/auth";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInValues) {
    setLoading(true);

    try {
      const result = await signIn.email({
        email: values.email,
        password: values.password,
      });

      if (result.error) {
        toast.error(result.error.message || "ইমেইল অথবা পাসওয়ার্ড ভুল", {
          id: "signin-error",
        });
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে", {
        id: "signin-success",
      });

      router.push(callbackUrl);
      router.refresh();
    } catch {
      toast.error("সাইন ইন করতে সমস্যা হয়েছে", {
        id: "signin-error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit, () =>
          toast.error("ফর্মের তথ্য সঠিকভাবে পূরণ করুন", {
            id: "signin-validation",
          }),
        )}
        noValidate
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="signin-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            ইমেইল
          </label>

          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className="auth-input"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            পাসওয়ার্ড
          </label>

          <PasswordInput
            id="signin-password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            autoComplete="current-password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn mt-1 h-11 w-full rounded-lg border-0 bg-primary font-semibold text-white shadow-sm hover:bg-primary-hover"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "সাইন ইন"
          )}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-5 text-center text-sm text-foreground">
        অ্যাকাউন্ট নেই?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:underline"
        >
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
}
