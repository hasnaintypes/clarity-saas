"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Mail, X } from "lucide-react";
import type { FormState } from "@/types";

export function NewsletterForm() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <Mail className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Newsletter
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-3">
          Stay Updated
        </Typography>
        <Typography variant="muted" className="text-sm leading-relaxed">
          Get the latest news and updates delivered to your inbox. Join our
          community of subscribers.
        </Typography>
      </div>

      {/* Email Input */}
      <div className="mb-8">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          className="h-12"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Subscribe
      </Button>
    </div>
  );
}
