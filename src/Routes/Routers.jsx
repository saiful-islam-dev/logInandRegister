import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import App from "../App";
import LogIn from "../Components/LogIn/LogIn";
// import Home from "../page/Home/Home";
import Register from "../Components/Register/Register";
import TermsConditions from "../Components/TermsConditions";
import Error from "../page/Home/Error/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
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
				element: <Register />,
			},
			{
				path: "/termsConditions",
				element: <TermsConditions />,
			},
		],
	},
]);

export default router;
