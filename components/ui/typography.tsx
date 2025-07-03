import * as React from "react"
import { cn } from "@/lib/utils"

const Typography = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    variant?: "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" | "muted"
    as?: React.ElementType
  }
>(({ className, variant = "p", as, ...props }, ref) => {
  const Comp = as || getDefaultElement(variant)

  return <Comp className={cn(getVariantClasses(variant), className)} ref={ref} {...props} />
})

function getDefaultElement(variant: string) {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "lead":
      return "p"
    case "large":
      return "div"
    case "small":
      return "small"
    case "muted":
      return "p"
    default:
      return "p"
  }
}

function getVariantClasses(variant: string) {
  switch (variant) {
    case "h1":
      return "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    case "h2":
      return "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
    case "h3":
      return "scroll-m-20 text-2xl font-semibold tracking-tight"
    case "h4":
      return "scroll-m-20 text-xl font-semibold tracking-tight"
    case "p":
      return "leading-7 [&:not(:first-child)]:mt-6"
    case "lead":
      return "text-xl text-muted-foreground"
    case "large":
      return "text-lg font-semibold"
    case "small":
      return "text-sm font-medium leading-none"
    case "muted":
      return "text-sm text-muted-foreground"
    default:
      return ""
  }
}

Typography.displayName = "Typography"

export { Typography }
