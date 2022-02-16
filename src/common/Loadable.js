import { Suspense } from "react";

import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => (
  <div
    style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, width: "100%" }}
  >
    <LinearProgress color="primary" />
  </div>
);

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
