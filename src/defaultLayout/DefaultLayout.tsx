import Footer from "components/modules/Footer";
import Header from "components/modules/Header";
import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import 'styles/modules/defaultLayout.scss'
// import "styles/response/response.scss";

export const DefaultLayout: FC = (): ReactElement => {
  return (
    <div className="default-layout">
      {/* <Header /> */}
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
