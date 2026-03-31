export default function FAQs() {
    return (
        <section className="scroll-py-12 py-12 md:scroll-py-20 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-muted-foreground">Everything you need to know about Clarity.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">How does Clarity process feedback with AI?</h3>
                            <p className="text-muted-foreground mt-4">Clarity uses advanced language models to automatically analyze every response. Here&apos;s what happens:</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">Spam and low-quality responses are filtered out automatically.</li>
                                <li className="text-muted-foreground mt-4">Sentiment is analyzed and scored (positive, neutral, negative) for each response.</li>
                                <li className="text-muted-foreground mt-4">Topics are extracted and grouped so you can spot recurring themes at a glance.</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Can I embed Clarity on any website?</h3>
                            <p className="text-muted-foreground mt-4">Yes  Clarity offers three embedding methods: a lightweight script tag, an iframe, or a React component. All methods work on any website regardless of your tech stack.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What&apos;s included in the free plan?</h3>
                            <p className="text-muted-foreground my-4">The free plan includes everything you need to get started:</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">Up to 3 feedback forms with full customization.</li>
                                <li className="text-muted-foreground">100 responses per month with basic analytics and email support.</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Is Clarity GDPR compliant?</h3>
                            <p className="text-muted-foreground mt-4">Absolutely. Clarity is built with privacy at its core  consent management, IP anonymization, data export, and right-to-erasure are all built in. Your data stays yours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
