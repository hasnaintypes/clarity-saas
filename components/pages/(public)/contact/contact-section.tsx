"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-lg px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-medium lg:text-5xl">
                        Get in touch
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        Have a question or feedback? We&apos;d love to hear from you.
                    </p>
                </div>

                <form className="mt-10 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                                First name
                            </label>
                            <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                                Last name
                            </label>
                            <Input id="last-name" placeholder="Doe" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <Input
                            id="subject"
                            placeholder="How can we help?"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            placeholder="Tell us more about your question..."
                            className="min-h-32"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Send message
                    </Button>
                </form>
            </div>
        </section>
    )
}
