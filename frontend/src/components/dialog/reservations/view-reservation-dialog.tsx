import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { CommandItem } from "../../ui/command";
import { useState } from "react";

function ViewReservationDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const reservation = {
    campgroundName: "Pine Valley Campground",
    location: "Yosemite National Park, CA",
    userName: "John Doe",
    userEmail: "johndoe@example.com",
    checkIn: "2024-06-15",
    checkOut: "2024-06-20",
    guests: 4,
    status: "Confirmed", // Possible values: "Confirmed", "Pending", "Canceled"
    totalPrice: 250.0,
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full ">
        <CommandItem className="hover:cursor-pointer">
          <Eye /> <span>View Reservation</span>
        </CommandItem>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Eye size={20} className="text-muted-foreground" />
            <span>View Reservation</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Review your reservation details below. This includes the campground, check-in &
            check-out dates, guest information, and total price.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Campground Details */}
          <div>
            <h3 className="font-semibold text-lg">{reservation.campgroundName}</h3>
            <p className="text-gray-500">{reservation.location}</p>
          </div>

          {/* User Info */}
          <div className="border-t pt-3">
            <p className="text-sm">
              Booked by: <span className="font-medium">{reservation.userName}</span>
            </p>
            <p className="text-sm">
              Guests: <span className="font-medium">{reservation.guests}</span>
            </p>
          </div>

          {/* Dates */}
          <div className="border-t pt-3">
            <p className="text-sm">
              Check-in: <span className="font-medium">{reservation.checkIn}</span>
            </p>
            <p className="text-sm">
              Check-out: <span className="font-medium">{reservation.checkOut}</span>
            </p>
          </div>

          {/* Status & Price */}
          <div className="border-t pt-3">
            <p className="text-sm">
              Status:{" "}
              <span
                className={`px-2 py-1 rounded ${
                  reservation.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {reservation.status}
              </span>
            </p>
            <p className="text-sm">
              Total Price: <span className="font-medium">${reservation.totalPrice}</span>
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReservationDialog;
