import { createBrowserRouter } from "react-router-dom";
import RootRoute from "../pages/RootRoute";

import DetailCourse from "../components/DetailCourse/DetailCourse";
import HomePart from "../pages/HomePage/HomePart";
import DetailContent from "../components/DetailContent/DetailContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "detail",
        element: <DetailContent></DetailContent>,
        children: [
           {
            path:":idCourse",
            element: <DetailCourse></DetailCourse>,
           }
        ],
      },
      {
        path: "/",
        element: <HomePart></HomePart>,
      },
    ],
  },
]);

export { router };
