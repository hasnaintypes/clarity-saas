import type { PricingTier } from "@/types"

export const pricingContent = {
  header: {
    title: "Simple, transparent pricing",
    description: "Choose the perfect plan for your feedback collection needs. Start free and scale as you grow.",
  },
  tiers: [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small projects and personal websites",
      features: [
        "Up to 100 feedback submissions/month",
        "Basic feedback widgets",
        "Email notifications",
        "7-day data retention",
        "Community support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 5,000 feedback submissions/month",
        "Advanced widget customization",
        "Real-time analytics dashboard",
        "90-day data retention",
        "Priority email support",
        "Custom branding",
        "Export data (CSV, JSON)",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited feedback submissions",
        "White-label solution",
        "Advanced analytics & reporting",
        "Unlimited data retention",
        "24/7 phone & email support",
        "Custom integrations",
        "SSO authentication",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ] as PricingTier[],
}
