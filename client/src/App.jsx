import { Suspense, lazy } from "react";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const ErrorPage = lazy(() => import("./components/ErrorPage"));

import SuspenseLoader from "./components/SuspenseLoader";
import { routes } from "./routes/route";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Whenever it's  "/" then it should navigate to /inbox */}
        <Route
          path={routes.layout.path}
          element={<Navigate to={`${routes.emails.path}/inbox`} />}
        />
        {/* This is The main layout route */}
        <Route path={routes.layout.path} element={<routes.layout.element />}>
          {/* This is list of mails route for different types like - span, inbox, bin   
          Here :type -> is suggesting that it's dynamic route 
          */}
          <Route
            path={`${routes.emails.path}/:type`}
            element={<routes.emails.element />}
            errorElement={<ErrorPage />}
          />

          {/* This is to view the specific email */}
          <Route
            path={routes.view.path}
            element={<routes.view.element />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          to={routes.invalid.path}
          element={<Navigate to={`${routes.emails.path}/inbox`} />}
        />
      </Route>
    )
  );
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
