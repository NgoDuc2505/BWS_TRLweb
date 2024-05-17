import { Suspense } from "react";
import Header from "../components/Header/Header";
import SubHead from "../components/Sub-header/SubHead";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

function RootRoute() {
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
