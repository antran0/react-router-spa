import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

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
// 1) define routes
// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <ProductsPage /> },
// ]);

/*
  An alternative way of defining routes.
*/
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  // 2) activate router
  return <RouterProvider router={router} />;
}

export default App;
