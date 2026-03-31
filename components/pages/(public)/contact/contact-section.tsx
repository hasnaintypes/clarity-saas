"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-medium lg:text-5xl">
                        Get in touch
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Have a question, feedback, or want to learn more about Clarity? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="mt-12 grid gap-12 md:grid-cols-5">
                    <div className="space-y-8 md:col-span-2">
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Contact info</h2>
                            <p className="text-sm text-muted-foreground">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Email</p>
                                    <a
                                        href="mailto:support@clarity.app"
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        support@clarity.app
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                                    <Phone className="size-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                                    <MapPin className="size-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Office</p>
                                    <p className="text-sm text-muted-foreground">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 md:col-span-3">
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

                        <div className="grid gap-4 sm:grid-cols-2">
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
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone number
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (234) 567-890"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell us how we can help..."
                                className="min-h-32"
                                required
                            />
                        </div>

                        <div className="flex items-start gap-2">
                            <Checkbox id="terms" className="mt-0.5" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-muted-foreground"
                            >
                                I agree to the{" "}
                                <a href="#" className="underline underline-offset-4 hover:text-foreground">
                                    privacy policy
                                </a>{" "}
                                and consent to being contacted.
                            </label>
                        </div>

                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                            Send message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
