import Link from "next/link";
import { FaPenToSquare } from "react-icons/fa6";

interface ProfileInformationProps {
  name: string;
  email: string;
}

export default function ProfileInformation({
  name,
  email,
}: ProfileInformationProps) {
  return (
    <section className="surface-card p-5 sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-foreground">ব্যক্তিগত তথ্য</h2>

        <Link
          href="/profile/update"
          className="btn btn-sm border-0 bg-primary text-white hover:bg-primary-hover"
        >
          <FaPenToSquare size={13} />
          তথ্য আপডেট
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm text-muted">নাম</p>

          <div className="rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm font-medium text-foreground">
            {name}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-muted">ইমেইল</p>

          <div className="break-all rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm font-medium text-foreground">
            {email}
          </div>
        </div>
      </div>
    </section>
  );
}
