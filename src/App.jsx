import { AppLayout } from "layout/AppLayout";

import { Controls } from "components/common/Controls";
import { Header } from "components/common/Header";

export const App = () => (
  <>
    <Header />
    <AppLayout>
      <Controls />
    </AppLayout>
  </>
);
