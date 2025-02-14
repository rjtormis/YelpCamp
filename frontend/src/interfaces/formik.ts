export interface FormikNewCampground {
  name: string;
  location: string;
  createdById: string;
  type: "private" | "public";
  status: "active" | "inactive" | "maintenance";
  description: string;
  currentGuests: number;
  maximumAllowedGuests: number;
  images: File[];
  price?: number;
}
