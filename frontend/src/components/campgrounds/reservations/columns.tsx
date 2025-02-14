import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ColumnDef } from "@tanstack/react-table";
import { Ban, EllipsisVertical, Pencil } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import ViewReservationDialog from "@/components/dialog/reservations/view-reservation-dialog";
import UpdatedReservationDialog from "@/components/dialog/reservations/update-reservation-dialog";
import CancelReservationDialog from "@/components/dialog/reservations/cancel-reservation-dialog";

export type Reservation = {
  id: string; // Unique reservation ID
  campgroundId: string; // ID of the reserved campground
  campgroundName: string; // Name of the campground (for convenience)
  userId: string; // User who made the reservation
  userName: string; // Name of the user
  checkInDate: string; // Check-in date
  checkOutDate: string; // Check-out date
  guests: number; // Number of guests
  status: "confirmed" | "pending" | "cancelled"; // Reservation status
  totalPrice: number; // Total price for the reservation
};

export const columns: ColumnDef<Reservation>[] = [
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
    accessorKey: "campgroundName",
    header: "Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "userName",
    header: "User",
  },

  {
    accessorKey: "checkInDate",
    header: "Check-In",
  },
  {
    accessorKey: "checkOutDate",
    header: "Check-Out",
  },
  {
    accessorKey: "guests",
    header: "Guests",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`badge ${
          row.original.status === "confirmed"
            ? "badge-success"
            : row.original.status === "pending"
            ? "badge-warning"
            : "badge-danger"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => `$${row.original.totalPrice.toFixed(2)}`,
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost">
              <EllipsisVertical />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" flex flex-col gap-2">
            <Command>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  <ViewReservationDialog />
                  <UpdatedReservationDialog />
                  <CancelReservationDialog />
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
