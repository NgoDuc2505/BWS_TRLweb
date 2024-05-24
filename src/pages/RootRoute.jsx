import { Suspense, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SubHead from "../components/Sub-header/SubHead";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router";
import { scrollToTp } from "../handler/Global_Handler/scrollToTop";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";

function RootRoute() {
  const location = useLocation();
  useEffect(() => {
    scrollToTp();
  }, [location.pathname]);
  return (
    <div>
      <Header></Header>
      <SubHead></SubHead>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
      <BackToTopBtn></BackToTopBtn>
    </div>
  );
}

export default RootRoute;
