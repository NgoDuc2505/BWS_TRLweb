// import Content from "./components/Content/Content";
import { RouterProvider } from "react-router-dom";
// import DetailContent from "./pages/DetailContent/DetailContent.jsx";
// import RootRoute from "./pages/RootRoute.jsx";
import { router } from "./routes/route.config.jsx";



function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
