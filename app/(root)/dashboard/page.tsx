"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Plus } from "lucide-react";
import Link from "next/link";
import {
  Navbar,
  DashboardStatsSection,
  FormCard,
} from "@/components/dashboard";
import { mockForms } from "@/content/dummy-form-data";
import type { FormData, DashboardStats } from "@/types";

export default function Dashboard() {
  const [forms, setForms] = useState<FormData[]>(mockForms);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleViewForm = (id: number) => {
    console.log("Viewing form:", id);
    // Navigate to form details
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter forms based on search query
  const filteredForms = forms.filter(
    (form) =>
      form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalFeedback = forms.reduce(
    (sum, form) => sum + form.feedbackCount,
    0
  );
  const activeForms = forms.filter((form) => form.status === "active").length;

  const stats: DashboardStats = {
    totalForms: forms.length,
    totalResponses: totalFeedback,
    activeForms,
    planUsage: {
      current: 2847,
      limit: 5000,
      percentage: 57,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />

      <main className="container mx-auto px-6 py-10 space-y-14">
        {/* Stats Section */}
        <DashboardStatsSection stats={stats} />

        {/* Forms Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Typography variant="h3" className="text-xl font-semibold">
                Your Forms
                {searchQuery && (
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    • {filteredForms.length} result
                    {filteredForms.length !== 1 ? "s" : ""} for "{searchQuery}"
                  </span>
                )}
              </Typography>
              <Typography variant="muted">
                Manage and monitor your feedback collection forms
              </Typography>
            </div>
            <Link href="/forms">
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Create New Form
              </Button>
            </Link>
          </div>

          {/* Forms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForms.map((form) => (
              <FormCard
                key={form.id}
                form={form}
                onDelete={handleDeleteForm}
                onView={handleViewForm}
              />
            ))}
          </div>

          {filteredForms.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Typography variant="h4" className="mb-2">
                No forms found
              </Typography>
              <Typography variant="muted" className="mb-4">
                Try adjusting your search terms or create a new form
              </Typography>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="rounded-full px-6 mr-3"
              >
                Clear Search
              </Button>
              <Link href="/forms">
                <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Form
                </Button>
              </Link>
            </div>
          )}

          {forms.length === 0 && (
            <div className="text-center py-12">
              <Typography variant="h4" className="mb-2">
                No forms yet
              </Typography>
              <Typography variant="muted" className="mb-4">
                Create your first feedback form to get started
              </Typography>
              <Link href="/forms">
                <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Form
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                C
              </div>
              <Typography variant="large" className="font-bold">
                Clarity
              </Typography>
            </div>
            <Typography variant="muted" className="text-sm max-w-md mx-auto">
              Empowering businesses to collect, analyze, and act on customer
              feedback with ease.
            </Typography>
            <Typography variant="muted" className="text-xs pt-4">
              © 2024 Clarity. All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}
