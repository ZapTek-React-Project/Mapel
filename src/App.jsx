import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Categories from "./pages/Categories";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import "./App.css";
import "./fonts.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
