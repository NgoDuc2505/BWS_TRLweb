import { createBrowserRouter } from "react-router-dom";
import RootRoute from "../pages/RootRoute";
import DetailContent from "../pages/DetailContent/DetailContent";
import Content from "../components/Content/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "detail",
        element: <DetailContent></DetailContent>,
        children: [
           
        ],
      },
      {
        path: "/",
        element: <Content></Content>,
      },
    ],
  },
]);

export { router };
