import { createBrowserRouter } from "react-router-dom";

import Authentication from "./authentication/authentication.component";
import CategoriesPreview from "./categories-preview/categories-preview.component";
import Category from "./category/category.component";
import Checkout from "./checkout/checkout.component";
import Home from "./home/home.component";
import Navigation from "./navigation/navigation.component";
import Shop from "./shop/shop.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreview />,
          },
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
