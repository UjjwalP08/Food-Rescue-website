import { Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import AboutUs from "../page/about-us";
import ContactUs from "../page/contact-us";
import Home from "../page/home";
import WhatWeDo from "../page/what-we-do";
import Donate from "../page/donate";

export const ROUTES = {
  HOME: "/home",
  WHAT_WE_DO: "/what-we-do",
  GET_INVOLVED: "/get-involved",
  ABOUT_US: "/about-us",
  CONTACT_US: "/contact-us",
  DONATE: "/donate",
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
          path: ROUTES.DONATE,
          element: <Donate />,
        },
        // {
        //   path: ROUTES.GET_INVOLVED,
        //   element: <GetInvolved />,
        // },
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
