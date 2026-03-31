import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Logo } from '@/components/logo'

export default function Testimonials() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Trusted by teams who care about their users</h2>
                    <p>Clarity is evolving to be more than just a feedback tool. It supports an entire ecosystem from embeddable widgets to AI-powered analytics helping teams build better products.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <Logo />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Clarity has transformed the way we collect user feedback. Their extensive collection of embeddable widgets, analytics dashboards, and AI-powered insights has significantly accelerated our workflow. The flexibility to customize every aspect allows me to create unique feedback experiences. Clarity is a game-changer for modern product development</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/1.jpg"
                                            alt="Sarah Chen"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>SC</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Sarah Chen</cite>
                                        <span className="text-muted-foreground block text-sm">Head of Product, Acme Inc.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Clarity is really extraordinary and very practical, no need to break your head. A real gold mine for product feedback.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/6.jpg"
                                            alt="Marcus Rodriguez"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>MR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Marcus Rodriguez</cite>
                                        <span className="text-muted-foreground block text-sm">CTO, Flowbase</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Great work on the feedback widget builder. This is one of the best user feedback tools that I have seen so far!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/7.jpg"
                                            alt="Lisa Park"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>LP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Lisa Park</cite>
                                        <span className="text-muted-foreground block text-sm">Product Lead, NovaTech</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Great work on the analytics dashboard. This is one of the best insight platforms that I have seen so far!</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/8.jpg"
                                            alt="Amir Khorasani"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AK</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Amir Khorasani</p>
                                        <span className="text-muted-foreground block text-sm">Founder, GlobalReach</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
