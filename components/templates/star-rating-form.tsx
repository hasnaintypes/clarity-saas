"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Star, X } from "lucide-react";
import type { FormState } from "@/types";

export function StarRatingForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedRating: 0,
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <Star className="h-4 w-4 text-white fill-current" />
          </div>
          <Typography variant="large" className="font-semibold">
            Rating
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-2 text-center">
          Rate your experience
        </Typography>
        <Typography variant="muted" className="text-sm text-center">
          How would you rate our service?
        </Typography>
      </div>

      {/* Star Rating */}
      <div className="mb-8">
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() =>
                setFormState({ ...formState, selectedRating: star })
              }
              className="p-1"
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  star <= (formState.selectedRating || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Rating
      </Button>
    </div>
  );
}
