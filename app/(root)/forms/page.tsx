"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing-page/navbar";
import { FormCreationDialog } from "@/components/forms/form-creation-dialog";
import { FormContainer } from "@/components/dashboard/form-container";
import { CustomPagination } from "@/components/dashboard/pagination";
import { formTemplates } from "@/content/form-registry";
import type { FormTemplate, CreateFormData } from "@/types";

const FORMS_PER_PAGE = 3;

export default function FormsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<FormTemplate | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTemplates = formTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag: any) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const totalPages = Math.ceil(filteredTemplates.length / FORMS_PER_PAGE);
  const startIndex = (currentPage - 1) * FORMS_PER_PAGE;
  const currentTemplates = filteredTemplates.slice(
    startIndex,
    startIndex + FORMS_PER_PAGE
  );

  const handleCreateForm = (template: FormTemplate) => {
    setSelectedTemplate(template);
    setIsDialogOpen(true);
  };

  const handleFormCreation = (data: CreateFormData) => {
    console.log("Creating form:", data);
    setSelectedTemplate(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />

      <main className="w-full py-8">
        {/* Header */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <Typography
                  variant="h1"
                  className="text-2xl sm:text-3xl font-bold"
                >
                  Choose a Template
                </Typography>
                <Typography
                  variant="lead"
                  className="text-muted-foreground text-sm sm:text-base"
                >
                  Select a form template to get started with collecting feedback
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {currentTemplates.map((template, index) => {
              const PreviewComponent = template.preview;
              return (
                <div key={template.id}>
                  <FormContainer
                    template={template}
                    onCreateForm={handleCreateForm}
                  >
                    <PreviewComponent />
                  </FormContainer>

                  {/* Separator between containers (except for the last one) */}
                  {index < currentTemplates.length - 1 && (
                    <div className="flex justify-center">
                      <Separator className="w-full max-w-md" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="w-full px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-5xl mx-auto">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <Typography variant="h4" className="mb-2">
              No templates found
            </Typography>
            <Typography variant="muted" className="mb-4">
              Try adjusting your search terms
            </Typography>
          </div>
        )}
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

      {/* Form Creation Dialog */}
      <FormCreationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedTemplate={selectedTemplate}
        onCreateForm={handleFormCreation}
      />
    </div>
  );
}
