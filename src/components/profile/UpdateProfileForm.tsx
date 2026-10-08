"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { updateUser } from "@/lib/auth-client";
import {
  updateProfileSchema,
  type UpdateProfileValues,
} from "@/lib/validations/profile";

interface UpdateProfileFormProps {
  currentName: string;
}

export default function UpdateProfileForm({
  currentName,
}: UpdateProfileFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: currentName,
    },
  });

  async function onSubmit(values: UpdateProfileValues) {
    setLoading(true);

    try {
      const result = await updateUser({
        name: values.name.trim(),
      });

      if (result.error) {
        toast.error(result.error.message || "তথ্য আপডেট করা যায়নি", {
          id: "profile-update-error",
        });
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে", {
        id: "profile-update-success",
      });

      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("তথ্য আপডেট করতে সমস্যা হয়েছে", {
        id: "profile-update-error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () =>
        toast.error("সঠিকভাবে নাম লিখুন", {
          id: "profile-validation",
        }),
      )}
      noValidate
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="profile-name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          নাম
        </label>

        <input
          id="profile-name"
          type="text"
          placeholder="আপনার নাম লিখুন"
          autoComplete="name"
          {...register("name")}
          className="auth-input"
        />

        {errors.name && (
          <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn h-11 w-full border-0 bg-primary font-semibold text-white shadow-sm hover:bg-primary-hover"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          "তথ্য আপডেট করুন"
        )}
      </button>

      <Link href="/profile" className="btn btn-ghost w-full text-muted">
        বাতিল করুন
      </Link>
    </form>
  );
}
