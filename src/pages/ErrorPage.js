import React from "react";
import { FaArrowAltCircleLeft, FaBackward } from "react-icons/fa";
import { useRouteError } from "react-router-dom";
const { ipcRenderer } = window.require("electron");

function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Error Page Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<div>
				<buttion
					style={{
						display: "flex",
						alignItems: "center",
						// marginTop: "10px",

						// width: "100%",
						// padding: "10px",
						backgroundColor: "#4CAF50",
						color: "#fff",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
					}}
					onClick={() => {
						ipcRenderer.send("go-back");
					}}
				>
					<FaArrowAltCircleLeft />
					Back
				</buttion>
			</div>
		</div>
	);
}

export default ErrorPage;
