export interface NavLink {
  name: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  badge?: string
  preview?: string[]
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonVariant: "default" | "outline"
}

export interface FooterSection {
  title: string
  links: Array<{
    name: string
    href: string
  }>
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
