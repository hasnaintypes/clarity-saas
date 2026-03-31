import Link from "next/link";
import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh flex-col bg-background">
      <div className="flex justify-start p-6 md:p-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 pb-12">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
