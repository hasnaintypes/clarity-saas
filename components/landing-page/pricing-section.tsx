import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Check } from "lucide-react"
import Link from "next/link"
import { pricingContent } from "@/content/pricing"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Typography variant="h2" className="mb-4 border-none">
            {pricingContent.header.title}
          </Typography>
          <Typography variant="lead">{pricingContent.header.description}</Typography>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.tiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={`relative rounded-2xl ${
                  tier.popular ? "border-primary shadow-lg scale-105" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <Typography variant="h3" className="mb-2">
                    {tier.name}
                  </Typography>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== "Free" && (
                      <Typography variant="muted" className="inline ml-1">
                        /{tier.period}
                      </Typography>
                    )}
                  </div>
                  <Typography variant="muted" className="text-center">
                    {tier.description}
                  </Typography>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <Typography variant="small" className="text-muted-foreground">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-xl" variant={tier.buttonVariant} asChild>
                    <Link href={tier.name === "Enterprise" ? "/contact" : "/signin"}>{tier.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
