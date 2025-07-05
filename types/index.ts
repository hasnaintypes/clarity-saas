export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  preview?: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline";
}

export interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FormData {
  id: number;
  name: string;
  type: FormType;
  createdDate: string;
  feedbackCount: number;
  status: FormStatus;
  description?: string;
}


export type FormStatus = "active" | "draft" | "paused" | "archived";

export interface DashboardStats {
  totalForms: number;
  totalResponses: number;
  activeForms: number;
  planUsage: {
    current: number;
    limit: number;
    percentage: number;
  };
}

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

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
