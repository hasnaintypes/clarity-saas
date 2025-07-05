"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import {
  Eye,
  Trash2,
  Calendar,
  BarChart3,
  FileText,
  MessageSquare,
  Star,
  Target,
  Search,
  Mail,
} from "lucide-react";
import type { FormData } from "@/types";

interface FormCardProps {
  form: FormData;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const typeIcons = {
  survey: FileText,
  feedback: MessageSquare,
  rating: Star,
  nps: Target,
  research: Search,
  email: Mail,
};

const statusColors = {
  active: "default",
  draft: "secondary",
  paused: "outline",
  archived: "destructive",
} as const;

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function FormCard({ form, onDelete, onView }: FormCardProps) {
  const IconComponent =
    typeIcons[form.type as keyof typeof typeIcons] ?? FileText;

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1 min-w-0">
            <div className="p-2 rounded-lg bg-muted">
              <IconComponent className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <Typography variant="large" className="font-semibold truncate">
                {form.name}
              </Typography>
              <Typography variant="muted" className="text-sm mt-1">
                {form.description}
              </Typography>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(form.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full h-8 w-8 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Status and Type */}
        <div className="flex items-center space-x-2">
          <Badge
            variant={statusColors[form.status]}
            className="text-xs rounded-full capitalize"
          >
            {form.status}
          </Badge>
          <Typography variant="muted" className="text-xs capitalize">
            {form.type} Form
          </Typography>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(form.createdDate)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BarChart3 className="w-4 h-4" />
            <span>{form.feedbackCount} responses</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onView(form.id)}
          className="w-full rounded-full"
          size="sm"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
