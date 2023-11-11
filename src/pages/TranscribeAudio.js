import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import 'materialize-css/dist/css/materialize.min.css';
const { ipcRenderer } = window.require('electron');

const TranscribeAudio = ({ audioFile }) => {
  const [transcription, setTranscription] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    // Implement audio playback logic
    // For simplicity, let's toggle between playing and pausing
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  // Ensure that audioFile is defined before accessing its properties
  const audioFileName = audioFile ? audioFile.name : 'Unknown Audio';

  // Go back
  const handleGoBack = () => {
    // Send 'go-back' message to the main process
    ipcRenderer.send('go-back');
  };

  // Functions for the three buttons
  const handleSkip = () => {
    // Implement skip logic
    alert('Skipped!');
  };

  const handleEdit = () => {
    // Implement edit logic
    alert('Editing...');
  };

  const handleUpload = () => {
    // Implement upload logic
    alert('Uploading...');
  };

  return (
    <div className="container center-align">
      <h1 className="teal-text text-darken-4">Transcribe Audio</h1>
      <p className="grey-text text-darken-1">Audio File: {audioFileName}</p>

      {/* Display the audio playback area */}
      <div className="row">
        <button
          className="btn-floating btn-large waves-effect waves-light teal"
          onClick={handlePlayClick}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        {/* You can add an audio player here based on your audio playback logic */}
      </div>

      {/* Display the transcription area */}
      <div className="row">
        <div className="input-field col s12">
          <textarea
            className="materialize-textarea"
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
            placeholder="Start transcribing..."
            rows={10}
            cols={50}
          />
        </div>
      </div>

      {/* Save transcription button */}
      <div className="row">
        <button
          className="btn waves-effect waves-light teal"
          onClick={() => alert('Transcription saved!')}
        >
          Save Transcription
        </button>

        {/* Buttons for Skip, Edit, and Upload */}
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <button
            className="btn waves-effect waves-light teal"
            onClick={handleSkip}
            style={{ marginRight: '10px' }}
          >
            Skip
          </button>
          <button
            className="btn waves-effect waves-light teal"
            onClick={handleEdit}
            style={{ marginRight: '10px' }}
          >
            Edit
          </button>
          <button
            className="btn waves-effect waves-light teal"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranscribeAudio;
