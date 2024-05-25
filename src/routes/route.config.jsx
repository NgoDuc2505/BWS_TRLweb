import { createBrowserRouter } from "react-router-dom";
import RootRoute from "../pages/RootRoute";

import DetailCourse from "../components/DetailCourse/DetailCourse";
import HomePart from "../pages/HomePage/HomePart";
import DetailContent from "../components/DetailContent/DetailContent";
import RegisterForm from "../components/Register/RegisterForm";
import LoginConverted from "../components/LoginForm/LoginConverted";

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
      {
        path: "/login",
        element: <LoginConverted></LoginConverted>
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>
      }
    ],
  },
]);

export { router };
