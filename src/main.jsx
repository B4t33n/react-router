import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About/About.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Users from "./components/Users/Users.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Root from "./components/Root/Root.jsx";
import UsersDetails from "./components/UsersDetails/UsersDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: App },
      { path: "about", Component: About },
      { path: "blogs", Component: Blogs },
      {
        path: "users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path:'/users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UsersDetails
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
