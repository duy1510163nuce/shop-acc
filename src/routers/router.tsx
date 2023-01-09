
import { createBrowserRouter } from "react-router-dom";
import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";
import { DefaultLayout } from "defaultLayout/DefaultLayout";
import ShopPage from "pages/ShopPage";
import MagazinePage from "pages/MagazinePage";
import CartPage from "pages/CartPage";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      // {
      //   path: "/Home",
      //   element: <HomePage />,
      // },
      {
        path: `/detail/:id`,
        element: <DetailPage />,
      },
       {
        path: `/Shop`,
        element: <ShopPage />,
      },
       {
        path: `/Magazine`,
        element: <MagazinePage />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  }
]);