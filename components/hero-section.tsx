import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/hero";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Improved Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-8 dark:from-blue-950 dark:to-indigo-950 dark:border-blue-800">
            <Sparkles className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold">
              {heroContent.badge.text}
            </span>
          </div>

          {/* Heading */}
          <Typography
            variant="h1"
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6"
          >
            {heroContent.title.main}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {heroContent.title.highlight}
            </span>
          </Typography>

          {/* Description */}
          <Typography variant="lead" className="mx-auto max-w-2xl mb-10">
            {heroContent.description}
          </Typography>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href={heroContent.buttons.primary.href}>
                {heroContent.buttons.primary.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link
                href={heroContent.buttons.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {heroContent.buttons.secondary.text}
              </Link>
            </Button>
          </div>

          {/* Dashboard Preview - Hidden on mobile */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="relative rounded-xl border bg-muted/50 p-2 shadow-2xl">
              <Image
                src={heroContent.image.src || "/placeholder.svg"}
                alt={heroContent.image.alt}
                width={1200}
                height={800}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
