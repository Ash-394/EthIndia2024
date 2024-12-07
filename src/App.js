import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import AnonLogin from "./pages/AnonLogin/AnonLogin";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },

    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },


    {
      path: "/anonverify",
      element: (
        <>
          <AnonLogin />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;