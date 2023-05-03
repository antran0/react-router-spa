import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

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
/*
  To have a common features, such as a navigation bar, be displayed on all pages,
  we can create a wrapper component and create a route definition with a list of
  wrapped pages passed to the 'children' property' of the route definition.
  
  Having such a root route is completely standard/normal when using react-router.
  This allows is to have different root routes with a totally different layout
  and different children.
*/
const routeDefinitions = [
  {
    path: "/",
    element: <RootLayout />, // acts as a parent route and wrapper for children
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
];

/*
  An alternative way of defining routes.
*/
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter(routeDefinitions);

function App() {
  // 2) activate router
  return <RouterProvider router={router} />;
}

export default App;
