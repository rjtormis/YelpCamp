import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing";
import "./index.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
    </>
  )
);
function App() {
  return (
    <>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
