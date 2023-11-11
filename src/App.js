import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AudioTranscription from "./pages/AudioTranscription";
import TranscribeAudio from "./pages/TranscribeAudio";
import ProfileMenu from "./ProfileMenu";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/profile" element={<ProfileMenu />} />
			<Route path="/transcription/:actionNumber" element={<AudioTranscription />} />
			<Route path="/transcribe/:audioId" element={<TranscribeAudio />} />
		</Routes>
	);
};

export default App;
