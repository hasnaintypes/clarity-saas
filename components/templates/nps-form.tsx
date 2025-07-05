"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Target, X } from "lucide-react";
import type { FormState } from "@/types";

export function NPSForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedRating: undefined,
    comment: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Target className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            NPS Survey
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-lg font-bold mb-3">
          How likely are you to recommend us?
        </Typography>
        <Typography variant="muted" className="text-sm">
          On a scale of 0-10, where 10 is extremely likely
        </Typography>
      </div>

      {/* NPS Scale */}
      <div className="mb-8">
        <div className="grid grid-cols-11 gap-2 mb-3">
          {Array.from({ length: 11 }, (_, i) => (
            <button
              key={i}
              onClick={() => setFormState({ ...formState, selectedRating: i })}
              className={`h-12 rounded-xl text-sm font-medium transition-all ${
                formState.selectedRating === i
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-muted hover:bg-muted/80 hover:scale-105"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-1">
          <span>Not likely</span>
          <span>Extremely likely</span>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mb-8">
        <Typography variant="small" className="font-medium mb-3">
          What's the main reason for your score?
        </Typography>
        <Textarea
          placeholder="Tell us more about your experience..."
          value={formState.comment}
          onChange={(e) =>
            setFormState({ ...formState, comment: e.target.value })
          }
          className="min-h-[80px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl h-12">
        Submit Feedback
      </Button>
    </div>
  );
}
