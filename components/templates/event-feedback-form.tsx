"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Calendar, X } from "lucide-react";
import type { FormState } from "@/types";

export function EventFeedbackForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedRating: 0,
    comment: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Event Feedback
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-3">
          How was the event?
        </Typography>
        <Typography variant="muted" className="text-sm">
          Rate your overall experience
        </Typography>
      </div>

      {/* Rating Scale */}
      <div className="mb-6">
        <Typography variant="small" className="font-medium mb-3">
          Overall Rating
        </Typography>
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() =>
                setFormState({ ...formState, selectedRating: rating })
              }
              className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                formState.selectedRating >= rating
                  ? "bg-purple-500 text-white"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>

      {/* Aspects */}
      <div className="mb-6">
        <Typography variant="small" className="font-medium mb-3">
          What did you like most?
        </Typography>
        <div className="grid grid-cols-2 gap-2">
          {["Content", "Speakers", "Venue", "Networking"].map((aspect) => (
            <button
              key={aspect}
              className="p-2 rounded-lg text-sm bg-muted hover:bg-muted/80 transition-all"
            >
              {aspect}
            </button>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-8">
        <Typography variant="small" className="font-medium mb-3">
          Additional Comments
        </Typography>
        <Textarea
          placeholder="Share your thoughts about the event..."
          value={formState.comment}
          onChange={(e) =>
            setFormState({ ...formState, comment: e.target.value })
          }
          className="min-h-[80px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Feedback
      </Button>
    </div>
  );
}
