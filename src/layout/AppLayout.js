import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import { Loader } from "components/ui";

export const AppLayout = () => (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
);
