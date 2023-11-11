import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import AudioTranscription from './AudioTranscription';
import TranscribeAudio from './TranscribeAudio';
import ProfileMenu from './ProfileMenu';

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
