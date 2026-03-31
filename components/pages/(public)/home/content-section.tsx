import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Turn raw feedback into clear, actionable product decisions.</h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground">Clarity goes beyond simple surveys. Our AI engine processes every response to detect sentiment, extract topics, score priority, and filter spam  automatically.</p>
                        <p className="text-muted-foreground">
                            Whether you&apos;re a solo founder or a growing team, <span className="text-foreground font-medium">Clarity gives you the tools to listen at scale</span>  embeddable widgets, real-time dashboards, workflow automations, and integrations with the tools you already use.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="/sign-up">
                                <span>Get Started</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
