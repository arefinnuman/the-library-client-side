import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBooks from "../pages/AddBooks";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/Books";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
      {
        path: "book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "add-books",
        element: <AddBooks />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
