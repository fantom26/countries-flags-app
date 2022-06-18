import { lazy } from "react";

export const AppRoutes = [
  {
    path: "/",
    title: "Home page",
    description: "Home page",
    component: lazy(() => import("../pages/MainPage/MainPage"))
  },
  {
    path: "/country/:name",
    title: "Country page",
    description: "Country page",
    component: lazy(() => import("../pages/CountryPage/CountryPage"))
  }
];
