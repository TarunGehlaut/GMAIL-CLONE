import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import MailsLoader from "./MailsLoader";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className=" bg-[#F6F8FC] font-sans ">
      <Header />
      <div>
        <SideBar />
        <Suspense fallback={<MailsLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
