import Content from "./components/Content/Content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailContent from "./pages/DetailContent/DetailContent.jsx";
import RootRoute from "./pages/RootRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "detail",
        element: <DetailContent></DetailContent>,
        children: [
          
        ]
      },
      {
        path: "",
        element: <Content></Content>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
