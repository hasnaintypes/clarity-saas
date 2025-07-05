"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Star, X } from "lucide-react";
// import type { FormPreviewProps, FormState } from "@/types/forms"

import type React from "react";

export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  type: FormType;
  category: FormCategory;
  preview: React.ComponentType<FormPreviewProps>;
  height: number;
  width: "small" | "medium" | "large"; // for grid sizing
  tags: string[];
  popular?: boolean;
}

export interface FormPreviewProps {
  isSelected?: boolean;
  onSelect?: () => void;
}

export type FormType =
  | "feedback"
  | "survey"
  | "rating"
  | "nps"
  | "contact"
  | "quiz";

export type FormCategory =
  | "feedback"
  | "customer-satisfaction"
  | "product"
  | "support"
  | "marketing"
  | "research";

export interface CreateFormData {
  name: string;
  description: string;
  templateId: string;
}

export interface FormState {
  selectedRating?: number;
  comment?: string;
  selectedOption?: string;
  email?: string;
  name?: string;
}

export function StarRatingForm({ isSelected, onSelect }: FormPreviewProps) {
  const [formState, setFormState] = useState<FormState>({
    selectedRating: 0,
  });

  return (
    <div
      className={`bg-background rounded-xl border shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md p-6 h-[280px] max-w-sm flex flex-col ${
        isSelected ? "ring-2 ring-primary ring-offset-2" : ""
      }`}
      onClick={onSelect}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
      <div className="mb-4">
        <Typography variant="h3" className="text-lg font-bold mb-2 text-center">
          Rate your experience
        </Typography>
        <Typography variant="muted" className="text-sm text-center">
          How would you rate our service?
        </Typography>
      </div>

      {/* Star Rating */}
      <div className="mb-4 flex items-center justify-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={(e) => {
                e.stopPropagation();
                setFormState({ ...formState, selectedRating: star });
              }}
              className="p-1"
            >
              <Star
                className={`h-6 w-6 transition-colors ${
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
      <Button
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-10 mt-auto"
        onClick={(e) => e.stopPropagation()}
      >
        Submit Rating
      </Button>
    </div>
  );
}
