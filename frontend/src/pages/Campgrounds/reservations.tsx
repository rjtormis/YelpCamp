import { columns, Reservation } from "@/components/campgrounds/reservations/columns";
import { DataTable } from "@/components/campgrounds/reservations/data-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Reservations() {
  const data: Reservation[] = [
    {
      id: "101",
      campgroundId: "1",
      campgroundName: "Sunny Pines Campground",
      userId: "u001",
      userName: "John Doe",
      checkInDate: "2025-02-01",
      checkOutDate: "2025-02-05",
      guests: 4,
      status: "confirmed",
      totalPrice: 400,
    },
    {
      id: "102",
      campgroundId: "3",
      campgroundName: "Lakeside Getaway",
      userId: "u002",
      userName: "Jane Smith",
      checkInDate: "2025-03-10",
      checkOutDate: "2025-03-15",
      guests: 2,
      status: "pending",
      totalPrice: 300,
    },
    {
      id: "103",
      campgroundId: "5",
      campgroundName: "Desert Oasis Campground",
      userId: "u003",
      userName: "Alice Johnson",
      checkInDate: "2025-01-20",
      checkOutDate: "2025-01-25",
      guests: 5,
      status: "cancelled",
      totalPrice: 500,
    },
  ];

  return (
    <div className="flex flex-grow flex-col p-4">
      <div className="flex flex-col justify-between">
        <DataTable columns={columns} data={data} />
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
    </div>
  );
}

export default Reservations;
