import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

/*
  Adding routing to our application requires:
    1) define the routes we want to support and which components should be
    loaded for each path (URL -> component mapping)

    2) activate the router and load the route definitions defined

    3) make sure we have all these components we want to load and provide
    some means of navigating between those pages
*/

// Input: Array of route definition objects where each object
//        represents one route
const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
