import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import ProfileMenu from "../ProfileMenu";
import AudioTranscription from "../pages/AudioTranscription";
import TranscribeAudio from "../pages/TranscribeAudio";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "profile",
				element: <ProfileMenu />,
			},
			{
				path: "transcription/:actionNumber",
				element: <AudioTranscription />,
			},
			{
				path: "transcription/:audioId",
				element: <TranscribeAudio />,
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
]);

export default routes;
