import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import AudioTranscription from './AudioTranscription';
import TranscribeAudio from './TranscribeAudio';

const App = () => {
  return (
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/transcription/:actionNumber" element={<AudioTranscription />} />
        <Route path="/transcribe/:audioId" element={<TranscribeAudio />} />
      </Routes>
  );
};

export default App;
