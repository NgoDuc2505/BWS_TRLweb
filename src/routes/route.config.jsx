import { createBrowserRouter } from "react-router-dom";
import RootRoute from "../pages/RootRoute";

import DetailCourse from "../components/DetailCourse/DetailCourse";
import HomePart from "../pages/HomePage/HomePart";
import DetailContent from "../components/DetailContent/DetailContent";
import Login from "../components/LoginForm/Login";
import RegisterForm from "../components/Register/RegisterForm";

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
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>
      }
    ],
  },
]);

export { router };
