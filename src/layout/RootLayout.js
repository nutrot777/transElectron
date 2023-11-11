import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
	const userSignedIn = localStorage.getItem("token");

	if (!userSignedIn) {
		return <Navigate to={"/login"} />;
	}
	return (
		<div>
			<Outlet />
		</div>
	);
}

export default RootLayout;
