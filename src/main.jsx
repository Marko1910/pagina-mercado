import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./routes/login";
import Root from "./routes/root";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {path: "/", element: <Home/>}
    ],
  },
  { 
    path: "login", 
    element: <LoginPage /> 
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);