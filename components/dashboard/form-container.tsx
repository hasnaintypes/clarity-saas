"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import type { FormTemplate } from "@/types";

interface FormContainerProps {
  template: FormTemplate;
  onCreateForm: (template: FormTemplate) => void;
  children: React.ReactNode;
}

export function FormContainer({
  template,
  onCreateForm,
  children,
}: FormContainerProps) {
  return (
    <div className="border rounded-xl p-4 sm:p-6 lg:p-8 bg-background shadow-sm">
      {/* Template Info */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Typography
              variant="h3"
              className="text-lg sm:text-xl font-semibold"
            >
              {template.name}
            </Typography>
            {template.popular && (
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Popular
              </span>
            )}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => onCreateForm(template)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Create Form</span>
                  <span className="sm:hidden">Create</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new form using this template</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Typography variant="muted" className="text-sm mt-1">
          {template.description}
        </Typography>
      </div>

      {/* Form Preview */}
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
