import { Suspense, useEffect } from "react";
import Header from "../components/Header/Header";
import SubHead from "../components/Sub-header/SubHead";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router";
import { scrollToTp } from "../handler/Global_Handler/scrollToTop";

function RootRoute() {
  
  const location = useLocation();
  useEffect(()=>{
    scrollToTp();
  },[location.pathname])

  return (
    <div>
      <Header></Header>
      <SubHead></SubHead>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default RootRoute;
