import { AppLayout, IndexLayout } from "layout";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "routes";

import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";

export const Router = () => {
  // Rendering routes
  const renderAppRoutes = () =>
    AppRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.component />} />
    ));

  console.log("renderAppRoutes", renderAppRoutes());

  return (
    <Routes>
      <Route element={<IndexLayout />}>
        <Route element={<AppLayout />}>{renderAppRoutes()}</Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
