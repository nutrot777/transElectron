import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
const { ipcRenderer } = window.require('electron');

const AudioTranscription = () => {
  const [showList, setShowList] = useState(false);
  const [audioFiles, setAudioFiles] = useState([]);
  const navigate = useNavigate(); // Add this line to get the navigate function

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust as needed
  };

  const topStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    background: '#fff', // Adjust background color as needed
    padding: '10px',
    textAlign: 'center',
    zIndex: '999',
  };

  const cardListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleStartTranscribing = (audioFile) => {
    // Navigate to the TranscribeAudio page with the selected audio file details
    navigate(`/transcribe/${audioFile.id}`, { state: { audioFile } });
  };

// go back 
  const handleGoBack = () => {
    // Send 'go-back' message to the main process
    ipcRenderer.send('go-back');
  };
  

  const handleDownloadClick = () => {
    // Simulate fetching audio files data (replace this with actual data fetching logic)
    const fetchedAudioFiles = [
      { id: 1, name: 'Audio File 1' },
      { id: 2, name: 'Audio File 2' },
      // Add more audio files as needed
    ];

    // Set the state to show the list of audio files
    setAudioFiles(fetchedAudioFiles);
    setShowList(true);
  };

  return (
    <div>
      <div style={topStyle}>
        <h1>Audio Transcription Page</h1>
      </div>
      {showList ? (
        <div style={cardListStyle}>
          {/** Render the list of audio files as cards */}
          {audioFiles.map((file) => (
        <div key={file.id} className="card">
            <div className="card-content">
            <span className="card-title">{file.name}</span>
            <button
                className="btn right"
                onClick={() => handleStartTranscribing(file)}
      >
        Start
      </button>
    </div>
  </div>
))}

        </div>
      ) : (
        <div style={centerStyle}>
          <p>Tab the button to download the audios you have been assigned to transcribe</p>
          <button
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleDownloadClick}
          >
            <FaDownload style={{ marginRight: '8px' }} /> Start Transcribing
          </button>
          <button style={{display: 'flex', alignItems: 'center', marginTop: '10px'}} onClick={handleGoBack}>Go Back</button>
        </div>
        
      )}
    </div>
  );
};

export default AudioTranscription;