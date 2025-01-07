import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import Form from "./Form.jsx";
import Pagenotfound from "./pages/pagenotfound.jsx";
import Time from "./pages/time.jsx";
import Doller from "./pages/doller.jsx";
import Table from "./pages/table.jsx";
import Setting from "./pages/setting.jsx";
import Shop from "./pages/shop.jsx";
import Login from "./pages/login.jsx";
// import { Provider } from "react-redux";
// import './index.css'
// import store from "./app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "Setting",
        element: <Setting />,
      },
      {
        path: "doller",
        element: <Doller />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "time",
        element: <Time />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <Provider store={store}> */}
    {/* <App /> */}
    <RouterProvider router={route} />
    {/* </Provider> */}
    {/* </Provider> */}
    {/* <App /> */}
  </StrictMode>
);

{
  /* <App /> */
}
// )
