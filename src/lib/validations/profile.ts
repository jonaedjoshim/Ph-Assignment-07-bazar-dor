import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে")
    .max(60, "নাম সর্বোচ্চ ৬০ অক্ষরের হতে পারবে"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
