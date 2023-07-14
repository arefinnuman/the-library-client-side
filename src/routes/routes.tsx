import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../pages/Books";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;