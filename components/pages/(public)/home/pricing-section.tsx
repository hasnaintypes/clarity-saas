import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <section id="pricing" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Simple pricing, powerful feedback</h2>
                </div>
                <div className="mt-8 md:mt-16">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Pro Plan</h3>
                                <p className="mt-2 text-lg text-muted-foreground">Everything you need to scale feedback</p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>29
                                </span>
                                <span className="text-muted-foreground">/month</span>

                                <div className="mt-8 flex justify-center">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="/sign-up">Get Started</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-8 text-sm">Includes AI processing, unlimited forms, team collaboration, and priority support.</p>
                            </div>
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {[
                                        'Unlimited feedback forms',
                                        '10,000 responses per month',
                                        'AI sentiment analysis & spam filtering',
                                        'Custom branding & white-label',
                                        'Team collaboration & roles',
                                        'Webhook & API integrations',
                                        'Priority email support',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3 text-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-6 text-sm">Works seamlessly with the tools you already use:</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['Slack', 'Jira', 'Notion', 'Zapier', 'Webhooks'].map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
