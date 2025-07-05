"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { HelpCircle, X } from "lucide-react";
import type { FormState } from "@/types";

const priorities = ["Low", "Medium", "High", "Urgent"];

export function SupportTicketForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    comment: "",
    selectedOption: "Medium",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <HelpCircle className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Support Ticket
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-3">
          Need Help?
        </Typography>
        <Typography variant="muted" className="text-sm">
          Describe your issue and we'll get back to you
        </Typography>
      </div>

      {/* Form Fields */}
      <div className="space-y-6 mb-8">
        <div>
          <Typography variant="small" className="font-medium mb-3">
            Your Name
          </Typography>
          <Input
            placeholder="Enter your name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        </div>

        <div>
          <Typography variant="small" className="font-medium mb-3">
            Email Address
          </Typography>
          <Input
            type="email"
            placeholder="your@email.com"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>

        <div>
          <Typography variant="small" className="font-medium mb-3">
            Priority Level
          </Typography>
          <div className="grid grid-cols-2 gap-2">
            {priorities.map((priority) => (
              <button
                key={priority}
                onClick={() =>
                  setFormState({ ...formState, selectedOption: priority })
                }
                className={`p-2 rounded-lg text-sm transition-all ${
                  formState.selectedOption === priority
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Typography variant="small" className="font-medium mb-3">
            Issue Description
          </Typography>
          <Textarea
            placeholder="Describe your issue in detail..."
            value={formState.comment}
            onChange={(e) =>
              setFormState({ ...formState, comment: e.target.value })
            }
            className="min-h-[100px] resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Ticket
      </Button>
    </div>
  );
}
