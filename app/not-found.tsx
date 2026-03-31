import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center bg-background px-6 text-center">
      <div className="flex items-center gap-4">
        <span className="text-8xl font-bold md:text-9xl">4</span>
        <Image
          src="/not-found-light.png"
          alt="Page not found"
          width={400}
          height={300}
          className="block h-auto w-40 dark:hidden md:w-52"
          priority
        />
        <Image
          src="/not-found-dark.png"
          alt="Page not found"
          width={400}
          height={300}
          className="hidden h-auto w-40 dark:block md:w-52"
          priority
        />
        <span className="text-8xl font-bold md:text-9xl">4</span>
      </div>
      <h1 className="mt-6 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
