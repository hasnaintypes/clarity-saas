import { Brain, FileText, BarChart3, Globe, Code, ShieldCheck } from 'lucide-react'

export default function Features() {
    return (
        <section id="features" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Everything you need to understand your users</h2>
                    <p className="text-muted-foreground">From collection to insight, Clarity handles the full feedback lifecycle  so you can focus on building what matters.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Smart Processing</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">AI-powered spam filtering and sentiment analysis that surfaces what matters and filters the noise.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FileText className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Form Builder</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Drag-and-drop form builder with conditional logic, multi-step flows, and real-time preview.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Analytics</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Real-time dashboards with NPS tracking, sentiment trends, topic analysis, and exportable reports.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Multi-Language</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Collect feedback globally with automatic language detection and translation for forms and responses.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Code className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Easy Integration</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Embed widgets on any website with a single script tag, iframe, or React component.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">GDPR Compliant</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Privacy-first data collection with consent management, IP anonymization, and right-to-erasure.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
