import { Button } from "@/components/ui/button";
import { CommandItem } from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Ban, Trash } from "lucide-react";
import { useState } from "react";

function CancelReservationDialog() {
  const [input, setInput] = useState<string>("");
  const keyword = "cancel reservation";

  return (
    <Dialog>
      <DialogTrigger className="w-full ">
        <CommandItem className="hover:cursor-pointer">
          <Ban /> <span>Cancel Reservation</span>
        </CommandItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Trash className=" text-destructive" size={20} />
            <span>Cancel Reservation</span>
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the selected reservation and
            remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input
            placeholder="Type 'Cancel Reservation' to continue."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button disabled={keyword !== input.toLowerCase()} variant="destructive">
            <span>Cancel Reservation</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CancelReservationDialog;
