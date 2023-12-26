import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import { loader as postLoader } from "./pages/Post";
import SingleInfoItem, {
  action as singleAction,
} from "./coponents/SingleInfoItem";
import { loader as singlePost } from "./coponents/SingleInfoItem";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
import { action as postAction } from "./pages/CreatePost";
import { action as editAction, loader as editLoader } from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Post />, loader: postLoader },
      { path: "/create-post/", element: <CreatePost />, action: postAction },
      {
        path: "/single-post/:id",
        element: <SingleInfoItem />,
        loader: singlePost,
        action: singleAction,
      },
      {
        path: "/edit-post/:id",
        element: <Edit />,
        loader: editLoader,
        action: editAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
