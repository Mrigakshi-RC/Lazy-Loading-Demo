import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import OrderFood from "./OrderFood";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/contact",
      element: <div style={{fontSize:'2rem', width: '164px', margin:'auto'}}>Contact Us</div>,
    },
    {
      path: "/about-us",
      element: <div style={{fontSize:'2rem', width: '164px', margin:'auto'}}>About Us</div>,
    },
    {
      path: "/order-food",
      element: <OrderFood/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
