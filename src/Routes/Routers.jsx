import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root"
import App from "../App";
import LogIn from "../Components/LogIn/LogIn";
// import Home from "../page/Home/Home";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
]);

export default router;