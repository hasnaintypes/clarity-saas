"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Mail, X } from "lucide-react";
import type { FormState } from "@/types";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    comment: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Mail className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Contact
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-6">
        <Typography variant="h3" className="text-xl font-bold mb-2">
          Get in touch
        </Typography>
        <Typography variant="muted" className="text-sm">
          We'd love to hear from you. Send us a message.
        </Typography>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        <Input
          placeholder="Your name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <Textarea
          placeholder="Your message"
          value={formState.comment}
          onChange={(e) =>
            setFormState({ ...formState, comment: e.target.value })
          }
          className="min-h-[80px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Send Message
      </Button>
    </div>
  );
}
