import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = (actionNumber) => {
    // Open the audio transcription page with the corresponding action number
    navigate(`/transcription/${actionNumber}`);
  };

  return (
    <div className="row">
      {/* First Row with Horizontal Cards */}
      <div className="col s6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">0</span>
            <p><b>Audios You Transcribed</b></p>
          </div>
        </div>
      </div>

      <div className="col s6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">0</span>
            <p><b>Transcriptions resolved</b></p>
          </div>
        </div>
      </div>

      {/* Second Row with Container */}
      <div className="col s12">
        <div className="container">
          <h5>Choose an activity below to start with.</h5>

          {/* First Clickable Card */}
          <div className="card">
            <div className="card-content">
              <span className="card-title">0 Audios to transcribe</span>
              <p>
                Download and transcribe audios word for word in your locale.
              </p>
              <button
                className="btn right"
                onClick={() => handleStartButtonClick(1)}
              >
                Start
              </button>
            </div>
          </div>

          {/* Second Clickable Card */}
          <div className="card">
            <div className="card-content">
              <span className="card-title">0 Transcriptions to resolve</span>
              <p>
                Download and resolve transcriptions in your locale.
              </p>
              <button
                className="btn right"
                onClick={() => handleStartButtonClick(2)}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
