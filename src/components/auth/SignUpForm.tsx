"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";
import { signUpSchema, type SignUpValues } from "@/lib/validations/auth";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: SignUpValues) {
    setLoading(true);

    try {
      const result = await signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (result.error) {
        toast.error(result.error.message || "অ্যাকাউন্ট তৈরি করা যায়নি", {
          id: "signup-error",
        });
        return;
      }

      toast.success("অ্যাকাউন্ট তৈরি হয়েছে। এখন সাইন ইন করুন", {
        id: "signup-success",
      });

      router.push("/signin");
      router.refresh();
    } catch {
      toast.error("অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে", {
        id: "signup-error",
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
            id: "signup-validation",
          }),
        )}
        noValidate
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="signup-name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            নাম
          </label>

          <input
            id="signup-name"
            type="text"
            placeholder="যেমন: রহিম উদ্দিন"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
            className="auth-input"
          />

          {errors.name && (
            <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            ইমেইল
          </label>

          <input
            id="signup-email"
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
            htmlFor="signup-password"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            পাসওয়ার্ড
          </label>

          <PasswordInput
            id="signup-password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            autoComplete="new-password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <div>
          <label
            htmlFor="signup-confirm-password"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            পাসওয়ার্ড নিশ্চিত করুন
          </label>

          <PasswordInput
            id="signup-confirm-password"
            placeholder="আবার লিখুন"
            autoComplete="new-password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
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
            "অ্যাকাউন্ট তৈরি করুন"
          )}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-5 text-center text-sm text-foreground">
        অ্যাকাউন্ট আছে?{" "}
        <Link
          href="/signin"
          className="font-medium text-primary hover:underline"
        >
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
}
