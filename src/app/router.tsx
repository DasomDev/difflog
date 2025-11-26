import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);
