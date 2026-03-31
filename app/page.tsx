import Link from "next/link";

const features = [
  {
    title: "Smart Feedback Processing",
    description:
      "AI-powered spam filtering and sentiment analysis that surfaces what matters and filters the noise.",
  },
  {
    title: "Drag-and-Drop Form Builder",
    description:
      "Build custom feedback forms visually with conditional logic, multi-step flows, and real-time preview.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Real-time dashboards with NPS tracking, sentiment trends, topic analysis, and exportable reports.",
  },
  {
    title: "Multi-Language Support",
    description:
      "Collect feedback globally with automatic language detection and translation for forms and responses.",
  },
  {
    title: "Easy Integration",
    description:
      "Embed feedback widgets on any website with a single script tag, iframe, or React component.",
  },
  {
    title: "GDPR Compliant",
    description:
      "Privacy-first data collection with consent management, IP anonymization, and right-to-erasure support.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started",
    features: [
      "Up to 3 forms",
      "100 responses/month",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams",
    features: [
      "Unlimited forms",
      "10,000 responses/month",
      "AI processing",
      "Custom branding",
      "Team collaboration",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    description: "For scaling organizations",
    features: [
      "Everything in Pro",
      "Unlimited responses",
      "SSO and SAML",
      "Custom domain",
      "API access",
      "Dedicated support",
    ],
  },
];

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Status", "Community"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Clarity
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Collect Feedback That
              <br />
              Actually Matters
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Embed feedback widgets on your website, process responses with AI,
              and get actionable insights — all from one platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start for Free
              </Link>
              <a
                href="#features"
                className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Everything you need to understand your users
              </h2>
              <p className="mt-4 text-muted-foreground">
                From collection to insight, Clarity handles the full feedback
                lifecycle.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-border p-6"
                >
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-border py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-muted-foreground">
                Start free. Upgrade when you need more.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-lg border p-8 ${
                    plan.highlighted
                      ? "border-primary ring-1 ring-primary"
                      : "border-border"
                  }`}
                >
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <p className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 text-foreground">--</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/sign-up"
                    className={`mt-8 block w-full rounded-md py-2.5 text-center text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border hover:bg-accent"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to hear what your users think?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Start collecting feedback in minutes. No credit card required.
              </p>
              <Link
                href="/sign-up"
                className="mt-8 inline-block rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Link href="/" className="text-lg font-bold">
                Clarity
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                Feedback collection and analytics for modern teams.
              </p>
            </div>
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h4 className="text-sm font-semibold">{group.heading}</h4>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Clarity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
