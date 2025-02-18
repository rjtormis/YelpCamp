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
import { Icon } from "leaflet";
import { Input } from "@/components/ui/input";
import DeleteDialog from "@/components/dialog/delete-dialog";
import landing from "@/assets/landing1.jpg";
import NewCampgroundDialog from "@/components/dialog/campgrounds/new-campground-dialog";

function Listings() {
  const manilaPosition = [14.5995, 120.9842];
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.freepik.com/512/74/74383.png",
    iconSize: [30, 30], // You can adjust the size as needed
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     const query = "Nayomi Sanctuary Resort, Batangas, Philippines";
  //     const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
  //       query
  //     )}`;

  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();

  //       if (data.length > 0) {
  //         const { lat, lon } = data[0]; // Extract first result
  //         const position = [parseFloat(lat), parseFloat(lon)]; // Convert to number tuple
  //         setPosition(position);
  //         console.log("📍 Coordinates:", position);
  //         return position;
  //       } else {
  //         console.log("⚠️ No location found.");
  //         return null;
  //       }
  //     } catch (error) {
  //       console.error("❌ Error fetching data:", error);
  //       return null;
  //     }
  //   }

  //   fetchData();
  // }, []);
  const data: Campground[] = [
    {
      id: "1",
      name: "Mount Pulag Campsite",
      location: "Mount Pulag, Benguet",
      latLng: [16.4725, 120.8736], // Coordinates of Mount Pulag
      type: 1,
      status: "active",
    },
    {
      id: "2",
      name: "Taal Volcano Campsite",
      location: "Taal Volcano, Batangas",
      latLng: [13.91, 120.9855], // Coordinates of Taal Volcano
      type: 2,
      status: "maintenance",
    },
    {
      id: "3",
      name: "Pagsanjan Falls Campsite",
      location: "Pagsanjan, Laguna",
      latLng: [14.13, 121.4597], // Coordinates of Pagsanjan Falls
      type: 1,
      status: "active",
    },
    {
      id: "4",
      name: "Anawangin Cove Campsite",
      location: "San Antonio, Zambales",
      latLng: [14.9825, 119.9472], // Coordinates of Anawangin Cove
      type: 1,
      status: "inactive",
    },
    {
      id: "5",
      name: "Banaue Rice Terraces Campsite",
      location: "Banaue, Ifugao",
      latLng: [16.929, 121.05], // Coordinates of Banaue Rice Terraces
      type: 2,
      status: "active",
    },
    {
      id: "6",
      name: "Pagudpud Beach Campsite",
      location: "Pagudpud, Ilocos Norte",
      latLng: [18.5097, 120.788], // Coordinates of Pagudpud
      type: 1,
      status: "active",
    },
    {
      id: "7",
      name: "Palawan Underground River Campsite",
      location: "Puerto Princesa, Palawan",
      latLng: [10.195, 118.7637], // Coordinates of Puerto Princesa Underground River
      type: 2,
      status: "maintenance",
    },
    {
      id: "8",
      name: "Mt. Apo Campsite",
      location: "Davao City, Davao del Sur",
      latLng: [6.9793, 125.2683], // Coordinates of Mount Apo
      type: 1,
      status: "inactive",
    },
    {
      id: "9",
      name: "Siargao Island Campsite",
      location: "Siargao, Surigao del Norte",
      latLng: [9.7875, 126.1571], // Coordinates of Siargao Island
      type: 1,
      status: "active",
    },
    {
      id: "10",
      name: "Donsol Whale Shark Campsite",
      location: "Donsol, Sorsogon",
      latLng: [12.9689, 123.728], // Coordinates of Donsol
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
            <NewCampgroundDialog />
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
          center={{ lat: manilaPosition[0], lng: manilaPosition[1] }}
          zoom={10}
          scrollWheelZoom={true}
          className="h-[99%] w-full rounded-xl "
          // style={{ height: "100vh", width: "30vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((campground) => (
            <Marker
              position={{ lat: campground.latLng[0], lng: campground.latLng[1] }}
              icon={customIcon}
            >
              <Popup>
                <div className="flex gap-2">
                  <img src={landing} alt="" className="w-[40px] h-[40px] object-cover" />
                  <span className="text-xs m-auto">{campground.name}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Listings;
