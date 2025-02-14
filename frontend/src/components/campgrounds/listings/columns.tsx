"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Campground = {
  id: string; // Unique identifier
  name: string; // Name of the campground
  location: string; // Location of the campground
  type: number; // Private or Public
  status: "active" | "inactive" | "maintenance";
};

export const columns: ColumnDef<Campground>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <Pencil />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Campground</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="hover:bg-destructive hover:text-white">
                <Trash />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-destructive text-white">
              <p>Delete Campground</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
