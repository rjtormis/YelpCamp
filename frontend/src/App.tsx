import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing";
import "./index.css";
import "./leaflet.css";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/login";
import CampgroundsLayout from "./layouts/CampgroundsLayout";
import Campgrounds from "./pages/Campgrounds/campgrounds";
import Listings from "./pages/Campgrounds/listings";
import Reservations from "./pages/Campgrounds/reservations";
import Inbox from "./pages/Campgrounds/inbox";
import Dashboard from "./pages/Campgrounds/dashboard";
import Campground from "./pages/Campgrounds/campground";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/campgrounds" element={<CampgroundsLayout />}>
        <Route index element={<Campgrounds />} />
        <Route path=":id" element={<Campground />} />
        <Route path="create" index element={<Campgrounds />} />
        <Route path="listings" element={<Listings />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </>
  )
);
function App() {
  return (
    <>
      <div className="min-h-screen">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
