"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { BarChart3, X } from "lucide-react"
import type { FormState } from "@/types"

const pollOptions = ["Option A", "Option B", "Option C", "Option D"]

export function QuickPollForm() {
  const [formState, setFormState] = useState<FormState>({
    selectedOption: "",
  })

  return (
    <div className="bg-background rounded-xl border shadow-sm p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <Typography variant="large" className="font-semibold">
            Quick Poll
          </Typography>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Question */}
      <div className="mb-6">
        <Typography variant="h3" className="text-xl font-bold mb-2">
          What's your preference?
        </Typography>
        <Typography variant="muted" className="text-sm">
          Choose one option below
        </Typography>
      </div>

      {/* Poll Options */}
      <div className="space-y-3 mb-6">
        {pollOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFormState({ ...formState, selectedOption: option })}
            className={`w-full p-3 rounded-lg text-left transition-all ${
              formState.selectedOption === option ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
        Submit Vote
      </Button>
    </div>
  )
}
