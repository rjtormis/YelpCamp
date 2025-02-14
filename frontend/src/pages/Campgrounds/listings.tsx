import { columns, Campground } from "@/components/campgrounds/listings/columns";
import { DataTable } from "@/components/campgrounds/listings/data-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { LatLngTuple } from "leaflet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DeleteDialog from "@/components/dialog/delete-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search } from "lucide-react";

function Listings() {
  const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]);

  const data: Campground[] = [
    {
      id: "1",
      name: "Sunny Pines Campground",
      location: "Yosemite, CA",
      type: 1,
      status: "active",
    },
    {
      id: "2",
      name: "Mountain Haven Retreat",
      location: "Aspen, CO",
      type: 2,
      status: "maintenance",
    },
    {
      id: "3",
      name: "Lakeside Getaway",
      location: "Lake Tahoe, NV",
      type: 1,
      status: "active",
    },
    {
      id: "4",
      name: "Forest Creek Camp",
      location: "Portland, OR",
      type: 2,
      status: "inactive",
    },
    {
      id: "5",
      name: "Desert Oasis Campground",
      location: "Phoenix, AZ",
      type: 1,
      status: "active",
    },
    {
      id: "6",
      name: "Ocean Breeze Camping",
      location: "Malibu, CA",
      type: 2,
      status: "active",
    },
    {
      id: "7",
      name: "Highland Peaks Camping",
      location: "Denver, CO",
      type: 1,
      status: "maintenance",
    },
    {
      id: "8",
      name: "Valley View Campsite",
      location: "Salt Lake City, UT",
      type: 2,
      status: "inactive",
    },
    {
      id: "9",
      name: "Cedar Grove Camp",
      location: "Big Sur, CA",
      type: 1,
      status: "active",
    },
    {
      id: "10",
      name: "Golden Sands Retreat",
      location: "Santa Cruz, CA",
      type: 2,
      status: "active",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 flex-grow p-4">
      <div className="flex flex-col justify-between">
        <div className="">
          <div className="flex m-auto gap-2 my-4">
            <Input placeholder="Search" className="" />
            <Button>
              <Search />
            </Button>
            <DeleteDialog type="campground" />
          </div>
          <DataTable columns={columns} data={data} />
        </div>
        <Pagination className="my-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-col">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[99%] w-full rounded-xl"
          // style={{ height: "100vh", width: "30vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Listings;
