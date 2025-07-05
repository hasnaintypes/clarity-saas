"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CustomPagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationItem>
          <Button
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1 ? true : undefined}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
            Previous
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === totalPages ? true : undefined}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRightIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
