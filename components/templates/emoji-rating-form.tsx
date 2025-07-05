"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Typography } from "@/components/ui/typography"
import { X } from "lucide-react"
import type { FormState } from "@/types"

const emojiRatings = [
  { emoji: "😢", label: "Very Poor", value: 1 },
  { emoji: "😞", label: "Poor", value: 2 },
  { emoji: "😐", label: "Medium", value: 3 },
  { emoji: "😊", label: "Good", value: 4 },
  { emoji: "😍", label: "Excellent", value: 5 },
]

export function EmojiRatingForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedRating: 3,
    comment: "",
  })

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background text-sm font-bold">😊</span>
          </div>
          <Typography variant="large" className="font-semibold">
            Feedback
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-6">
        <Typography variant="h3" className="text-xl font-bold mb-2 text-center">
          How are you feeling?
        </Typography>
        <Typography variant="muted" className="text-sm text-center leading-relaxed">
          Your input is valuable in helping us better understand your needs and tailor our service accordingly.
        </Typography>
      </div>

      {/* Emoji Rating */}
      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-4">
          {emojiRatings.map((rating) => (
            <div key={rating.value} className="flex flex-col items-center space-y-2">
              <button
                onClick={() => setFormState({ ...formState, selectedRating: rating.value })}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
                  formState.selectedRating === rating.value
                    ? "bg-gradient-to-br from-green-400 to-green-600 shadow-lg scale-110"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {rating.emoji}
              </button>
              <span className="text-xs text-muted-foreground text-center leading-tight">{rating.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-6">
        <Textarea
          placeholder="Add a Comment..."
          value={formState.comment}
          onChange={(e) => setFormState({ ...formState, comment: e.target.value })}
          className="min-h-[80px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl h-12 font-medium">
        Submit Now
      </Button>
    </div>
  )
}
