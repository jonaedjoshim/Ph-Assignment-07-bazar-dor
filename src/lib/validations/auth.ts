import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("সঠিক ইমেইল ঠিকানা লিখুন"),
  password: z.string().min(1, "পাসওয়ার্ড লিখুন"),
});

export const signUpSchema = z
  .object({
    name: z.string().trim().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
    email: z.email("সঠিক ইমেইল ঠিকানা লিখুন"),
    password: z.string().min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে"),
    confirmPassword: z.string().min(1, "পাসওয়ার্ড নিশ্চিত করুন"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "পাসওয়ার্ড দুটি মিলছে না",
    path: ["confirmPassword"],
  });

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
