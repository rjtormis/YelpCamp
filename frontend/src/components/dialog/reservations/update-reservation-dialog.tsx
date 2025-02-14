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
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field, FieldProps, Form, Formik } from "formik";
import { CalendarIcon, Pencil } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

function UpdatedReservationDialog() {
  const [open, setOpen] = useState<boolean>(false);

  const initialUpdateReservationValues = {
    checkInDate: "",
    checkOutDate: "",
    guests: 0,
    status: "confirmed",
  };

  const handleUpdateReservation = () => {
    console.log("Update Reservation");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full ">
        <CommandItem className="hover:cursor-pointer">
          <Pencil /> <span>Update Reservation</span>
        </CommandItem>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Pencil className="text-muted-foreground" size={20} />
            <span>Update Reservation</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Modify your reservation details, including check-in & check-out dates, number of guests,
            or reservation status. Click save to apply changes.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Formik initialValues={initialUpdateReservationValues} onSubmit={handleUpdateReservation}>
            {({ isValid, values }) => {
              const isFieldEmpty = Object.values(values).some((value) => value.trim() === "");

              return (
                <Form className="w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1 w-full">
                          <Label htmlFor="name">
                            Name
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </Field>
                    <div className="space-y-1">
                      <Label htmlFor="name">Location</Label>
                      <Input disabled id="name" placeholder="Campground name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1 w-full">
                          <Label htmlFor="name">
                            Check in date
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      )}
                    </Field>

                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1 w-full">
                          <Label htmlFor="name">
                            Check in date
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1 w-full">
                          <Label htmlFor="name">
                            Number of Guests
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Input placeholder="Number of guests" />
                        </div>
                      )}
                    </Field>
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1 w-full">
                          <Label htmlFor="name">
                            Status
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </Field>
                  </div>

                  <Field name="name">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-1 w-full my-2">
                        <Label htmlFor="name">
                          Total Price
                          {meta.touched && meta.error ? (
                            <span className="text-red-500 ml-1">{meta.error}</span>
                          ) : null}
                        </Label>
                        <Input placeholder="Number of guests" />
                      </div>
                    )}
                  </Field>
                </Form>
              );
            }}
          </Formik>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdatedReservationDialog;
