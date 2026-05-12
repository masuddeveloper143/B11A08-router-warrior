import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './lauouts/Root.jsx';
import ErrorPage from './lauouts/pages/ErrorPage.jsx';
import Home from './lauouts/pages/Home.jsx';
import DoctorDetails from './lauouts/pages/DoctorDetails.jsx';
import Bookings from './lauouts/pages/Bookings.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },

      {
        path: "/doctors/:id",
        Component: DoctorDetails,
      },

      {
        path: "bookings",
        Component: Bookings,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
