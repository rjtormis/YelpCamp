import landing from "@/assets/landing1.jpg";
import landing2 from "@/assets/landing2.jpg";
import ReviewItem, { ReviewItemProps } from "@/components/review-item";
import { Button } from "@/components/ui/button";
import { Eye, FlameKindling } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function Campground() {
  const reviews: ReviewItemProps[] = [
    { name: "Alice Johnson", rating: 4.5, review: "Great product! Highly recommended." },
    { name: "John Doe", rating: 5, review: "Absolutely loved it! Worth every penny." },
    { name: "Emily Smith", rating: 3.5, review: "Good, but could be improved in some areas." },
    { name: "Michael Brown", rating: 4, review: "Very satisfied with my purchase!" },
    { name: "Sarah Wilson", rating: 2, review: "Not what I expected. Could be better." },
  ];

  return (
    <div className="p-4 flex-grow ">
      <h1 className="text-2xl font-semibold mb-4">Campground Name</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Main Content - Pictures and Description */}
        <section className="col-span-2">
          {/* Pictures Section */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src={landing}
              alt="Campground 1"
              className="w-full h-full rounded-md object-cover"
            />
            <div className="grid grid-cols-2 gap-2">
              <img src={landing2} alt="Campground 2" className="w-full h-full rounded-md" />
              <img src={landing} alt="Campground 3" className="w-full h-full rounded-md" />
              <img src={landing2} alt="Campground 3" className="w-full h-full rounded-md" />
              <img src={landing} alt="Campground 3" className="w-full h-full rounded-md" />
            </div>
          </div>

          {/* Description Section */}
          <div className="my-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae urna at nunc
              gravida sollicitudin. Sed at velit a eros viverra fringilla.
            </p>
          </div>

          {/* Amenities Section */}
          <div className="mb-4">
            <ul className=" list-none flex gap-4 ">
              <li>Free Wi-Fi</li>
              <li>Pet-Friendly</li>
              <li>Restrooms</li>
              <li>Showers</li>
              <li>BBQ Grills</li>
              <li>Campfire Pits</li>
            </ul>
          </div>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            className=" h-[300px] w-full rounded-xl"
            // style={{ height: "100vh", width: "30vw" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>

          {reviews.map((review) => (
            <ReviewItem name={review.name} rating={review.rating} review={review.review} />
          ))}

          {/* Add More Reviews Section */}
          <div className="mt-4 flex gap-2 justify-end">
            <Button>
              <FlameKindling /> <span>Book</span>
            </Button>
            <Button variant="outline">
              <Eye />
              <span>See more Review</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Campground;
