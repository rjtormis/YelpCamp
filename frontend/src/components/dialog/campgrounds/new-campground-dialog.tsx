import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormikNewCampground } from "@/interfaces/formik";
import { Dispatch, SetStateAction, useState } from "react";
import { Field, FieldProps, Form, Formik } from "formik";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Info, Tent } from "lucide-react";
import FileDrop from "../../file-drop";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface NewCampgroundDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function NewCampgroundDialog({ open, setOpen }: NewCampgroundDialogProps) {
  const [images, setImages] = useState<File[]>([]);
  const initialNewCampgroundValues: FormikNewCampground = {
    name: "",
    location: "",
    description: "",
    type: "public",
    status: "active",
    createdById: "",
    maximumAllowedGuests: 0,
    currentGuests: 0,
    images: [],
  };

  const handleNewCampground = (state: FormikNewCampground) => {
    console.log(state);
    console.log("New Campground");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex">
            <Tent />
            <span className="my-auto ml-4">New Campground</span>
          </DialogTitle>
          <DialogDescription>
            Provide details to list your new campground. You can edit this information later.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Formik initialValues={initialNewCampgroundValues} onSubmit={handleNewCampground}>
            {({ isValid, values }) => {
              const isFieldEmpty = Object.values(values).some((value) => value.trim() === "");
              return (
                <Form>
                  <Field name="name">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-1">
                        <Label htmlFor="name">
                          Name
                          {meta.touched && meta.error ? (
                            <span className="text-red-500 ml-1">{meta.error}</span>
                          ) : null}
                        </Label>
                        <Input id="name" placeholder="Campground name" {...field} />
                      </div>
                    )}
                  </Field>

                  <Field name="location">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-1 my-3">
                        <Label htmlFor="location">
                          Location
                          {meta.touched && meta.error ? (
                            <span className="text-red-500 ml-1">{meta.error}</span>
                          ) : null}
                        </Label>
                        <Input id="location" placeholder="Campground location" {...field} />
                      </div>
                    )}
                  </Field>
                  <div className="grid grid-cols-2 gap-4 my-3">
                    <Field name="currentGuests">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1">
                          <Label htmlFor="type">
                            Number of Guests
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Input id="currentGuests" placeholder="Current Guests" {...field} />
                        </div>
                      )}
                    </Field>

                    <Field name="maximumAllowedGuests">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1">
                          <Label htmlFor="status">
                            Maximum Allowed Guests
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Input
                            id="maximumAllowedGuests"
                            placeholder="Maximum allowed Guests"
                            {...field}
                          />
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-3">
                    <Field name="type">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1">
                          <Label htmlFor="type">
                            Type
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </Field>

                    <Field name="status">
                      {({ field, meta }: FieldProps) => (
                        <div className="space-y-1">
                          <Label htmlFor="status">
                            Status
                            {meta.touched && meta.error ? (
                              <span className="text-red-500 ml-1">{meta.error}</span>
                            ) : null}
                          </Label>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </Field>
                  </div>

                  <Field name="description">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-1 my-3">
                        <Label htmlFor="description">
                          Description
                          {meta.touched && meta.error ? (
                            <span className="text-red-500 ml-1">{meta.error}</span>
                          ) : null}
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Campground description"
                          {...field}
                        />
                      </div>
                    )}
                  </Field>

                  <Field name="images">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-1 my-3">
                        <Label htmlFor="images">
                          <div className="flex my-2">
                            <span className="mr-1">Images</span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="my-auto hover:cursor-pointer">
                                  {" "}
                                  <Info size="12" className="" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> Please upload 5 images in the correct order.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          {meta.touched && meta.error ? (
                            <span className="text-red-500 ml-1">{meta.error}</span>
                          ) : null}
                        </Label>
                        <FileDrop images={field.value} setImages={field.onChange} />
                      </div>
                    )}
                  </Field>
                  <div className="flex justify-end">
                    <Button type="submit">Create</Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewCampgroundDialog;
