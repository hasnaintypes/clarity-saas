"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface EmbedCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  embedCode: string;
  formName: string;
}

export function EmbedCodeDialog({
  isOpen,
  onClose,
  embedCode,
  formName,
}: EmbedCodeDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Embed Your Form</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Typography variant="large" className="font-semibold mb-2">
              {formName}
            </Typography>
            <Typography variant="muted" className="text-sm">
              Copy and paste this code into your website to embed your form.
            </Typography>
          </div>

          {/* Code Block */}
          <div className="relative">
            <pre className="bg-muted p-4 rounded-xl text-sm overflow-x-auto border">
              <code className="text-foreground">{embedCode}</code>
            </pre>
            <Button
              onClick={handleCopy}
              size="sm"
              variant="outline"
              className="absolute top-2 right-2 rounded-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <Button onClick={onClose} className="rounded-xl">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
