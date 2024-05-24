import { Suspense, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SubHead from "../components/Sub-header/SubHead";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router";
import { scrollToTp } from "../handler/Global_Handler/scrollToTop";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";

function RootRoute() {
  const location = useLocation();
  const [scrollY,setScrollY] = useState(false);
  useEffect(() => {
    scrollToTp();
  }, [location.pathname]);
  const onScrollDetect = () => {
    const scrlY = window.scrollY;
    if(scrlY >= 500 && !scrollY){
      setScrollY(true);
    }else if(scrlY < 500 && scrlY){
      setScrollY(false);
    }
  };
  window.onscroll = onScrollDetect;
  return (
    <div>
      <Header></Header>
      <SubHead></SubHead>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
      <BackToTopBtn isDisplay={scrollY}></BackToTopBtn>
    </div>
  );
}

export default RootRoute;
