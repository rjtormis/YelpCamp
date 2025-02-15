"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import UpdateCampground from "@/components/dialog/campgrounds/update-campground";

export type Campground = {
  id: string; // Unique identifier
  name: string; // Name of the campground
  location: string; // Location of the campground
  type: number; // Private or Public
  latLng: [number, number]; // Latitude and Longitude
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
        <UpdateCampground />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
