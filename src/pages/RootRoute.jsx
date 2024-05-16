import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import SubHead from "../components/Sub-header/SubHead";

import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Courousel/Carousel";
import { Outlet } from "react-router";

function RootRoute() {
  return (
    <div>
      {/* Hung */}
      <Header></Header>
      <SubHead></SubHead>
      {/* duy */}
      <Carousel></Carousel>
      {/* Quan */}
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      {/* Duc */}
      <Footer></Footer>
      {/* Login
      Register */}
    </div>
  );
}

export default RootRoute;
