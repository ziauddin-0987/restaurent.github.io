import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Form from "./pages/Form.jsx";
import Pagenotfound from "./pages/pagenotfound.jsx";
// import Home from "./pages/Home.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Pagenotfound />,
    children: [
      {
        path: "Form",
        element: <Form />,
        errorElement: <Pagenotfound />,
        children: [
            { path: "Home", element: <Home /> },
          {
            path: "About",
            element: <About />,
          },
          {
            path: "Contact",
            element: <Contact />,
          },
          // {
          //   path: "Form",
          //   element: <Form />,
          // },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={route} />
    {/* <App /> */}
  </StrictMode>
);
