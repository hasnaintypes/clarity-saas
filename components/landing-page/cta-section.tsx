import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ctaContent } from "@/content/cta"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Typography variant="h2" className="mb-6 border-none">
            {ctaContent.title}
          </Typography>
          <Typography variant="lead" className="mx-auto max-w-2xl mb-10">
            {ctaContent.description}
          </Typography>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href={ctaContent.buttons.primary.href}>
                {ctaContent.buttons.primary.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link href={ctaContent.buttons.secondary.href}>{ctaContent.buttons.secondary.text}</Link>
            </Button>
          </div>
          <Typography variant="small" className="text-muted-foreground">
            {ctaContent.note}
          </Typography>
        </div>
      </div>
    </section>
  )
}
