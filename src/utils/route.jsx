import { Navigate } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import AboutUs from "../page/about-us";
import ContactUs from "../page/contact-us";
import GetInvolved from "../page/get-involved";
import Home from "../page/home";
import WhatWeDo from "../page/what-we-do";

export const ROUTES = {
  HOME: "/home",
  WHAT_WE_DO: "/what-we-do",
  GET_INVOLVED: "/get-involved",
  ABOUT_US: "/about-us",
  CONTACT_US: "/contact-us",
};

export const ALL_ROUTES = () => {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={`${ROUTES.HOME}`} />,
        },
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.WHAT_WE_DO,
          element: <WhatWeDo />,
        },
        {
          path: ROUTES.GET_INVOLVED,
          element: <GetInvolved />,
        },
        {
          path: ROUTES.ABOUT_US,
          element: <AboutUs />,
        },
        {
          path: ROUTES.CONTACT_US,
          element: <ContactUs />,
        },
      ],
    },
  ];
};
