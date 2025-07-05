"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import type { FormTemplate, CreateFormData } from "@/types";
import { EmbedCodeDialog } from "./embed-code-dialog";

interface FormCreationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate: FormTemplate | null;
  onCreateForm: (data: CreateFormData) => void;
}

export function FormCreationDialog({
  isOpen,
  onClose,
  selectedTemplate,
  onCreateForm,
}: FormCreationDialogProps) {
  const [formData, setFormData] = useState<CreateFormData>({
    name: "",
    description: "",
    templateId: selectedTemplate?.id || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showEmbedDialog, setShowEmbedDialog] = useState(false);
  const [embedCode, setEmbedCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && selectedTemplate) {
      setIsLoading(true);

      // Show processing toast
      toast.loading("Creating your form...", {
        id: "creating-form",
      });

      // Close the dialog immediately
      onClose();

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Generate embed code
        const generatedEmbedCode = `<script src="https://clarity.example.com/embed.js"></script>
<div id="clarity-form-${Date.now()}" data-form-id="${
          selectedTemplate.id
        }" data-form-name="${formData.name}"></div>
<script>
  ClarityForms.init({
    formId: '${selectedTemplate.id}',
    container: '#clarity-form-${Date.now()}',
    theme: 'light'
  });
</script>`;

        setEmbedCode(generatedEmbedCode);

        // Dismiss loading toast and show success
        toast.dismiss("creating-form");
        toast.success("Form created successfully!", {
          description: "Your form is ready to use",
        });

        // Show embed code dialog
        setShowEmbedDialog(true);

        onCreateForm({
          ...formData,
          templateId: selectedTemplate.id,
        });
      } catch (error) {
        toast.dismiss("creating-form");
        toast.error("Failed to create form", {
          description: "Please try again",
        });
      } finally {
        setIsLoading(false);
        setFormData({ name: "", description: "", templateId: "" });
      }
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setFormData({ name: "", description: "", templateId: "" });
    }
  };

  if (!selectedTemplate) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Template Info */}
            <div className="p-4 bg-muted rounded-xl">
              <Typography variant="small" className="font-medium mb-1">
                Template: {selectedTemplate.name}
              </Typography>
              <Typography variant="muted" className="text-xs">
                {selectedTemplate.description}
              </Typography>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <Typography variant="small" className="font-medium mb-2">
                  Form Name *
                </Typography>
                <Input
                  placeholder="Enter form name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <Typography variant="small" className="font-medium mb-2">
                  Description
                </Typography>
                <Textarea
                  placeholder="Describe what this form is for..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="min-h-[80px] resize-none"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
                className="rounded-xl"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                disabled={!formData.name.trim() || isLoading}
              >
                {isLoading ? "Creating..." : "Create Form"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <EmbedCodeDialog
        isOpen={showEmbedDialog}
        onClose={() => setShowEmbedDialog(false)}
        embedCode={embedCode}
        formName={formData.name}
      />
    </>
  );
}
