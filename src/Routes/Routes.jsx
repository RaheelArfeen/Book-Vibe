import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world</div>
    },
]);

export default router;