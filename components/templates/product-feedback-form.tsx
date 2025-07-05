"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Package, X } from "lucide-react";
import type { FormState } from "@/types";

const categories = ["Bug Report", "Feature Request", "Improvement", "Other"];

export function ProductFeedbackForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedOption: "",
    comment: "",
    email: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Package className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Product Feedback
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-3">
          Help us improve
        </Typography>
        <Typography variant="muted" className="text-sm">
          Share your thoughts about our product
        </Typography>
      </div>

      {/* Category Selection */}
      <div className="mb-6">
        <Typography variant="small" className="font-medium mb-3">
          Category
        </Typography>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setFormState({ ...formState, selectedOption: category })
              }
              className={`p-3 rounded-lg text-sm transition-all ${
                formState.selectedOption === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6 mb-8">
        <div>
          <Typography variant="small" className="font-medium mb-3">
            Feedback
          </Typography>
          <Textarea
            placeholder="Describe your feedback..."
            value={formState.comment}
            onChange={(e) =>
              setFormState({ ...formState, comment: e.target.value })
            }
            className="min-h-[80px] resize-none"
          />
        </div>
        <div>
          <Typography variant="small" className="font-medium mb-3">
            Email (Optional)
          </Typography>
          <Input
            type="email"
            placeholder="Your email address"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Feedback
      </Button>
    </div>
  );
}
