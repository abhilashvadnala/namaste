import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurant from "./src/components/Restaurant";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurant />
            }
        ],
        errorElement: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);
