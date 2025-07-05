import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { footerContent } from "@/content/footer";

export function Footer() {
  return (
    <footer className="bg-background mt-16 md:mt-24">
      <div className="container px-4 py-16 md:py-20">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                C
              </div>
              <Typography variant="large">
                {footerContent.company.name}
              </Typography>
            </Link>
            <Typography
              variant="small"
              className="text-muted-foreground mb-8 max-w-xs"
            >
              {footerContent.company.description}
            </Typography>
            <div className="flex space-x-4 mt-2">
              {footerContent.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {social.icon === "twitter" && <Twitter className="h-5 w-5" />}
                  {social.icon === "github" && <Github className="h-5 w-5" />}
                  {social.icon === "linkedin" && (
                    <Linkedin className="h-5 w-5" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerContent.sections.map((section) => (
            <div key={section.title}>
              <Typography variant="large" className="font-semibold mb-4">
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Logo and Description - Left Aligned */}
          <div className="text-left">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                C
              </div>
              <Typography variant="large">
                {footerContent.company.name}
              </Typography>
            </Link>
            <Typography variant="small" className="text-muted-foreground mb-6">
              {footerContent.company.description}
            </Typography>
            <div className="flex space-x-6 mt-2">
              {footerContent.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {social.icon === "twitter" && <Twitter className="h-5 w-5" />}
                  {social.icon === "github" && <Github className="h-5 w-5" />}
                  {social.icon === "linkedin" && (
                    <Linkedin className="h-5 w-5" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Footer Links - Three Columns */}
          <div className="grid grid-cols-3 gap-6">
            {footerContent.sections.map((section) => (
              <div key={section.title}>
                <Typography variant="large" className="font-semibold mb-3">
                  {section.title}
                </Typography>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <Typography variant="small" className="text-muted-foreground">
            © {new Date().getFullYear()} {footerContent.company.name}. All
            rights reserved.
          </Typography>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerContent.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
