export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Built for teams that ship fast.</h2>
                    <p className="text-muted-foreground">
                        Clarity brings together feedback collection, AI processing, and analytics into one platform  <span className="text-foreground font-medium">so you can focus on building what matters.</span>
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p className="text-muted-foreground">From embeddable widgets to real-time dashboards, Clarity handles the entire feedback lifecycle  collection, analysis, and action.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent">10K+</div>
                                <p className="text-muted-foreground">Responses processed daily</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent">99.9%</div>
                                <p className="text-muted-foreground">Uptime guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 border-primary/30 pl-4">
                            <p className="text-muted-foreground">&ldquo;Clarity transformed how we handle user feedback. The AI-powered insights helped us identify and fix critical UX issues we never knew existed. Our satisfaction scores jumped 40% in two months.&rdquo;</p>

                            <div className="mt-6 space-y-1">
                                <cite className="block font-medium not-italic">Sarah Chen</cite>
                                <span className="text-sm text-muted-foreground">Head of Product, Acme Inc.</span>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
