"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { FileText, X } from "lucide-react";
import type { FormState } from "@/types";

export function SurveyForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    comment: "",
    selectedOption: "",
  });

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Survey
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-8">
        <Typography variant="h3" className="text-xl font-bold mb-3">
          Customer Survey
        </Typography>
        <Typography variant="muted" className="text-sm">
          Help us understand your needs better
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
            How did you hear about us?
          </Typography>
          <div className="space-y-3">
            {["Social Media", "Search Engine", "Friend", "Advertisement"].map(
              (option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="source"
                    value={option}
                    checked={formState.selectedOption === option}
                    onChange={() =>
                      setFormState({ ...formState, selectedOption: option })
                    }
                    className="text-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <Typography variant="small" className="font-medium mb-3">
            Additional Comments
          </Typography>
          <Textarea
            placeholder="Share your thoughts..."
            value={formState.comment}
            onChange={(e) =>
              setFormState({ ...formState, comment: e.target.value })
            }
            className="min-h-[80px] resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Survey
      </Button>
    </div>
  );
}
