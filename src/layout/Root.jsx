import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";

function layout() {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default layout;
