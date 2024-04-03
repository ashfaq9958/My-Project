import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "products/:id",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
