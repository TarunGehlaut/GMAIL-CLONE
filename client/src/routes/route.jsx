import { lazy } from "react";

const Emails = lazy(() => import("../components/Emails"));
const Layout = lazy(() => import("../components/Layout"));
const ViewEmail = lazy(() => import("../components/ViewEmail"));

const routes = {
  layout: {
    path: "/",
    element: Layout,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
};

export { routes };
