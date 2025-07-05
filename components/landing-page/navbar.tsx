"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { navLinks } from "@/content/navbar";

type NavbarProps = {
  onSearch?: (query: string) => void;
};

export function Navbar({ onSearch }: NavbarProps) {
  const handleScrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo with Clarity text */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm transition-transform group-hover:scale-105">
            C
          </div>
          <Typography variant="large" className="font-bold">
            Clarity
          </Typography>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm px-4 hidden sm:inline-flex"
            asChild
          >
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button size="sm" className="rounded-full text-sm px-4" asChild>
            <Link href="/signin">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
