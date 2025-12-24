import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostPage, PlaygroundPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/playground",
    element: <PlaygroundPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);
